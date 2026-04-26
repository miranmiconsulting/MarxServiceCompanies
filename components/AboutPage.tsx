import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { getDict, type Lang } from "@/lib/i18n";

export default function AboutPage({ lang }: { lang: Lang }) {
  const t = getDict(lang).about;
  return (
    <>
      <PageHeader title={t.title} subtitle={t.sub} />
      <section className="py-14">
        <div className="container-page max-w-3xl">
          <Reveal>
            <h2>{t.foundedH2}</h2>
            <p className="mt-3 text-neutral-700">{t.p1}</p>
            <p className="mt-3 text-neutral-700">{t.p2}</p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-10">{t.meaningH2}</h2>
            <p className="mt-3 text-neutral-700">{t.meaningP}</p>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="mt-10">{t.whereH2}</h2>
            <p className="mt-3 text-neutral-700">{t.whereP}</p>
          </Reveal>

          <Reveal delay={160}>
            <h2 className="mt-10">{t.certH2}</h2>
            <div className="mt-4 flex flex-wrap gap-5">
              <Image
                src="/certified.svg"
                alt={t.certBadgeAlt}
                width={120}
                height={120}
                className="h-[120px] w-[120px] flex-none cert-float"
              />
              <p className="min-w-[240px] flex-1 text-neutral-700">{t.certP}</p>
            </div>
          </Reveal>
        </div>
      </section>
      <CtaBand lang={lang} title={t.ctaTitle} body={t.ctaBody} />
    </>
  );
}
