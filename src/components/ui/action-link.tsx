import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ActionLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
  className?: string;
  icon?: React.ReactNode | "none";
}

export function ActionLink({
  href,
  children,
  variant = "secondary",
  download,
  className,
  icon,
}: ActionLinkProps) {
  const isAnchor = href.startsWith("#");
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  let renderIcon: React.ReactNode = null;
  if (icon === "none") {
    renderIcon = null;
  } else if (icon !== undefined) {
    renderIcon = icon;
  } else if (isAnchor) {
    renderIcon = (
      <ArrowDown
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
        aria-hidden="true"
      />
    );
  } else if (isExternal || download) {
    renderIcon = (
      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    );
  } else {
    renderIcon = (
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    );
  }

  return (
    <Link
      href={href}
      download={download}
      className={cn("action-link group", `action-link--${variant}`, className)}
    >
      {children}
      {renderIcon}
    </Link>
  );
}
