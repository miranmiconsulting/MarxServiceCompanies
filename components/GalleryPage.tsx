import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import InstagramEmbed from "@/components/InstagramEmbed";
import InstagramScript from "@/components/InstagramScript";
import Reveal from "@/components/Reveal";
import { business } from "@/lib/business";
import { recentWork } from "@/lib/recentWork";
import { getDict, type Lang } from "@/lib/i18n";

export default function GalleryPage({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  const t = dict.galleryPage;
  const r = dict.recentWork;
  return (
    <>
      <PageHeader title={t.title} subtitle={t.subtitle} />

      <section className="py-14">
        <div className="container-page">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-neutral-700">{r.body}</p>
          </Reveal>

          <div className="mx-auto flex max-w-[1100px] flex-wrap justify-center gap-6">
            {recentWork.map((item, i) => (
              <Reveal
                key={item.url}
                delay={i * 80}
                className="m-0 w-full max-w-[540px] sm:w-[calc(50%-12px)]"
              >
                <figure className="m-0">
                  <InstagramEmbed url={item.url} />
                  <figcaption className="mt-2 text-center text-sm font-semibold text-neutral-700">
                    {r.captions[i]}
                  </figcaption>
                </figure>
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
        <InstagramScript />
      </section>

      <CtaBand lang={lang} title={r.galleryCtaTitle} body={r.galleryCtaBody} />
    </>
  );
}
