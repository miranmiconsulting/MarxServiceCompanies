"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "@/lib/i18n";
import { otherLocaleHref } from "@/lib/i18n";

type Props = { lang: Lang; ariaLabel?: string };

// Pill toggle styled to read clearly on a white sticky header.
// Active locale = solid navy; inactive = neutral with hover. 44px tap targets.
export default function LocaleSwitcher({ lang, ariaLabel = "Change language" }: Props) {
  const pathname = usePathname() || "/";
  const otherHref = otherLocaleHref(lang, pathname);
  const isEn = lang === "en";

  const base =
    "px-2.5 py-1.5 text-xs font-extrabold leading-none transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
  const active = "bg-navy text-white hover:no-underline";
  const inactive = "bg-white text-navy hover:bg-neutral-100 hover:no-underline";

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="inline-flex items-center overflow-hidden rounded-md border border-neutral-300 leading-none"
    >
      <Link
        href={isEn ? pathname : otherHref}
        className={`${base} ${isEn ? active : inactive}`}
        aria-current={isEn ? "true" : undefined}
        prefetch
      >
        EN
      </Link>
      <span aria-hidden="true" className="h-4 w-px bg-neutral-300" />
      <Link
        href={!isEn ? pathname : otherHref}
        className={`${base} ${!isEn ? active : inactive}`}
        aria-current={!isEn ? "true" : undefined}
        prefetch
      >
        ES
      </Link>
    </div>
  );
}
