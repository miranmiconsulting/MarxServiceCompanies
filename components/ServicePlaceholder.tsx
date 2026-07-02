// Duotone SVG placeholders for service cards, used until Marcos uploads
// real job photos through Pages CMS. Each slug renders a simple
// navy-on-sky composition in 16:9 so the ServiceCard layout doesn't
// shift when a real photo replaces the placeholder.
//
// Palette:
//   background — bg-brand-light (sky #E5F2FB, soft)
//   silhouette  — text-navy (#1B2D5C)
//   accent      — text-brand (#2B95D6) sparingly for highlights

type Props = { slug: string; className?: string };

function paths(slug: string): React.ReactNode {
  // Coordinates are drawn against a 400×225 viewBox (16:9).
  const nav = "currentColor";
  switch (slug) {
    case "install":
      return (
        <g fill="none" stroke={nav} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          {/* Roofline pitching down to the eave with a horizontal gutter run + downspout. */}
          <path d="M40 90 L200 30 L360 90" />
          <path d="M32 108 L368 108 L368 132 L32 132 Z" fill="rgba(27,45,92,0.08)" />
          <path d="M300 132 L300 200 L330 200" />
        </g>
      );
    case "helmet":
      return (
        <g fill="none" stroke={nav} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          {/* Gutter with a curved helmet cover on top. */}
          <path d="M40 110 Q200 60 360 110" stroke={nav} strokeWidth="8" />
          <rect x="40" y="118" width="320" height="30" rx="4" fill="rgba(27,45,92,0.08)" />
          <path d="M60 148 L60 200" />
          <path d="M340 148 L340 200" />
        </g>
      );
    case "screens":
      return (
        <g fill="none" stroke={nav} strokeWidth="4">
          {/* Gutter body + mesh screen dots across the opening. */}
          <rect x="40" y="90" width="320" height="60" rx="6" strokeWidth="6" fill="rgba(27,45,92,0.06)" />
          {Array.from({ length: 8 }).map((_, i) => (
            <g key={i}>
              <circle cx={80 + i * 35} cy="100" r="3" fill={nav} />
              <circle cx={80 + i * 35} cy="130" r="3" fill={nav} />
            </g>
          ))}
        </g>
      );
    case "repair":
      return (
        <g fill="none" stroke={nav} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          {/* Gutter section with a diagonal patch band. */}
          <rect x="30" y="90" width="340" height="45" rx="6" fill="rgba(27,45,92,0.06)" />
          <path d="M160 90 L200 135 L240 90" fill="rgba(43,149,214,0.35)" stroke="none" />
          <path d="M160 90 L200 135 L240 90" />
        </g>
      );
    case "cleaning":
      return (
        <g fill="none" stroke={nav} strokeWidth="5" strokeLinecap="round">
          {/* Gutter with leaves + water droplet coming out of the downspout. */}
          <rect x="40" y="80" width="320" height="40" rx="5" fill="rgba(27,45,92,0.06)" strokeWidth="6" />
          <circle cx="120" cy="60" r="8" fill="rgba(43,149,214,0.35)" stroke="none" />
          <circle cx="180" cy="55" r="6" fill="rgba(43,149,214,0.35)" stroke="none" />
          <circle cx="240" cy="60" r="8" fill="rgba(43,149,214,0.35)" stroke="none" />
          <path d="M320 120 L320 180" />
          <path d="M310 190 Q320 200 330 190" strokeWidth="4" />
        </g>
      );
    default:
      return (
        <g fill="none" stroke={nav} strokeWidth="6" strokeLinecap="round">
          <rect x="60" y="80" width="280" height="60" rx="6" fill="rgba(27,45,92,0.08)" />
        </g>
      );
  }
}

export default function ServicePlaceholder({ slug, className = "" }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`relative h-full w-full bg-gradient-to-br from-brand-light to-white text-navy ${className}`}
    >
      <svg
        viewBox="0 0 400 225"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full"
        role="presentation"
      >
        {paths(slug)}
      </svg>
    </div>
  );
}
