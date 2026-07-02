import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { business } from "@/lib/business";
import { getDict, type Lang } from "@/lib/i18n";

// Placeholder silhouette used until a real photo of Marcos exists at
// /public/owner.jpg. Once that file lands, swap the render below to
// <Image src="/owner.jpg" ... /> with proper dimensions.
function OwnerPortrait({ alt }: { alt: string }) {
  return (
    <div
      aria-label={alt}
      role="img"
      className="relative aspect-[3/4] w-full overflow-hidden rounded-[12px] bg-gradient-to-br from-brand-light to-white shadow-[0_6px_24px_rgba(120,80,40,0.10)] ring-1 ring-neutral-100"
    >
      <svg
        viewBox="0 0 200 260"
        className="h-full w-full text-navy"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        role="presentation"
      >
        {/* Head + shoulders silhouette */}
        <circle cx="100" cy="90" r="42" fill="currentColor" opacity="0.85" />
        <path d="M30 260 Q30 175 100 175 Q170 175 170 260 Z" fill="currentColor" opacity="0.85" />
        {/* Certified installer chest badge */}
        <circle cx="100" cy="215" r="14" fill="#2EA043" />
        <path
          d="M92 215 L98 221 L110 209"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default function AboutPage({ lang }: { lang: Lang }) {
  const t = getDict(lang).about;
  const ownerAlt =
    lang === "es"
      ? `${business.owner}, dueño y instalador certificado de Gutter Helmet en el área de San Antonio`
      : `${business.owner}, owner and certified Gutter Helmet installer in the San Antonio area`;
  const roleLabel = lang === "es" ? "Dueño e Instalador" : "Owner & Installer";
  return (
    <>
      <PageHeader title={t.title} subtitle={t.sub} />
      <section className="py-14">
        <div className="container-page max-w-4xl">
          {/* Owner portrait + intro. The "Owner on every job" copy needs a
              face — this is that face. Silhouette placeholder until
              Marcos supplies a real photo. */}
          <div className="grid gap-8 md:grid-cols-[220px,1fr] md:items-start">
            <Reveal className="mx-auto w-full max-w-[220px] md:mx-0">
              <OwnerPortrait alt={ownerAlt} />
              <p className="mt-3 text-center text-sm font-semibold text-navy md:text-left">
                {business.owner}
                <span className="block text-xs font-normal uppercase tracking-wider text-neutral-600">
                  {roleLabel}
                </span>
              </p>
            </Reveal>
            <div className="min-w-0">
              <Reveal>
                <h2>{t.foundedH2}</h2>
                <p className="mt-3 text-neutral-700">{t.p1}</p>
                <p className="mt-3 text-neutral-700">{t.p2}</p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={80}>
            <h2 className="mt-12">{t.meaningH2}</h2>
            <p className="mt-3 text-neutral-700">{t.meaningP}</p>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="mt-10">{t.whereH2}</h2>
            <p className="mt-3 text-neutral-700">{t.whereP}</p>
          </Reveal>

          <Reveal delay={160}>
            <h2 className="mt-10">{t.certH2}</h2>
            <div className="mt-4 flex flex-wrap items-center gap-5">
              <div className="grid h-[140px] w-[140px] flex-none place-items-center overflow-hidden rounded-2xl bg-white p-2 shadow-md ring-1 ring-cert/20 cert-float">
                <Image
                  src="/certified.png"
                  alt={t.certBadgeAlt}
                  width={480}
                  height={480}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="min-w-[240px] flex-1 text-neutral-700">{t.certP}</p>
            </div>
          </Reveal>
        </div>
      </section>
      <CtaBand lang={lang} title={t.ctaTitle} body={t.ctaBody} />
    </>
  );
}
