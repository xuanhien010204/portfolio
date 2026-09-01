import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, copy, className }: { eyebrow: string; title: string; copy?: string; className?: string }) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">{title}</h2>
      {copy ? <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{copy}</p> : null}
    </div>
  );
}
