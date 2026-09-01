"use client";

import { useState } from "react";
import { skillGroups, requestLifecycle } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function CleanArchitectureDiagram() {
  return (
    <div className="architecture-card" aria-label="Clean Architecture dependency diagram">
      <div className="architecture-card__bar"><span>dependency-map.cs</span><span>read-only</span></div>
      <div className="clean-map">
        <div className="clean-node clean-node--api"><span>01</span><strong>API</strong><small>Transport</small></div>
        <div className="clean-arrow" aria-hidden="true">→</div>
        <div className="clean-node clean-node--app"><span>02</span><strong>Application</strong><small>Use cases</small></div>
        <div className="clean-arrow clean-arrow--reverse" aria-hidden="true">←</div>
        <div className="clean-node clean-node--infra"><span>04</span><strong>Infrastructure</strong><small>Adapters</small></div>
        <div className="clean-domain"><span aria-hidden="true">↓</span><div className="clean-node clean-node--domain"><span>03</span><strong>Domain</strong><small>Business rules · zero infrastructure dependencies</small></div></div>
      </div>
      <div className="code-note"><span>rule</span><code>Domain.Dependencies == []</code><i>passed</i></div>
    </div>
  );
}

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

export function SkillConstellation() {
  const [active, setActive] = useState(0);
  const group = skillGroups[active];
  return (
    <div className="skill-map">
      <div className="skill-map__core"><small>PRIMARY</small><strong>Backend<br />Engineering</strong></div>
      <div className="skill-map__branches" role="tablist" aria-label="Skill groups">
        {skillGroups.map((item, index) => (
          <button key={item.label} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)} className={cn("skill-branch", active === index && "is-active")}>{item.label}</button>
        ))}
      </div>
      <div className="skill-map__detail" role="tabpanel">
        <p className="eyebrow">{group.label}</p>
        <div className="mt-5 flex flex-wrap gap-2">{group.skills.map((skill) => <span className="tech-badge" key={skill}>{skill}</span>)}</div>
      </div>
    </div>
  );
}

export function RequestLifecycle() {
  const [active, setActive] = useState(0);
  return (
    <div className="lifecycle">
      <div className="lifecycle__track" role="list" aria-label="Request lifecycle">
        {requestLifecycle.map((node, index) => (
          <button key={node.label} type="button" onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} className={cn("lifecycle-node", index === active && "is-active")}>
            <span>{String(index + 1).padStart(2, "0")}</span><strong>{node.label}</strong>
          </button>
        ))}
      </div>
      <div className="lifecycle__readout"><span>layer/{String(active + 1).padStart(2, "0")}</span><p>{requestLifecycle[active].detail}</p><i>request healthy</i></div>
    </div>
  );
}
