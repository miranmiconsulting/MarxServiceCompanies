"use client";

// Progressive-enhancement scroll reveal. SSR renders content VISIBLE so
// a failed hydration or disabled JS still shows the page. On client
// mount we opt into the hidden→visible fade when JS is available and
// the user hasn't requested reduced motion.
//
// Prior behavior (SSR opacity-0 waiting for IntersectionObserver) meant
// every below-the-fold section was invisible until React hydrated. If
// hydration ever failed, the page appeared blank.
//
// Usage: <Reveal><h2>...</h2></Reveal> or <Reveal delay={120}>...</Reveal>

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "aside";
  once?: boolean;
};

// 'default' = visible without transition — what SSR renders, what no-JS
// sees, and what the fallback shows on browsers without IntersectionObserver.
// 'hidden'  = opted into animation, waiting for the observer to fire.
// 'visible' = animate to visible.
type State = "default" | "hidden" | "visible";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState<State>("default");

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Reduced motion: skip the animation entirely, jump straight to visible.
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setState("visible");
      return;
    }

    // No IntersectionObserver: keep the default (visible) state.
    if (typeof IntersectionObserver === "undefined") return;

    const node = ref.current;
    if (!node) return;

    // Opt into the animation now that JS is running. If this render never
    // paints (e.g. the observer fires the same frame for above-the-fold
    // items), the user sees a smooth fade-in instead of a flash.
    setState("hidden");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setState("visible");
            if (once) obs.disconnect();
          } else if (!once) {
            setState("hidden");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [once]);

  // Transition applies ONLY on the way TO visible so the default→hidden
  // step is instantaneous (no jarring reverse animation on hydration).
  const transitionClass =
    state === "visible"
      ? "transition-all duration-700 ease-out motion-reduce:transition-none"
      : "";
  const stateClass =
    state === "hidden"
      ? "opacity-0 translate-y-4"
      : "opacity-100 translate-y-0";

  return (
    <Tag
      ref={ref as never}
      className={`${transitionClass} ${stateClass} ${className}`.trim()}
      style={{ transitionDelay: state === "visible" ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
