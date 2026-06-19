import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      boxShadow: {
        glass: "0 20px 80px rgba(15, 23, 42, 0.12)",
        panel: "0 24px 60px rgba(15, 23, 42, 0.08)",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(100, 116, 139, 0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(100, 116, 139, 0.14) 1px, transparent 1px)",
        spotlight:
          "radial-gradient(circle at top, rgba(37, 99, 235, 0.22), transparent 38%), radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.18), transparent 28%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
