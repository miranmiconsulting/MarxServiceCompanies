"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "@/lib/i18n";
import { otherLocaleHref } from "@/lib/i18n";

type Props = { lang: Lang; ariaLabel?: string };

export default function LocaleSwitcher({ lang, ariaLabel = "Change language" }: Props) {
  const pathname = usePathname() || "/";
  const otherHref = otherLocaleHref(lang, pathname);
  const isEn = lang === "en";

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="inline-flex items-center overflow-hidden rounded-md border border-white/30 text-xs font-bold leading-none"
    >
      <Link
        href={isEn ? pathname : otherHref}
        className={`px-2 py-1 transition ${
          isEn
            ? "bg-white text-neutral-900 hover:no-underline"
            : "bg-transparent text-white/85 hover:bg-white/10 hover:no-underline hover:text-white"
        }`}
        aria-current={isEn ? "true" : undefined}
        prefetch
      >
        EN
      </Link>
      <Link
        href={!isEn ? pathname : otherHref}
        className={`px-2 py-1 transition ${
          !isEn
            ? "bg-white text-neutral-900 hover:no-underline"
            : "bg-transparent text-white/85 hover:bg-white/10 hover:no-underline hover:text-white"
        }`}
        aria-current={!isEn ? "true" : undefined}
        prefetch
      >
        ES
      </Link>
    </div>
  );
}
