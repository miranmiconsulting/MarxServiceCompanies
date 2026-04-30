import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";
import { business } from "@/lib/business";
import { getDict, type Lang } from "@/lib/i18n";

// lucide-react intentionally does not ship Facebook/Instagram brand marks
// (trademark/license reasons), so the social buttons keep their text marks.
// They remain accessible via aria-label.

type Props = { lang?: Lang };

export default function Footer({ lang = "en" }: Props) {
  const t = getDict(lang).footer;
  return (
    <footer className="mt-16 bg-neutral-900 pb-6 pt-12 text-neutral-300">
      <div className="container-page grid gap-8 md:grid-cols-[2fr,1fr,1fr]">
        <div>
          <h4 className="mb-3 font-display text-base font-bold text-white">
            {business.brandName} {business.brandSubtitle}
          </h4>
          <p className="text-sm">{t.tagline}</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
            <a
              href={`tel:${business.phoneE164}`}
              className="inline-flex items-center gap-1.5 text-neutral-200 hover:text-white"
            >
              <Phone size={14} strokeWidth={2.5} aria-hidden="true" />
              <span>{business.phone}</span>
            </a>
            <a
              href={`sms:${business.phoneE164}`}
              className="inline-flex items-center gap-1.5 text-neutral-200 hover:text-white"
              aria-label={`Text ${business.phone}`}
            >
              <MessageSquare size={14} strokeWidth={2.5} aria-hidden="true" />
              <span>Text</span>
            </a>
          </div>
          <div className="mt-3 flex gap-2">
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-neutral-700 bg-neutral-800 font-display text-base font-extrabold text-white transition hover:bg-neutral-700"
            >
              <span aria-hidden="true">f</span>
            </a>
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-neutral-700 bg-neutral-800 font-display text-sm font-extrabold tracking-tight text-white transition hover:bg-neutral-700"
            >
              <span aria-hidden="true">IG</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-base font-bold text-white">{t.servicesH4}</h4>
          <ul className="space-y-1 text-sm">
            {t.serviceLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-neutral-300 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-base font-bold text-white">{t.companyH4}</h4>
          <ul className="space-y-1 text-sm">
            {t.companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-neutral-300 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-neutral-800 pt-4 text-xs text-neutral-500">
        <span>{t.rights}</span>
        <span>{t.location}</span>
      </div>
    </footer>
  );
}
