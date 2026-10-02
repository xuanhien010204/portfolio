"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface TubesBackgroundProps {
  className?: string;
  tubesColors?: string[];
  lightsColors?: string[];
  lightIntensity?: number;
  count?: number;
  enableClickInteraction?: boolean;
  disabledOnMobile?: boolean;
}

const DEFAULT_TUBES_COLORS = ["#00d2ff", "#3b82f6", "#818cf8"];
const DEFAULT_LIGHTS_COLORS = ["#38bdf8", "#818cf8", "#60a5fa", "#22d3ee"];

export function TubesBackground({
  className,
  tubesColors = DEFAULT_TUBES_COLORS,
  lightsColors = DEFAULT_LIGHTS_COLORS,
  lightIntensity = 180,
  count = 12,
  enableClickInteraction = false,
  disabledOnMobile = true,
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    let engineInstance: import("./tubes-engine").TubesEngine | null = null;
    let clickCleanup: (() => void) | null = null;

    const init = async () => {
      // 1. Respect prefers-reduced-motion
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      // 2. Mobile & coarse pointer fallback
      if (typeof window !== "undefined" && disabledOnMobile) {
        const isTouchOrMobile =
          window.innerWidth < 768 ||
          (window.matchMedia("(pointer: coarse)").matches &&
            window.matchMedia("(hover: none)").matches);

        if (isTouchOrMobile) {
          return;
        }
      }

      const canvas = canvasRef.current;
      if (!canvas) return;

      // 3. Check WebGL support
      const hasWebGL = Boolean(
        canvas.getContext("webgl2") || canvas.getContext("webgl")
      );
      if (!hasWebGL) {
        return;
      }

      try {
        const { TubesEngine } = await import("./tubes-engine");

        if (isCancelled || !canvasRef.current) return;

        const engine = new TubesEngine(canvasRef.current, {
          tubesColors,
          lightsColors,
          lightIntensity,
          count,
          bloom: {
            strength: 0.85,
            radius: 0.45,
            threshold: 0.1,
          },
          sleepRadiusX: 1.8,
          sleepRadiusY: 0.9,
          sleepTimeScale1: 0.7,
          sleepTimeScale2: 1.3,
          lerp: 0.35,
          noise: 0.08,
        });

        if (isCancelled) {
          engine.dispose();
          return;
        }

        engineInstance = engine;
        setIsReady(true);

        // Optional Easter egg click (disabled by default)
        if (enableClickInteraction) {
          const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            if (
              target &&
              (target.closest("a") ||
                target.closest("button") ||
                target.closest("input") ||
                target.closest("textarea") ||
                target.closest("select") ||
                target.closest('[role="button"]'))
            ) {
              return;
            }
            engine.setColors(tubesColors);
          };

          window.addEventListener("click", handleClick, { passive: true });
          clickCleanup = () => window.removeEventListener("click", handleClick);
        }
      } catch (err) {
        console.warn("TubesBackground initialization fallback:", err);
      }
    };

    void init();

    return () => {
      isCancelled = true;
      if (clickCleanup) {
        clickCleanup();
      }
      if (engineInstance) {
        engineInstance.dispose();
        engineInstance = null;
      }
    };
  }, [
    tubesColors,
    lightsColors,
    lightIntensity,
    count,
    enableClickInteraction,
    disabledOnMobile,
  ]);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden select-none",
        className
      )}
      aria-hidden="true"
    >
      {/* 1. Ambient static glow fallback (always present) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 75% 25%, rgba(29, 126, 255, 0.08), transparent 45%), radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.06), transparent 40%)",
        }}
      />

      {/* 2. Interactive WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-1000 ease-out",
          isReady ? "opacity-85 lg:opacity-95" : "opacity-0"
        )}
      />

      {/* 3. Readability Vignette: Soft radial shield prioritizing text contrast while keeping tubes visible */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 45%, rgba(5, 7, 13, 0.75) 0%, rgba(5, 7, 13, 0.25) 55%, rgba(5, 7, 13, 0.65) 100%)",
        }}
      />

      {/* 4. Bottom fade into credibility strip & portfolio body */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#05070d] via-[#05070d]/60 to-transparent" />
    </div>
  );
}
