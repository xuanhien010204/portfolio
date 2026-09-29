"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const asrpNodes = [
  { label: "Flutter client", group: "edge" },
  { label: "ASP.NET Core API", group: "core" },
  { label: "Authentication", group: "service" },
  { label: "Application", group: "service" },
  { label: "Background jobs", group: "service" },
  { label: "Domain", group: "core" },
  { label: "PostgreSQL", group: "data" },
  { label: "Redis", group: "data" },
  { label: "AWS S3", group: "data" },
] as const;

export function AsrpArchitecture() {
  const [active, setActive] = useState("ASP.NET Core API");
  return (
    <div className="asrp-map" aria-label="ASRP system architecture">
      <div className="asrp-map__legend"><span><i className="legend-core" /> Core</span><span><i className="legend-service" /> Service</span><span><i className="legend-data" /> Data</span></div>
      <div className="asrp-map__canvas">
        {asrpNodes.map((node, index) => (
          <button key={node.label} type="button" onMouseEnter={() => setActive(node.label)} onFocus={() => setActive(node.label)} className={cn("asrp-node", `asrp-node--${node.group}`, active === node.label && "is-active")} style={{ gridArea: `n${index + 1}` }}>
            <span>{String(index + 1).padStart(2, "0")}</span>{node.label}
          </button>
        ))}
      </div>
      <p className="asrp-map__status"><span>active.node</span> {active} <i>healthy</i></p>
    </div>
  );
}

export function FlowRail({ items }: { items: readonly string[] }) {
  return (
    <div className="flow-rail" role="list" aria-label="Business workflow">
      {items.map((item, index) => (
        <div className="flow-step" role="listitem" key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{item}</strong>
          {index < items.length - 1 ? <i aria-hidden="true">→</i> : null}
        </div>
      ))}
    </div>
  );
}

