import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, Star, ShieldCheck } from "lucide-react";
import { business } from "@/lib/business";
import { getDict, type Lang, pathPrefix } from "@/lib/i18n";
import Reveal from "./Reveal";

type Props = { lang?: Lang };

// Strip leading "📞 " / "💬 " / "★ " emoji prefixes from dict strings — we
// render the icon as JSX now. Emoji-as-icon is banned per design system.
const stripIconEmoji = (s: string) =>
  s.replace(/^(?:📞|💬|★|✓)\s*/u, "").trim();

// Light residential-services hero. Was a dark navy gradient shared with
// three other sites in the same portfolio; the audit flagged that as
// undifferentiated. Now a soft sky→white ramp with navy typography.
// Kept the two-column structure (copy + cert card) because that's the
// conversion pattern that works for this business.

export default function Hero({ lang = "en" }: Props) {
  const t = getDict(lang).hero;
  const prefix = pathPrefix(lang);
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-brand-light/50 via-white to-white py-12 md:py-20">
      <div className="container-page relative z-10 grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
        <div>
          <Reveal delay={0}>
            {/* Cert eyebrow pill — CERT green tinted on light bg. Uses
                cert-dark for text so it passes contrast against the light
                cert/10 fill. */}
            <span className="inline-flex items-center gap-2 rounded-full bg-cert/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-cert-dark ring-1 ring-cert/40">
              <ShieldCheck size={14} strokeWidth={2.5} className="text-cert" aria-hidden="true" />
              {t.eyebrow}
            </span>
            <h1 className="mt-4 text-balance font-display text-navy">{t.h1}</h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 max-w-xl text-lg text-neutral-700">{t.sub}</p>
          </Reveal>
          <Reveal delay={200}>
            {/* Mobile: 2 primary buttons full-row; Text demoted to a small link.
                Tablet+: keep all three inline. Reduces 7-chip clutter at 375px. */}
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
              <a href={`tel:${business.phoneE164}`} className="btn btn-primary">
                <Phone size={18} strokeWidth={2.5} aria-hidden="true" />
                <span>{stripIconEmoji(t.callBtn)}</span>
              </a>
              <Link href={`${prefix}/contact#estimate`} className="btn btn-outline">
                {t.estimateBtn}
              </Link>
              <a
                href={`sms:${business.phoneE164}`}
                className="inline-flex items-center justify-center gap-1.5 self-center text-sm font-semibold text-navy underline-offset-4 hover:underline sm:btn sm:btn-outline sm:no-underline"
              >
                <MessageSquare size={16} strokeWidth={2.5} aria-hidden="true" />
                <span>{stripIconEmoji(t.textBtn)}</span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              {t.badges.map((b) => {
                const clean = stripIconEmoji(b);
                return (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1 text-neutral-700 shadow-xs"
                  >
                    <Star size={12} strokeWidth={2.5} className="text-accent" aria-hidden="true" />
                    <span>{clean}</span>
                  </span>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Cert card — light residential treatment: white card, cert-green
            top strip + warm shadow, seal on a light pedestal. Was frosted
            glass on navy; now sits on the light hero without visual noise. */}
        <aside
          aria-label={t.certCardAria}
          className="relative overflow-hidden rounded-[12px] border border-neutral-100 bg-white text-center shadow-[0_6px_28px_rgba(46,160,67,0.08)] cert-float"
        >
          <div className="h-1 bg-cert" aria-hidden="true" />
          <div className="p-5">
            <div className="mx-auto grid h-[170px] w-[170px] place-items-center overflow-hidden rounded-2xl bg-cert/5 p-2 ring-1 ring-cert/15 sm:h-[190px] sm:w-[190px]">
              <Image
                src="/certified.png"
                alt={t.certCardBadgeAlt}
                width={480}
                height={480}
                className="h-full w-full object-contain"
              />
            </div>
            <strong className="mt-3 block font-display text-base font-extrabold leading-tight text-navy sm:text-lg">
              {t.certCardTitle}
            </strong>
            <p className="mt-2 text-sm text-neutral-700">{t.certCardSub}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
