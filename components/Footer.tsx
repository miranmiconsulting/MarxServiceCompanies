import Link from "next/link";
import { business } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="mt-16 bg-neutral-900 pb-6 pt-12 text-neutral-300">
      <div className="container-page grid gap-8 md:grid-cols-[2fr,1fr,1fr]">
        <div>
          <h4 className="mb-3 text-base font-bold text-white">
            {business.brandName} {business.brandSubtitle}
          </h4>
          <p className="text-sm">
            {business.tagline} since {business.foundedYear}. Locally owned in{" "}
            {business.addressLocality}, {business.addressRegion}.
          </p>
          <p className="mt-2 text-sm">
            <a
              href={`tel:${business.phoneE164}`}
              className="text-neutral-300 hover:text-white"
            >
              📞 {business.phone}
            </a>{" "}
            ·{" "}
            <a
              href={`sms:${business.phoneE164}`}
              className="text-neutral-300 hover:text-white"
            >
              💬 Text
            </a>
          </p>
          <div className="mt-3 flex gap-2">
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full border border-neutral-700 bg-neutral-800 text-sm font-extrabold text-white hover:bg-neutral-700"
            >
              f
            </a>
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-neutral-700 bg-neutral-800 text-sm font-extrabold text-white hover:bg-neutral-700"
            >
              IG
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-base font-bold text-white">Services</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/services#install" className="text-neutral-300 hover:text-white">Gutter Installation</Link></li>
            <li><Link href="/services#helmet" className="text-neutral-300 hover:text-white">Gutter Helmet®</Link></li>
            <li><Link href="/services#repair" className="text-neutral-300 hover:text-white">Gutter Repair</Link></li>
            <li><Link href="/services#cleaning" className="text-neutral-300 hover:text-white">Gutter Cleaning</Link></li>
            <li><Link href="/services#windows" className="text-neutral-300 hover:text-white">Window Cleaning</Link></li>
            <li><Link href="/services#solar" className="text-neutral-300 hover:text-white">Solar Cleaning</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-base font-bold text-white">Company</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/about" className="text-neutral-300 hover:text-white">About</Link></li>
            <li><Link href="/gallery" className="text-neutral-300 hover:text-white">Recent Work</Link></li>
            <li><Link href="/contact" className="text-neutral-300 hover:text-white">Contact</Link></li>
            <li><Link href="/contact#estimate" className="text-neutral-300 hover:text-white">Free Estimate</Link></li>
          </ul>
        </div>
      </div>

      <div className="container-page mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-neutral-800 pt-4 text-xs text-neutral-500">
        <span>
          © {new Date().getFullYear()} {business.legalName} · All rights reserved.
        </span>
        <span>
          {business.addressLocality}, {business.addressRegion}
        </span>
      </div>
    </footer>
  );
}
