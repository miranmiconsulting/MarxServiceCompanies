// Inline review badge — shows rating + review count from business.trust.
// Hides itself if the owner hasn't supplied a rating yet (audit C3).
//
// Two variants:
//   - default: light pill for white/light surfaces (services, about)
//   - variant="onDark": adapted for navy hero / dark sections

import { Star } from "lucide-react";
import { business } from "@/lib/business";

type Props = {
  className?: string;
  variant?: "light" | "onDark";
};

export default function ReviewsBadge({ className = "", variant = "light" }: Props) {
  const { googleRating, googleReviewCount, googleReviewsUrl } = business.trust;
  if (!googleRating) return null;

  const stars = Math.round(Number(googleRating));
  const baseClass =
    variant === "onDark"
      ? "border-white/25 bg-white/10 text-white"
      : "border-neutral-200 bg-white text-navy";

  const content = (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold ${baseClass} ${className}`}
    >
      <span className="inline-flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            strokeWidth={2}
            className={i < stars ? "fill-amber-400 text-amber-400" : "text-neutral-300"}
          />
        ))}
      </span>
      <span aria-label={`${googleRating} stars on Google`}>
        <span className="font-display font-extrabold">{googleRating}</span>
        <span className="opacity-80"> on Google</span>
        {googleReviewCount > 0 && (
          <span className="opacity-80"> · {googleReviewCount} reviews</span>
        )}
      </span>
    </span>
  );

  if (googleReviewsUrl) {
    return (
      <a
        href={googleReviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex hover:no-underline"
      >
        {content}
      </a>
    );
  }
  return content;
}
