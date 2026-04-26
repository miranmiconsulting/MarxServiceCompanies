"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { business } from "@/lib/business";
import { getDict, type Lang, pathPrefix } from "@/lib/i18n";
import LocaleSwitcher from "./LocaleSwitcher";

type Props = { lang?: Lang };

export default function Navbar({ lang = "en" }: Props) {
  const [open, setOpen] = useState(false);
  const t = getDict(lang);
  const prefix = pathPrefix(lang);

  const links = [
    { href: `${prefix}/`, label: t.nav.home },
    { href: `${prefix}/services`, label: t.nav.services },
    { href: `${prefix}/gallery`, label: t.nav.recentWork },
    { href: `${prefix}/about`, label: t.nav.about },
    { href: `${prefix}/contact`, label: t.nav.contact },
  ];

  return (
    <>
      {/* Utility bar — on mobile show a value-prop message instead of the
          phone (sticky CTA already covers calling). On sm+ show the tagline
          left and the phone right with a locale switcher. */}
      <div className="bg-neutral-900 text-sm text-white">
        <div className="container-page flex items-center justify-between gap-3 py-2">
          <span className="font-semibold sm:hidden">{t.utility.mobileMessage}</span>
          <span className="hidden opacity-80 sm:inline">
            {t.utility.tagline} · {t.utility.established}
          </span>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${business.phoneE164}`}
              className="hidden whitespace-nowrap font-semibold text-white hover:no-underline sm:inline"
            >
              📞 {business.phone}
            </a>
            <LocaleSwitcher lang={lang} ariaLabel={t.langSwitcher.aria} />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <nav
          aria-label={t.nav.aria}
          className="container-page flex items-center justify-between gap-3 py-2 md:py-3"
        >
          <Link
            href={`${prefix}/`}
            className="flex shrink-0 items-center gap-3 py-1 hover:no-underline"
            aria-label={`${business.brandName} ${business.brandSubtitle}, ${t.nav.home}`}
          >
            <Image
              src="/logo.svg"
              alt="Marx Service Companies. Servicing Your Projects."
              width={319}
              height={186}
              priority
              unoptimized
              className="block h-14 w-auto sm:h-16 md:h-20"
            />
            <span className="hidden border-l border-neutral-200 pl-3 text-base font-extrabold leading-tight text-navy md:block md:text-lg">
              {business.brandName}
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-semibold text-navy transition-colors hover:text-brand hover:no-underline"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={`${prefix}/contact#estimate`}
              className="rounded-lg bg-accent px-4 py-2 font-bold text-white transition hover:bg-accent-dark hover:no-underline"
            >
              {t.nav.freeEstimate}
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 grid h-12 w-12 place-items-center rounded-md text-navy transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:hidden"
          >
            {open ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </nav>

        {open && (
          <div id="mobile-nav" className="border-t border-neutral-100 bg-white px-5 pb-4 pt-2 md:hidden">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-neutral-100 py-4 text-base font-semibold text-navy hover:no-underline"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${business.phoneE164}`}
              className="block py-4 text-base font-semibold text-navy hover:no-underline"
            >
              {t.nav.callPhone}
            </a>
          </div>
        )}
      </header>
    </>
  );
}
