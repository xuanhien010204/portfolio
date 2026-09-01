import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ActionLink({ href, children, variant = "secondary", download, className }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "ghost"; download?: boolean; className?: string }) {
  return (
    <Link href={href} download={download} className={cn("action-link group", `action-link--${variant}`, className)}>
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}
