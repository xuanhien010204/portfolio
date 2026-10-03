import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

export interface TubesEngineOptions {
  tubesColors?: string[];
  lightsColors?: string[];
  lightIntensity?: number;
  count?: number;
  bloom?: {
    strength?: number;
    radius?: number;
    threshold?: number;
  } | false;
  sleepRadiusX?: number;
  sleepRadiusY?: number;
  sleepTimeScale1?: number;
  sleepTimeScale2?: number;
  lerp?: number;
  noise?: number;
}

interface TubeMeshItem {
  mesh: THREE.Mesh<THREE.TubeGeometry, THREE.MeshStandardMaterial>;
  curve: THREE.CatmullRomCurve3;
  points: THREE.Vector3[];
  head: THREE.Vector3;
  radius: number;
  tubularSegments: number;
  radialSegments: number;
  noiseOffset: number;
}

export class TubesEngine {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private composer: EffectComposer | null = null;
  private tubes: TubeMeshItem[] = [];
  private lights: THREE.PointLight[] = [];
  private options: Required<Omit<TubesEngineOptions, "bloom">> & {
    bloom: { strength: number; radius: number; threshold: number } | false;
  };

  private target = new THREE.Vector3(0, 0, 0);
  private currentMouseWorld = new THREE.Vector3(0, 0, 0);
  private raycaster = new THREE.Raycaster();
  private plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  private ndc = new THREE.Vector2();

  private isHovered = false;
  private isDisposed = false;
  private isRunning = false;
  private animFrameId: number | null = null;
  private startTime = 0;

  private intersectionObserver: IntersectionObserver | null = null;
  private resizeObserver: ResizeObserver | null = null;

  constructor(canvas: HTMLCanvasElement, options: TubesEngineOptions = {}) {
    this.canvas = canvas;
    this.options = {
      tubesColors: options.tubesColors ?? ["#00d2ff", "#3b82f6", "#818cf8"],
      lightsColors: options.lightsColors ?? ["#38bdf8", "#818cf8", "#60a5fa", "#22d3ee"],
      lightIntensity: options.lightIntensity ?? 180,
      count: options.count ?? 12,
      bloom: options.bloom === false ? false : {
        strength: options.bloom?.strength ?? 0.85,
        radius: options.bloom?.radius ?? 0.45,
        threshold: options.bloom?.threshold ?? 0.1,
      },
      sleepRadiusX: options.sleepRadiusX ?? 1.8,
      sleepRadiusY: options.sleepRadiusY ?? 0.9,
      sleepTimeScale1: options.sleepTimeScale1 ?? 0.7,
      sleepTimeScale2: options.sleepTimeScale2 ?? 1.3,
      lerp: options.lerp ?? 0.35,
      noise: options.noise ?? 0.08,
    };

    // 1. Scene & Camera
    this.scene = new THREE.Scene();
    const width = Math.max(this.canvas.clientWidth || window.innerWidth, 1);
    const height = Math.max(this.canvas.clientHeight || window.innerHeight, 1);

    this.camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    this.camera.position.set(0, 0, 5);
    this.camera.lookAt(0, 0, 0);

    // 2. WebGL Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(width, height, false);

    // 3. Postprocessing Bloom
    if (this.options.bloom) {
      this.composer = new EffectComposer(this.renderer);
      const renderPass = new RenderPass(this.scene, this.camera);
      this.composer.addPass(renderPass);

      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(width, height),
        this.options.bloom.strength,
        this.options.bloom.radius,
        this.options.bloom.threshold
      );
      this.composer.addPass(bloomPass);
    }

    // 4. Lights & Tubes
    this.initLights();
    this.initTubes();

    // 5. Listeners & Observers
    this.bindEvents();

    // 6. Start Loop
    this.start();
  }

  private initLights(): void {
    // Ambient light so shaded tube sides retain deep technical indigo tone
    const ambientLight = new THREE.AmbientLight(0x0a192f, 1.8);
    this.scene.add(ambientLight);

    const coords: [number, number, number][] = [
      [-6, -4, 5],
      [-4, 6, 5],
      [6, -4, 5],
      [5, 5, 5],
    ];

    for (let i = 0; i < 4; i++) {
      const color = this.options.lightsColors[i % this.options.lightsColors.length];
      const light = new THREE.PointLight(color, this.options.lightIntensity, 60);
      light.position.set(...coords[i]);
      this.lights.push(light);
      this.scene.add(light);
    }
  }

  private initTubes(): void {
    const colorStops = this.options.tubesColors.map((c) => new THREE.Color(c));

    for (let i = 0; i < this.options.count; i++) {
      const tubularSegments = 48;
      const radialSegments = 10;
      // Tangible ribbon-cable radius: 0.024 to 0.056 in 3D world units
      const radius = 0.024 + (i / this.options.count) * 0.032;

      const points: THREE.Vector3[] = [];
      for (let s = 0; s <= tubularSegments; s++) {
        points.push(new THREE.Vector3(0, 0, (-s / tubularSegments) * 3));
      }

      const curve = new THREE.CatmullRomCurve3(points);
      const geometry = new THREE.TubeGeometry(curve, tubularSegments, radius, radialSegments, false);

      // Color interpolation
      const t = this.options.count > 1 ? i / (this.options.count - 1) : 0;
      const color = this.interpolateColor(colorStops, t);

      const material = new THREE.MeshStandardMaterial({
        color,
        metalness: 0.88,
        roughness: 0.24,
      });

      const mesh = new THREE.Mesh(geometry, material);
      this.scene.add(mesh);

      this.tubes.push({
        mesh,
        curve,
        points,
        head: new THREE.Vector3(0, 0, 0),
        radius,
        tubularSegments,
        radialSegments,
        noiseOffset: i * 0.55,
      });
    }
  }

  private interpolateColor(stops: THREE.Color[], t: number): THREE.Color {
    if (stops.length === 1) return stops[0].clone();
    const scaled = Math.max(0, Math.min(1, t)) * (stops.length - 1);
    const index = Math.floor(scaled);
    const fraction = scaled - index;
    if (index >= stops.length - 1) return stops[stops.length - 1].clone();
    const c1 = stops[index];
    const c2 = stops[index + 1];
    return new THREE.Color(
      c1.r + fraction * (c2.r - c1.r),
      c1.g + fraction * (c2.g - c1.g),
      c1.b + fraction * (c2.b - c1.b)
    );
  }

  private updateTubeGeometry(item: TubeMeshItem): void {
    const { mesh, curve, tubularSegments, radialSegments, radius } = item;
    const geometry = mesh.geometry;
    const n = curve.computeFrenetFrames(curve.points.length, false);

    const pos = geometry.getAttribute("position") as THREE.BufferAttribute;
    const norm = geometry.getAttribute("normal") as THREE.BufferAttribute;
    const center = new THREE.Vector3();
    const u = new THREE.Vector3();

    for (let e = 0; e <= tubularSegments; e++) {
      const h = e / tubularSegments;
      // Taper at head and tail
      const c = Math.sin(h * Math.PI) * radius;
      center.copy(curve.points[e]);
      let d = e * (radialSegments + 1);
      const p = n.normals[e];
      const m = n.binormals[e];

      for (let k = 0; k <= radialSegments; k++) {
        const theta = (k / radialSegments) * Math.PI * 2;
        const sin = Math.sin(theta);
        const cos = -Math.cos(theta);
        u.x = cos * p.x + sin * m.x;
        u.y = cos * p.y + sin * m.y;
        u.z = cos * p.z + sin * m.z;
        u.normalize();

        pos.setXYZ(d, center.x + c * u.x, center.y + c * u.y, center.z + c * u.z);
        norm.setXYZ(d, u.x, u.y, u.z);
        d++;
      }
    }

    pos.needsUpdate = true;
    norm.needsUpdate = true;
  }

  private onPointerMove = (e: PointerEvent): void => {
    if (this.isDisposed) return;
    const rect = this.canvas.getBoundingClientRect();
    const inBounds =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    if (inBounds) {
      this.isHovered = true;
      this.ndc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.ndc.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera(this.ndc, this.camera);
      this.raycaster.ray.intersectPlane(this.plane, this.currentMouseWorld);
    } else if (this.isHovered) {
      this.isHovered = false;
    }
  };

  private onPointerLeave = (): void => {
    this.isHovered = false;
  };

  private onVisibilityChange = (): void => {
    if (document.hidden) {
      this.stop();
    } else {
      this.start();
    }
  };

  public resize(): void {
    if (this.isDisposed) return;
    const width = Math.max(this.canvas.clientWidth || this.canvas.parentElement?.clientWidth || window.innerWidth, 1);
    const height = Math.max(this.canvas.clientHeight || this.canvas.parentElement?.clientHeight || window.innerHeight, 1);

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(width, height, false);

    if (this.composer) {
      this.composer.setSize(width, height);
    }
  }

  private bindEvents(): void {
    document.body.addEventListener("pointermove", this.onPointerMove, { passive: true });
    document.body.addEventListener("pointerleave", this.onPointerLeave, { passive: true });
    document.addEventListener("visibilitychange", this.onVisibilityChange);

    // ResizeObserver on parent container
    if (typeof ResizeObserver !== "undefined" && this.canvas.parentElement) {
      this.resizeObserver = new ResizeObserver(() => this.resize());
      this.resizeObserver.observe(this.canvas.parentElement);
    }

    // IntersectionObserver to pause rendering when scrolled out of view
    if (typeof IntersectionObserver !== "undefined") {
      this.intersectionObserver = new IntersectionObserver((entries) => {
        const isVisible = entries[0]?.isIntersecting ?? false;
        if (isVisible) {
          this.start();
        } else {
          this.stop();
        }
      }, { threshold: 0 });
      this.intersectionObserver.observe(this.canvas);
    }
  }

  private start(): void {
    if (this.isRunning || this.isDisposed) return;
    this.isRunning = true;
    if (!this.startTime) {
      this.startTime = performance.now();
    }
    this.tick();
  }

  private stop(): void {
    if (!this.isRunning) return;
    this.isRunning = false;
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }

  private tick = (): void => {
    if (!this.isRunning || this.isDisposed) return;

    const elapsed = (performance.now() - this.startTime) * 0.001;

    // 1. Compute target
    if (this.isHovered) {
      this.target.copy(this.currentMouseWorld);
    } else {
      // Idle fluid Lissajous motion across upper & right hero space
      this.target.x = 0.8 + Math.cos(elapsed * 0.55) * 2.2;
      this.target.y = 0.2 + Math.sin(elapsed * 1.1) * 1.1;
    }

    // 2. Update each tube
    for (let i = 0; i < this.tubes.length; i++) {
      const item = this.tubes[i];
      const time = elapsed * 1.4 + item.noiseOffset;
      const angle = (i / this.tubes.length) * Math.PI * 2;
      const bundleSpread = 0.16;

      const offsetX =
        Math.cos(angle + elapsed * 0.6) * bundleSpread +
        Math.sin(time) * this.options.noise;
      const offsetY =
        Math.sin(angle + elapsed * 0.6) * (bundleSpread * 0.8) +
        Math.cos(time * 0.8) * this.options.noise;
      const offsetZ = Math.sin(time * 0.6) * 0.1;

      item.head.copy(this.target);
      item.head.x += offsetX;
      item.head.y += offsetY;
      item.head.z += offsetZ;

      // Trailing snake physics
      item.points[0].lerp(item.head, 0.16);
      for (let s = 1; s < item.points.length; s++) {
        item.points[s].lerp(item.points[s - 1], 0.2);
      }

      this.updateTubeGeometry(item);
    }

    // 3. Render
    if (this.composer) {
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }

    this.animFrameId = requestAnimationFrame(this.tick);
  };

  public setColors(colors: string[]): void {
    this.options.tubesColors = colors;
    const colorStops = colors.map((c) => new THREE.Color(c));
    this.tubes.forEach((t, i) => {
      const ratio = this.tubes.length > 1 ? i / (this.tubes.length - 1) : 0;
      t.mesh.material.color.copy(this.interpolateColor(colorStops, ratio));
    });
  }

  public dispose(): void {
    if (this.isDisposed) return;
    this.isDisposed = true;
    this.stop();

    document.body.removeEventListener("pointermove", this.onPointerMove);
    document.body.removeEventListener("pointerleave", this.onPointerLeave);
    document.removeEventListener("visibilitychange", this.onVisibilityChange);

    this.resizeObserver?.disconnect();
    this.intersectionObserver?.disconnect();

    // Traverse and dispose Three.js objects
    this.scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m) => m.dispose());
        } else {
          obj.material.dispose();
        }
      }
    });

    this.composer?.dispose();
    this.renderer.dispose();
  }
}
