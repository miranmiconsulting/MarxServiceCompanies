import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      // Add an `xs` cut for "wider than narrow phone" so things like the
      // navbar phone digit can show on most phones (≥400px) but stay hidden
      // on iPhone SE 1st-gen and similar tiny widths.
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        // Brand foundation — sampled from the Marx Service Companies business card
        navy: {
          DEFAULT: "#1B2D5C",
          dark: "#11204A",
        },
        brand: {
          DEFAULT: "#2B95D6",
          dark: "#1F78B0",
          light: "#E5F2FB",
        },
        // CERTIFIED green — RESERVED for Gutter Helmet® certification messaging.
        // Do NOT use for generic CTAs; the certification story loses its meaning.
        cert: {
          DEFAULT: "#2EA043",
          dark: "#1F7A33",
          light: "#E8F6EC",
        },
        // CTA orange — primary call-to-action color for "act now" buttons
        // (Call, Free Estimate). Recommended by the Trust & Authority pattern.
        accent: {
          DEFAULT: "#F97316",
          dark: "#C2570B",
          light: "#FFEDD5",
        },
      },
      fontFamily: {
        // CSS vars are populated by next/font in app/layout.tsx.
        // Fallback chain keeps text readable before fonts swap in.
        sans: [
          "var(--font-body)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "var(--font-body)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      maxWidth: {
        container: "1140px",
      },
      boxShadow: {
        soft: "0 6px 18px rgba(0,0,0,.08)",
        ring: "0 0 0 4px rgba(43,149,214,.18)",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};
export default config;
