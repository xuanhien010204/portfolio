"use client";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/motion/reveal";
const filters = ["All", "AI", "Microsoft", "GitHub", "Cloud"] as const;
const credentials = [
  { issuer: "Microsoft", category: "Microsoft", label: "Credential name", placeholder: "[REAL MICROSOFT CERTIFICATE IMAGE]" },
  { issuer: "GitHub", category: "GitHub", label: "Credential name", placeholder: "[REAL GITHUB CERTIFICATE IMAGE]" },
  { issuer: "Claude / AI", category: "AI", label: "Credential name", placeholder: "[REAL CLAUDE / AI CERTIFICATE IMAGE]" },
  { issuer: "Verified credential", category: "Cloud", label: "Credential name", placeholder: "[REAL CERTIFICATE IMAGE]" },
] as const;
export function CredentialGallery() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const visible = credentials.filter((item) => activeFilter === "All" || item.category === activeFilter);
  return <div className="credentials-wrap"><div className="credential-filters" role="tablist" aria-label="Filter credentials">{filters.map((filter) => <button key={filter} type="button" role="tab" aria-selected={activeFilter === filter} className={activeFilter === filter ? "is-active" : ""} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div><div className="credential-grid">{visible.map((credential, index) => <Reveal key={credential.issuer} delay={index * 0.05} className="credential-card"><div className="certificate-placeholder"><span>VERIFIED IMAGE SLOT</span><strong>{credential.placeholder}</strong><i>AUTHENTIC ASSET PENDING</i></div><div className="credential-info"><div><span>{credential.issuer}</span><strong>{credential.label}</strong></div><button type="button" aria-label={`View ${credential.issuer} credential`}>View <ArrowUpRight /></button></div></Reveal>)}</div></div>;
}
