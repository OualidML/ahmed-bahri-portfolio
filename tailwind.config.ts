import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyber: {
          background: "#020617", // slate-950 deep navy/black
          navy: "#0a0f1d",
          card: "#0d1424",
          surface: "#111827",
          border: "#1e293b",
          charcoal: "#161b26",
          "charcoal-dark": "#0e131d",
          cyan: "#00f0ff",
          "cyan-dim": "#0891b2",
          "cyan-glow": "#22d3ee",
          neon: "#00f0ff",
          muted: "#94a3b8",
        },
        slate: {
          950: "#020617",
        },
        charcoal: {
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#080c14",
        },
      },
      fontFamily: {
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
        terminal: [
          "Courier New",
          "VT323",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      boxShadow: {
        "cyan-glow": "0 0 20px -5px rgba(0, 240, 255, 0.4)",
        "cyan-sm": "0 0 10px -2px rgba(0, 240, 255, 0.3)",
        "cyan-lg": "0 0 35px 2px rgba(0, 240, 255, 0.45)",
        "charcoal-border": "0 0 0 1px #1e293b",
      },
      backgroundImage: {
        "cyber-grid":
          "radial-gradient(rgba(0, 240, 255, 0.08) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
