import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sampled directly from the Marx Service Companies business card
        navy: {
          DEFAULT: "#1B2D5C",
          dark: "#11204A",
        },
        brand: {
          DEFAULT: "#2B95D6",
          dark: "#1F78B0",
          light: "#E5F2FB",
        },
        accent: {
          DEFAULT: "#2EA043", // Gutter Helmet Certified ribbon green
          dark: "#1F7A33",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
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
