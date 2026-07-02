import Link from "next/link";
import Hero from "@/components/Hero";
import StormStrip from "@/components/StormStrip";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import AreasServed from "@/components/AreasServed";
import InstagramScript from "@/components/InstagramScript";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { getFeaturedWork, projectCaption } from "@/lib/recentWork";
import { getDict, type Lang, pathPrefix } from "@/lib/i18n";

// Page composition follows the Trust & Authority pattern recommended by
// the design system: Hero → Storm strip → Trust signals → Services →
// Why us → Testimonials → Recent work → CTA → Service area.
export default function HomePage({ lang }: { lang: Lang }) {
  const t = getDict(lang).recentWork;
  const prefix = pathPrefix(lang);
  const featured = getFeaturedWork(2);
  const anyEmbed = featured.some((p) => p.photos.length === 0 && !!p.instagramUrl);
  return (
    <>
      <Hero lang={lang} />
      <StormStrip lang={lang} />
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
            {featured.map((project, i) => (
              <Reveal
                key={project.slug}
                delay={i * 100}
                className="m-0 w-full max-w-[540px] sm:w-[calc(50%-12px)]"
              >
                <ProjectCard
                  project={project}
                  caption={projectCaption(project, lang)}
                />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href={`${prefix}/gallery`} className="btn btn-secondary">
              {t.seeAll}
            </Link>
          </div>
        </div>
        {/* embed.js loads only if at least one featured item actually uses
            an Instagram embed — saves ~150KB on photo-only homepages. */}
        {anyEmbed && <InstagramScript />}
      </section>

      <CtaBand lang={lang} />
      <AreasServed lang={lang} />
    </>
  );
}
