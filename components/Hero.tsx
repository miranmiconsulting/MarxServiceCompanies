import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";
import { getDict, type Lang, pathPrefix } from "@/lib/i18n";
import RainScene from "./RainScene";

type Props = { lang?: Lang };

export default function Hero({ lang = "en" }: Props) {
  const t = getDict(lang).hero;
  const prefix = pathPrefix(lang);
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-navy to-navy-dark py-12 text-white md:py-20">
      <RainScene />
      <div className="container-page relative z-10 grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
        <div className="reveal-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white ring-1 ring-accent/40">
            <span className="trust-dot h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            {t.eyebrow}
          </span>
          <h1 className="mt-3 text-balance text-white">{t.h1}</h1>
          <p className="mt-4 max-w-xl text-lg text-white/90">{t.sub}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${business.phoneE164}`} className="btn btn-primary">
              {t.callBtn}
            </a>
            <a href={`sms:${business.phoneE164}`} className="btn btn-outline-light">
              {t.textBtn}
            </a>
            <Link href={`${prefix}/contact#estimate`} className="btn btn-outline-light">
              {t.estimateBtn}
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            {t.badges.map((b) => (
              <span key={b} className="badge-pill">{b}</span>
            ))}
          </div>
        </div>

        <aside
          aria-label={t.certCardAria}
          className="overflow-hidden rounded-card border border-white/25 bg-white/15 text-center shadow-soft ring-1 ring-accent/30 backdrop-blur-sm cert-float"
        >
          <div className="h-1 bg-accent" aria-hidden="true" />
          <div className="p-5">
            <Image
              src="/certified.svg"
              alt={t.certCardBadgeAlt}
              width={170}
              height={170}
              className="mx-auto h-[150px] w-[150px] sm:h-[170px] sm:w-[170px]"
            />
            <strong className="mt-3 block text-base font-extrabold leading-tight text-white sm:text-lg">
              {t.certCardTitle}
            </strong>
            <p className="mt-2 text-sm text-white/85">{t.certCardSub}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
