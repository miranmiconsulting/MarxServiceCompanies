import Link from "next/link";
import { business } from "@/lib/business";
import { getDict, type Lang } from "@/lib/i18n";

type Props = { lang?: Lang };

export default function Footer({ lang = "en" }: Props) {
  const t = getDict(lang).footer;
  return (
    <footer className="mt-16 bg-neutral-900 pb-6 pt-12 text-neutral-300">
      <div className="container-page grid gap-8 md:grid-cols-[2fr,1fr,1fr]">
        <div>
          <h4 className="mb-3 text-base font-bold text-white">
            {business.brandName} {business.brandSubtitle}
          </h4>
          <p className="text-sm">{t.tagline}</p>
          <p className="mt-2 text-sm">
            <a href={`tel:${business.phoneE164}`} className="text-neutral-300 hover:text-white">
              📞 {business.phone}
            </a>
            {" · "}
            <a href={`sms:${business.phoneE164}`} className="text-neutral-300 hover:text-white">
              💬
            </a>
          </p>
          <div className="mt-3 flex gap-2">
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full border border-neutral-700 bg-neutral-800 text-sm font-extrabold text-white transition hover:bg-neutral-700"
            >
              f
            </a>
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-neutral-700 bg-neutral-800 text-sm font-extrabold text-white transition hover:bg-neutral-700"
            >
              IG
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
