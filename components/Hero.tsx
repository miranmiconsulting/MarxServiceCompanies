import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, Star, ShieldCheck } from "lucide-react";
import { business } from "@/lib/business";
import { getDict, type Lang, pathPrefix } from "@/lib/i18n";
import RainScene from "./RainScene";
import Reveal from "./Reveal";

type Props = { lang?: Lang };

// Strip leading "📞 " / "💬 " / "★ " emoji prefixes from dict strings — we
// render the icon as JSX now. Emoji-as-icon is banned per design system.
const stripIconEmoji = (s: string) =>
  s.replace(/^(?:📞|💬|★|✓)\s*/u, "").trim();

export default function Hero({ lang = "en" }: Props) {
  const t = getDict(lang).hero;
  const prefix = pathPrefix(lang);
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-navy via-[#192853] to-navy-dark py-12 text-white md:py-20 font-display">
      {/* Layered background depth — radial brand glow from top + subtle dot
          grid texture. Both are pure CSS, decorative, and sit behind the
          RainScene and content (z-0 default; content uses z-10). */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(43,149,214,0.18),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dot-grid [background-size:24px_24px] opacity-60"
      />
      <RainScene />
      <div className="container-page relative z-10 grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
        <div>
          <Reveal delay={0}>
            {/* Cert eyebrow pill — uses CERT (green) since this is a
                certification claim, not a CTA. */}
            <span className="inline-flex items-center gap-2 rounded-full bg-cert/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-white ring-1 ring-cert/50 backdrop-blur-sm transition hover:bg-cert/15">
              <ShieldCheck size={14} strokeWidth={2.5} className="text-cert" aria-hidden="true" />
              {t.eyebrow}
            </span>
            <h1 className="mt-4 text-balance font-display text-white">{t.h1}</h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 max-w-xl text-lg text-white/90">{t.sub}</p>
          </Reveal>
          <Reveal delay={200}>
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
          </Reveal>
          <Reveal delay={280}>
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
          </Reveal>
        </div>

        {/* Cert card — layered glass: gradient white-over-white tint,
            soft inner highlight overlay, elevated shadow. Strip + ring
            stay in CERT green. */}
        <aside
          aria-label={t.certCardAria}
          className="relative overflow-hidden rounded-card bg-gradient-to-br from-white/25 to-white/10 text-center shadow-elevated ring-1 ring-cert/30 backdrop-blur-md cert-float"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-card bg-gradient-to-t from-transparent via-transparent to-white/5"
          />
          <div className="relative">
            <div className="h-1 bg-cert" aria-hidden="true" />
            <div className="p-5">
              {/* White pedestal frames the raster seal as an intentional stamp,
                  avoids the halo that aggressive transparency-keying produces on
                  a JPEG-like source. */}
              <div className="mx-auto grid h-[170px] w-[170px] place-items-center overflow-hidden rounded-2xl bg-white p-2 shadow-md ring-1 ring-cert/20 sm:h-[190px] sm:w-[190px]">
                <Image
                  src="/certified.png"
                  alt={t.certCardBadgeAlt}
                  width={480}
                  height={480}
                  className="h-full w-full object-contain"
                />
              </div>
              <strong className="mt-3 block font-display text-base font-extrabold leading-tight text-white sm:text-lg">
                {t.certCardTitle}
              </strong>
              <p className="mt-2 text-sm text-white/90">{t.certCardSub}</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
