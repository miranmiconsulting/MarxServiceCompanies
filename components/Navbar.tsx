"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { business } from "@/lib/business";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Recent Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Utility bar */}
      <div className="bg-neutral-900 text-white text-sm">
        <div className="container-page flex items-center justify-between py-2">
          <span className="opacity-80">
            {business.tagline} · Established {business.foundedYear}
          </span>
          <a
            href={`tel:${business.phoneE164}`}
            className="text-white hover:no-underline font-semibold"
          >
            📞 {business.phone}
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white">
        <nav
          aria-label="Main"
          className="container-page flex items-center justify-between gap-4 py-3 md:py-4"
        >
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 py-1 hover:no-underline"
            aria-label={`${business.brandName} ${business.brandSubtitle} — Home`}
          >
            {/* Logo container — fixed aspect ratio, scales with height across breakpoints.
                The logo image already says "Marx Service Companies", so we don't repeat it
                in text — we add the public-facing brand name "Alamo Area Gutters" alongside. */}
            <Image
              src="/logo.svg"
              alt="Marx Service Companies — Servicing Your Projects"
              width={319}
              height={186}
              priority
              unoptimized
              className="block h-12 w-auto sm:h-14 md:h-16"
            />
            <span className="hidden border-l border-neutral-200 pl-3 text-base font-extrabold leading-tight text-navy sm:block md:text-lg">
              {business.brandName}
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-semibold text-navy hover:text-brand hover:no-underline"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact#estimate"
              className="rounded-lg bg-accent px-4 py-2 font-bold text-white hover:bg-accent-dark hover:no-underline"
            >
              Free Estimate
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-2xl text-navy md:hidden"
          >
            ☰
          </button>
        </nav>

        {open && (
          <div className="border-t border-neutral-100 bg-white px-5 pb-4 pt-2 md:hidden">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-neutral-100 py-3 font-semibold text-navy hover:no-underline"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${business.phoneE164}`}
              className="block py-3 font-semibold text-navy hover:no-underline"
            >
              📞 Call {business.phone}
            </a>
          </div>
        )}
      </header>
    </>
  );
}
