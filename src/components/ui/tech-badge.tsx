import { cn } from "@/lib/utils";

export function TechBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("tech-badge", className)}>{children}</span>;
}
