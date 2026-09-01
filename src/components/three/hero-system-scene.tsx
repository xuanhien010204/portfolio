"use client";

import dynamic from "next/dynamic";

const HeroSystemCanvas = dynamic(() => import("./hero-system-canvas").then((module) => module.HeroSystemCanvas), {
  ssr: false,
  loading: () => <div className="scene-loading"><span className="scene-loading__core">API</span></div>,
});

export function HeroSystemScene() {
  return (
    <div className="hero-scene" aria-label="Distributed backend system visualization">
      <div className="hero-scene__chrome">
        <span><i className="status-dot" /> system.topology</span>
        <span>LIVE</span>
      </div>
      <div className="h-[430px] sm:h-[500px] lg:h-[560px]" aria-hidden="true"><HeroSystemCanvas /></div>
      <div className="hero-scene__footer">
        <span>POST /orders</span>
        <span>JWT → domain → persistence</span>
      </div>
    </div>
  );
}
