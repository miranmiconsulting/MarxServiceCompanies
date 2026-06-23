import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import InstagramScript from "@/components/InstagramScript";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { business } from "@/lib/business";
import { getRecentWork, projectCaption } from "@/lib/recentWork";
import { getDict, type Lang } from "@/lib/i18n";

export default function GalleryPage({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  const t = dict.galleryPage;
  const r = dict.recentWork;
  const projects = getRecentWork();
  const anyEmbed = projects.some((p) => p.photos.length === 0 && !!p.instagramUrl);
  return (
    <>
      <PageHeader title={t.title} subtitle={t.subtitle} />

      <section className="py-14">
        <div className="container-page">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-neutral-700">{r.body}</p>
          </Reveal>

          <div className="mx-auto flex max-w-[1100px] flex-wrap justify-center gap-6">
            {projects.map((project, i) => (
              <Reveal
                key={project.slug}
                delay={i * 80}
                className="m-0 w-full max-w-[540px] sm:w-[calc(50%-12px)]"
              >
                <ProjectCard
                  project={project}
                  caption={projectCaption(project, lang)}
                />
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              {r.follow}
            </a>
          </div>
        </div>
        {anyEmbed && <InstagramScript />}
      </section>

      <CtaBand lang={lang} title={r.galleryCtaTitle} body={r.galleryCtaBody} />
    </>
  );
}
