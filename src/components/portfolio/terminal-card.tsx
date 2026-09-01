"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const commands = [
  { command: "whoami", output: ["Bùi Xuân Hiên", ".NET Backend Engineer"] },
  { command: "stack --primary", output: ["ASP.NET Core · EF Core", "PostgreSQL · Azure · Docker"] },
  { command: "focus", output: ["Reliable APIs · Clean Architecture", "Cloud systems · System design"] },
] as const;

export function TerminalCard() {
  const [active, setActive] = useState(0);
  const current = commands[active];
  return (
    <div className="terminal-card">
      <div className="terminal-bar"><span><i /><i /><i /></span><small>xh — engineering profile</small></div>
      <div className="terminal-body" aria-live="polite">
        <p><span>$</span> {current.command}</p>
        {current.output.map((line) => <p className="terminal-output" key={line}>{line}</p>)}
        <p className="mt-5"><span>$</span> <i className="terminal-cursor" /></p>
      </div>
      <div className="terminal-tabs">
        {commands.map((item, index) => <button type="button" key={item.command} onClick={() => setActive(index)} className={cn(index === active && "is-active")}>{item.command}</button>)}
      </div>
    </div>
  );
}
