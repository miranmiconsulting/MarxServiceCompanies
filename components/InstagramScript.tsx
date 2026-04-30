"use client";

// Loads Instagram's embed.js when the surrounding section enters viewport,
// not on every page load. Saves ~150 KB on bounces where the user never
// scrolls to the Recent Work section. Re-processes on SPA nav so cached
// embeds re-render after returning from another route.

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

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
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // If embed.js was already loaded (SPA nav back to this route), skip
    // the IntersectionObserver dance — just re-process new blockquotes.
    if (window.instgrm?.Embeds?.process) {
      window.instgrm.Embeds.process();
      setShouldLoad(true);
      return;
    }

    const node = sentinelRef.current;
    if (!node) return;

    // Fallback for very old browsers without IntersectionObserver — load
    // immediately rather than never. Modern browsers (>97% globally) hit
    // the IO branch.
    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShouldLoad(true);
            obs.disconnect();
          }
        });
      },
      // Pre-load 200px before the sentinel actually crosses into the
      // viewport so the embeds aren't blank when the user reaches them.
      { rootMargin: "200px 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" />
      {shouldLoad && (
        <Script
          id="instagram-embed-js"
          src={SRC}
          strategy="lazyOnload"
          onLoad={() => {
            window.instgrm?.Embeds?.process();
          }}
        />
      )}
    </>
  );
}
