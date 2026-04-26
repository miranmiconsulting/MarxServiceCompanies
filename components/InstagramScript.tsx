"use client";

// Loads Instagram's embed.js exactly once and re-processes embeds after
// client-side navigation (since embed.js only auto-runs on first load).

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const SRC = "https://www.instagram.com/embed.js";

export default function InstagramScript() {
  useEffect(() => {
    // If embed.js is already loaded (returning to this route via SPA nav),
    // re-process so any new blockquotes get rendered.
    window.instgrm?.Embeds?.process();
  }, []);

  return (
    <Script
      id="instagram-embed-js"
      src={SRC}
      strategy="lazyOnload"
      onLoad={() => {
        window.instgrm?.Embeds?.process();
      }}
    />
  );
}
