import { getDict, type Lang } from "@/lib/i18n";

type Props = { lang?: Lang };

// Mobile: stack the items vertically and center each one. This avoids the
// flex-wrap centering issue where a long item ends up left-aligned because
// it's wider than the items beside it.
// Tablet+: revert to the inline pill row.
export default function TrustBar({ lang = "en" }: Props) {
  const items = getDict(lang).trustBar.items;
  return (
    <div className="border-b border-neutral-100 bg-white py-3">
      <div className="container-page flex flex-col items-center gap-2 text-sm font-semibold text-neutral-700 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-7 sm:gap-y-2">
        {items.map((t, i) => (
          <span
            key={t}
            className={`inline-flex items-center gap-2 text-center ${
              i === 0 ? "text-navy" : ""
            }`}
          >
            <span className="trust-dot inline-block h-2 w-2 flex-none rounded-full bg-accent" aria-hidden="true" />
            <span>{t}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
