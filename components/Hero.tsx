import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, Star, ShieldCheck } from "lucide-react";
import { business } from "@/lib/business";
import { getDict, type Lang, pathPrefix } from "@/lib/i18n";
import RainScene from "./RainScene";

type Props = { lang?: Lang };

// Strip leading "📞 " / "💬 " / "★ " emoji prefixes from dict strings — we
// render the icon as JSX now. Emoji-as-icon is banned per design system.
const stripIconEmoji = (s: string) =>
  s.replace(/^(?:📞|💬|★|✓)\s*/u, "").trim();

export default function Hero({ lang = "en" }: Props) {
  const t = getDict(lang).hero;
  const prefix = pathPrefix(lang);
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-navy to-navy-dark py-12 text-white md:py-20 font-display">
      <RainScene />
      <div className="container-page relative z-10 grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
        <div className="reveal-up">
          {/* Cert eyebrow pill — uses CERT (green) since this is a
              certification claim, not a CTA. */}
          <span className="inline-flex items-center gap-2 rounded-full bg-cert/15 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white ring-1 ring-cert/40">
            <ShieldCheck size={14} strokeWidth={2.5} className="text-cert" aria-hidden="true" />
            {t.eyebrow}
          </span>
          <h1 className="mt-3 text-balance font-display text-white">{t.h1}</h1>
          <p className="mt-4 max-w-xl text-lg text-white/90">{t.sub}</p>
          {/* Mobile: 2 primary buttons full-row; Text demoted to a small link.
              Tablet+: keep all three inline. Reduces 7-chip clutter at 375px. */}
          <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
            <a href={`tel:${business.phoneE164}`} className="btn btn-primary">
              <Phone size={18} strokeWidth={2.5} aria-hidden="true" />
              <span>{stripIconEmoji(t.callBtn)}</span>
            </a>
            <Link href={`${prefix}/contact#estimate`} className="btn btn-outline-light">
              {t.estimateBtn}
            </Link>
            <a
              href={`sms:${business.phoneE164}`}
              className="inline-flex items-center justify-center gap-1.5 self-center text-sm font-semibold text-white/90 underline-offset-4 hover:underline sm:btn sm:btn-outline-light sm:no-underline"
            >
              <MessageSquare size={16} strokeWidth={2.5} aria-hidden="true" />
              <span>{stripIconEmoji(t.textBtn)}</span>
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            {t.badges.map((b) => {
              const clean = stripIconEmoji(b);
              return (
                <span key={b} className="badge-pill inline-flex items-center gap-1.5">
                  <Star size={12} strokeWidth={2.5} className="text-accent" aria-hidden="true" />
                  <span>{clean}</span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Cert card — strip + ring stay in CERT (green). Strictly certification visual. */}
        <aside
          aria-label={t.certCardAria}
          className="overflow-hidden rounded-card border border-white/25 bg-white/15 text-center shadow-soft ring-1 ring-cert/30 backdrop-blur-sm cert-float"
        >
          <div className="h-1 bg-cert" aria-hidden="true" />
          <div className="p-5">
            <Image
              src="/certified.svg"
              alt={t.certCardBadgeAlt}
              width={170}
              height={170}
              className="mx-auto h-[150px] w-[150px] sm:h-[170px] sm:w-[170px]"
            />
            <strong className="mt-3 block font-display text-base font-extrabold leading-tight text-white sm:text-lg">
              {t.certCardTitle}
            </strong>
            <p className="mt-2 text-sm text-white/90">{t.certCardSub}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
