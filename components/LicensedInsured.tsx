// "Fully Insured" / "BBB Accredited" trust pills (audit C4). Driven by
// flags on business.trust so the owner can flip them on/off in one place.
//
// Renders nothing if both flags are false — keeps the markup clean
// for businesses that haven't supplied those certifications.

import { ShieldCheck, BadgeCheck } from "lucide-react";
import { business } from "@/lib/business";
import type { Lang } from "@/lib/i18n";

type Props = { lang?: Lang; className?: string };

export default function LicensedInsured({ lang = "en", className = "" }: Props) {
  const { insured, bbb } = business.trust;
  if (!insured && !bbb) return null;

  const insuredLabel = lang === "es" ? "Totalmente Asegurados" : "Fully Insured";
  const bbbLabel = lang === "es" ? "Acreditados por BBB" : "BBB Accredited";

  return (
    <span className={`inline-flex flex-wrap items-center gap-2 ${className}`}>
      {insured && (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-cert/30 bg-cert/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-cert-dark">
          <ShieldCheck size={12} strokeWidth={2.5} aria-hidden="true" />
          <span>{insuredLabel}</span>
        </span>
      )}
      {bbb && (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-navy/20 bg-navy/5 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-navy">
          <BadgeCheck size={12} strokeWidth={2.5} aria-hidden="true" />
          <span>{bbbLabel}</span>
        </span>
      )}
    </span>
  );
}
