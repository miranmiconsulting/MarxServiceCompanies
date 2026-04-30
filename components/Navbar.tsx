"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
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
      {/* Utility bar — value-prop on mobile, tagline + phone on sm+. */}
      <div className="bg-neutral-900 text-sm text-white">
        <div className="container-page flex items-center justify-between gap-3 py-2">
          <span className="font-semibold sm:hidden">{t.utility.mobileMessage}</span>
          <span className="hidden opacity-90 sm:inline">
            {t.utility.tagline} · {t.utility.established}
          </span>
          <a
            href={`tel:${business.phoneE164}`}
            className="hidden items-center gap-1.5 whitespace-nowrap font-semibold text-white hover:no-underline sm:inline-flex"
          >
            <Phone size={14} strokeWidth={2.5} aria-hidden="true" />
            <span>{business.phone}</span>
          </a>
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
            <span className="hidden border-l border-neutral-200 pl-3 font-display text-base font-extrabold leading-tight text-navy md:block md:text-lg">
              {business.brandName}
            </span>
          </Link>

          <div className="hidden items-center gap-5 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-semibold text-navy transition-colors hover:text-brand hover:no-underline"
              >
                {l.label}
              </Link>
            ))}
            <LocaleSwitcher lang={lang} ariaLabel={t.langSwitcher.aria} />
            <Link
              href={`${prefix}/contact#estimate`}
              className="rounded-lg bg-accent px-4 py-2 font-bold text-white transition hover:bg-accent-dark hover:no-underline"
            >
              {t.nav.freeEstimate}
            </Link>
          </div>

          {/* Mobile: phone number anchored as a tappable digit link beside
              the hamburger (per audit C2 — phone must be one tap away in the
              header, not just behind a Call button). */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${business.phoneE164}`}
              className="inline-flex h-11 items-center gap-1.5 rounded-md px-2 font-semibold text-navy hover:bg-neutral-100 hover:no-underline"
              aria-label={`${t.nav.callPhone}`}
            >
              <Phone size={18} strokeWidth={2.5} aria-hidden="true" />
              <span className="hidden xs:inline whitespace-nowrap text-sm">{business.phone}</span>
            </a>
            <LocaleSwitcher lang={lang} ariaLabel={t.langSwitcher.aria} />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
              className="-mr-2 grid h-12 w-12 place-items-center rounded-md text-navy transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {open ? (
                <X size={28} strokeWidth={2.4} aria-hidden="true" />
              ) : (
                <Menu size={28} strokeWidth={2.4} aria-hidden="true" />
              )}
            </button>
          </div>
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
              className="flex items-center gap-2 py-4 text-base font-semibold text-navy hover:no-underline"
            >
              <Phone size={18} strokeWidth={2.5} aria-hidden="true" />
              <span>{business.phone}</span>
            </a>
          </div>
        )}
      </header>
    </>
  );
}
