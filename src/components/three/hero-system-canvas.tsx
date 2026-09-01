"use client";

import { Html, Line } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";

const nodes = [
  { label: "CLIENT", detail: "React", position: [-3.2, 1.5, 0] as const },
  { label: "AUTH", detail: "JWT", position: [-2.7, -1.4, 0.2] as const },
  { label: "CACHE", detail: "Redis", position: [2.8, 1.5, -0.1] as const },
  { label: "DATABASE", detail: "PostgreSQL", position: [3.2, -1.2, 0.2] as const },
  { label: "QUEUE", detail: "Hangfire", position: [0.6, -2.4, -0.2] as const },
  { label: "CLOUD", detail: "Azure / AWS", position: [0.7, 2.5, -0.4] as const },
] as const;

function SystemNode({ label, detail, position }: (typeof nodes)[number]) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.18, 20, 20]} />
        <meshStandardMaterial color="#0b1327" emissive="#48d7ff" emissiveIntensity={1.8} roughness={0.25} />
      </mesh>
      <mesh scale={1.9}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshBasicMaterial color="#3bc8ff" transparent opacity={0.08} />
      </mesh>
      <Html center distanceFactor={8} className="pointer-events-none select-none">
        <div className="scene-label">
          <span>{label}</span>
          <small>{detail}</small>
        </div>
      </Html>
    </group>
  );
}

function DataPacket({ target, offset }: { target: readonly [number, number, number]; offset: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const reduceMotion = useReducedMotion();
  useFrame(({ clock }) => {
    if (!ref.current || reduceMotion) return;
    const progress = (clock.elapsedTime * 0.18 + offset) % 1;
    ref.current.position.set(target[0] * progress, target[1] * progress, target[2] * progress);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.055, 12, 12]} />
      <meshBasicMaterial color="#ffffff" />
    </mesh>
  );
}

function Network() {
  const group = useRef<THREE.Group>(null);
  const reduceMotion = useReducedMotion();
  useFrame(({ pointer }) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.08, 0.035);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.05, 0.035);
  });

  return (
    <group ref={group} scale={reduceMotion ? 0.92 : 1}>
      <mesh>
        <icosahedronGeometry args={[0.68, 2]} />
        <meshStandardMaterial color="#101b38" emissive="#6166ff" emissiveIntensity={0.85} metalness={0.35} roughness={0.25} wireframe />
      </mesh>
      <mesh scale={0.72}>
        <icosahedronGeometry args={[0.68, 2]} />
        <meshStandardMaterial color="#1c9dca" emissive="#46d9ff" emissiveIntensity={1.1} roughness={0.3} />
      </mesh>
      <Html center distanceFactor={8} className="pointer-events-none select-none">
        <div className="scene-core"><span>ASP.NET</span><small>API CORE</small></div>
      </Html>
      {nodes.map((node, index) => (
        <group key={node.label}>
          <Line points={[[0, 0, 0], node.position]} color={index % 2 ? "#706cff" : "#30c9ee"} lineWidth={0.7} transparent opacity={0.36} />
          <SystemNode {...node} />
          <DataPacket target={node.position} offset={index / nodes.length} />
        </group>
      ))}
    </group>
  );
}

export function HeroSystemCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 8.3], fov: 48 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
      <ambientLight intensity={0.8} />
      <pointLight position={[2, 3, 5]} color="#72e6ff" intensity={18} />
      <Network />
    </Canvas>
  );
}
