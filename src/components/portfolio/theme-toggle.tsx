"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const saved = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = saved ?? (prefersDark ? "dark" : "light");
    root.classList.toggle("dark", nextTheme === "dark");
    setTheme(nextTheme);
    setMounted(true);
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    root.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-text shadow-glass backdrop-blur-xl hover:border-primary/50 hover:text-primary",
        className,
      )}
    >
      {mounted && theme === "dark" ? <SunMedium className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}
    </button>
  );
}
