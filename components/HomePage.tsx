import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUs from "@/components/WhyUs";
import CtaBand from "@/components/CtaBand";
import AreasServed from "@/components/AreasServed";
import InstagramEmbed from "@/components/InstagramEmbed";
import InstagramScript from "@/components/InstagramScript";
import Testimonials from "@/components/Testimonials";
import Reveal from "@/components/Reveal";
import { recentWork } from "@/lib/recentWork";
import { getDict, type Lang, pathPrefix } from "@/lib/i18n";

const FEATURED = recentWork.slice(0, 2);

// Page composition follows the Trust & Authority pattern recommended by
// the design system: Hero → Trust signals → Services → Why us →
// Testimonials (social proof) → Recent work → CTA → Service area.
export default function HomePage({ lang }: { lang: Lang }) {
  const t = getDict(lang).recentWork;
  const prefix = pathPrefix(lang);
  const captions = t.captions;
  return (
    <>
      <Hero lang={lang} />
      <TrustBar lang={lang} />
      <ServicesGrid lang={lang} compact />
      <WhyUs lang={lang} />
      <Testimonials lang={lang} />

      <section className="py-14">
        <div className="container-page">
          <Reveal className="mx-auto mb-9 max-w-2xl text-center">
            <h2>{t.title}</h2>
            <p className="mt-2 text-neutral-700">{t.sub}</p>
          </Reveal>

          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-6">
            {FEATURED.map((item, i) => (
              <Reveal
                key={item.url}
                delay={i * 100}
                className="m-0 w-full max-w-[540px] sm:w-[calc(50%-12px)]"
              >
                <figure className="m-0">
                  <InstagramEmbed url={item.url} />
                  <figcaption className="mt-2 text-center text-sm font-semibold text-neutral-700">
                    {captions[i]}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href={`${prefix}/gallery`} className="btn btn-secondary">
              {t.seeAll}
            </Link>
          </div>
        </div>
        <InstagramScript />
      </section>

      <CtaBand lang={lang} />
      <AreasServed lang={lang} />
    </>
  );
}
