import { getDict, type Lang } from "@/lib/i18n";
import LicensedInsured from "./LicensedInsured";

type Props = { lang?: Lang };

// Mobile: stack items vertically, each centered. Tablet+: inline pill row.
// Trust dots use CERT (green) since they signal confirmation/trust, not action.
// LicensedInsured renders before the textual items. ReviewsBadge is
// intentionally NOT rendered — no Google reviews exist yet. Reinstate
// only when Marcos confirms a live Google Business Profile.
export default function TrustBar({ lang = "en" }: Props) {
  const items = getDict(lang).trustBar.items;
  return (
    <div className="border-b border-neutral-100 bg-white py-3 shadow-[inset_0_1px_0_rgba(43,149,214,0.06)]">
      <div className="container-page flex flex-col items-center gap-3 text-sm font-semibold text-neutral-700 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-3">
        <LicensedInsured lang={lang} />
        {items.map((t, i) => (
          <span
            key={t}
            style={{ animationDelay: `${i * 60}ms` }}
            className={`inline-flex items-center gap-2 text-center animate-[fade-in-up_500ms_ease-out_both] ${
              i === 0 ? "text-navy" : ""
            }`}
          >
            <span className="trust-dot inline-block h-2 w-2 flex-none rounded-full bg-cert" aria-hidden="true" />
            <span>{t}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
