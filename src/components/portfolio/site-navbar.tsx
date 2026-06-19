"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function SiteNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<(typeof navItems)[number]["id"]>(navItems[0].id);

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 24);

      let nextSection: (typeof navItems)[number]["id"] = navItems[0].id;
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) {
          continue;
        }

        const top = section.offsetTop - 120;
        if (scrollY >= top) {
          nextSection = item.id;
        }
      }

      setActiveSection(nextSection);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border border-transparent px-4 py-3 transition-all duration-300",
            isScrolled
              ? "border-border bg-surface/85 shadow-glass backdrop-blur-2xl"
              : "bg-transparent",
          )}
        >
          <Link href="#hero" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white dark:bg-white dark:text-slate-950">
              BXH
            </span>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-text">{siteConfig.displayName}</p>
              <p className="text-xs uppercase tracking-[0.24em] text-muted">{siteConfig.role}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "rounded-full px-4 py-2 text-sm text-muted hover:text-text",
                  activeSection === item.id && "bg-slate-950 text-white dark:bg-white dark:text-slate-950",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Link
              href="#contact"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 dark:text-slate-950"
            >
              Let&apos;s Connect
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              aria-label="Toggle navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-text shadow-glass backdrop-blur-xl"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="mt-3 surface-card overflow-hidden p-3 lg:hidden">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm text-muted hover:bg-slate-950/5 hover:text-text dark:hover:bg-white/5",
                    activeSection === item.id && "bg-slate-950 text-white dark:bg-white dark:text-slate-950",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="rounded-2xl bg-primary px-4 py-3 text-sm font-medium text-white dark:text-slate-950"
              >
                Let&apos;s Connect
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
