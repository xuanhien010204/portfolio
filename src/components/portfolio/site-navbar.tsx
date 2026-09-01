"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Github, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { navItems, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <Container>
        <div className={cn("nav-shell", scrolled && "nav-shell--scrolled")}>
          <Link href="/" className="group flex items-center gap-3" aria-label="Bùi Xuân Hiên — home">
            <span className="logo-mark">&lt;XH/&gt;</span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-slate-400 xl:block">Backend systems</span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => <Link key={item.href} href={item.href} className="nav-link">{item.label}</Link>)}
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            <Link href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="icon-button" aria-label="GitHub profile"><Github className="h-4 w-4" /></Link>
            <Link href={siteConfig.resumePath} download className="nav-resume"><Download className="h-4 w-4" /> Resume</Link>
            <Link href="/#contact" className="nav-talk">Let&apos;s talk</Link>
          </div>
          <button type="button" className="icon-button lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <AnimatePresence>
          {open ? (
            <motion.div id="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="mobile-menu">
              <nav className="grid" aria-label="Mobile navigation">
                {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="mobile-link">{item.label}</Link>)}
              </nav>
              <div className="mt-3 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                <Link href={siteConfig.resumePath} download className="action-link action-link--secondary justify-center"><Download className="h-4 w-4" /> Resume</Link>
                <Link href="/#contact" onClick={() => setOpen(false)} className="action-link action-link--primary justify-center">Let&apos;s talk</Link>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </header>
  );
}
