// Decorative animated rain + roofline/gutter scene for the hero.
// All animation is in CSS (see app/globals.css). prefers-reduced-motion is honored.
// aria-hidden because this is purely decorative.

type Drop = { left: number; delay: number; duration: number; opacity: number };

// Deterministic distribution — no Math.random() so SSR matches client.
const DROPS: Drop[] = [
  { left: 3,  delay: 0.0, duration: 1.6, opacity: 0.45 },
  { left: 7,  delay: 0.8, duration: 1.2, opacity: 0.55 },
  { left: 11, delay: 0.3, duration: 1.4, opacity: 0.40 },
  { left: 16, delay: 1.1, duration: 1.7, opacity: 0.55 },
  { left: 21, delay: 0.5, duration: 1.3, opacity: 0.50 },
  { left: 26, delay: 0.2, duration: 1.5, opacity: 0.55 },
  { left: 31, delay: 0.9, duration: 1.1, opacity: 0.45 },
  { left: 36, delay: 0.4, duration: 1.6, opacity: 0.60 },
  { left: 41, delay: 1.0, duration: 1.3, opacity: 0.50 },
  { left: 46, delay: 0.6, duration: 1.4, opacity: 0.40 },
  { left: 51, delay: 0.1, duration: 1.7, opacity: 0.55 },
  { left: 56, delay: 0.8, duration: 1.2, opacity: 0.55 },
  { left: 61, delay: 0.5, duration: 1.5, opacity: 0.45 },
  { left: 66, delay: 0.3, duration: 1.6, opacity: 0.50 },
  { left: 71, delay: 1.0, duration: 1.3, opacity: 0.55 },
  { left: 76, delay: 0.7, duration: 1.4, opacity: 0.60 },
  { left: 81, delay: 0.2, duration: 1.5, opacity: 0.50 },
  { left: 86, delay: 0.9, duration: 1.2, opacity: 0.45 },
  { left: 91, delay: 0.4, duration: 1.6, opacity: 0.55 },
  { left: 96, delay: 0.6, duration: 1.3, opacity: 0.50 },
  { left: 13, delay: 1.3, duration: 1.5, opacity: 0.40 },
  { left: 33, delay: 1.4, duration: 1.4, opacity: 0.55 },
  { left: 53, delay: 1.2, duration: 1.6, opacity: 0.45 },
  { left: 73, delay: 1.5, duration: 1.3, opacity: 0.55 },
  { left: 93, delay: 1.1, duration: 1.5, opacity: 0.50 },
];

export default function RainScene() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Rain layer */}
      <div className="absolute inset-0">
        {DROPS.map((d, i) => (
          <span
            key={i}
            className="raindrop"
            style={{
              left: `${d.left}%`,
              animationDelay: `${d.delay}s`,
              animationDuration: `${d.duration}s`,
              opacity: d.opacity,
            }}
          />
        ))}
      </div>

      {/* Roofline + gutter + downspout — kept very subtle so the hero copy
          stays the focal point. Whole group sits in the bottom ~30% of the
          hero with reduced opacity. */}
      <svg
        viewBox="0 0 1200 320"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-x-0 bottom-0 h-[30%] w-full opacity-60 md:h-[38%]"
      >
        <defs>
          <linearGradient id="gutterShine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%"   stopColor="rgba(255,255,255,0)" />
            <stop offset="40%"  stopColor="rgba(255,255,255,0.25)" />
            <stop offset="50%"  stopColor="rgba(255,255,255,0.55)" />
            <stop offset="60%"  stopColor="rgba(255,255,255,0.25)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <linearGradient id="streamGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%"   stopColor="rgba(43,149,214,0)" />
            <stop offset="50%"  stopColor="rgba(150,210,255,0.55)" />
            <stop offset="100%" stopColor="rgba(43,149,214,0)" />
          </linearGradient>
        </defs>

        {/* Roof silhouette — darker, grounded into the hero's navy gradient */}
        <path
          d="M0,180 L500,80 L1200,180 L1200,320 L0,320 Z"
          fill="#0A1632"
        />
        {/* Roof top edge highlight — much subtler than before */}
        <path
          d="M0,180 L500,80 L1200,180"
          stroke="#3D7DB3"
          strokeWidth="1.2"
          fill="none"
          opacity="0.35"
        />

        {/* Gutter body — half the previous height, muted darker blue */}
        <rect x="0" y="180" width="1200" height="6" fill="#1F78B0" opacity="0.65" />
        {/* Thin separator under the gutter */}
        <rect x="0" y="186" width="1200" height="1" fill="#0E1A3F" opacity="0.7" />

        {/* Gutter water shimmer — narrower and dimmer */}
        <g className="gutter-shine-wrap">
          <rect
            x="-400"
            y="180"
            width="500"
            height="6"
            fill="url(#gutterShine)"
          />
        </g>

        {/* Downspout — narrower, muted */}
        <rect x="1156" y="187" width="10" height="133" fill="#1F78B0" opacity="0.6" />

        {/* Water stream from the downspout */}
        <g className="water-pulse-wrap">
          <rect
            x="1158"
            y="240"
            width="6"
            height="80"
            rx="3"
            fill="url(#streamGrad)"
          />
        </g>
      </svg>
    </div>
  );
}
