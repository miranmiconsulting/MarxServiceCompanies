import { CloudRain, Phone } from "lucide-react";
import { business } from "@/lib/business";
import { getDict, type Lang } from "@/lib/i18n";

type Props = { lang?: Lang };

// Storm-response strip that sits between Hero and TrustBar on the
// homepage. Warm amber tint so it reads as urgency without shouting.
// Sam-day inspection framing turns severe weather (a demand spike for
// gutter contractors in San Antonio) into an inbound conversion window.
//
// Content lives in i18n so Marcos can adjust without a code change.

export default function StormStrip({ lang = "en" }: Props) {
  const t = getDict(lang).stormStrip;
  return (
    <aside
      role="complementary"
      aria-label={t.aria}
      className="border-y border-accent/20 bg-accent-light"
    >
      <div className="container-page flex flex-col items-center gap-3 py-3 text-center sm:flex-row sm:justify-center sm:text-left">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
          <CloudRain size={18} strokeWidth={2.5} className="text-accent" aria-hidden="true" />
          <span>
            <strong className="font-display font-extrabold">{t.headline}</strong>
            <span className="ml-1 text-neutral-700">{t.body}</span>
          </span>
        </span>
        <a
          href={`tel:${business.phoneE164}`}
          className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-white shadow-sm transition hover:bg-accent-dark hover:no-underline"
          aria-label={t.callAria}
        >
          <Phone size={14} strokeWidth={2.5} aria-hidden="true" />
          <span>{t.cta}</span>
        </a>
      </div>
    </aside>
  );
}
