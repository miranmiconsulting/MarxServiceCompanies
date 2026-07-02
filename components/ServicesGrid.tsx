import Link from "next/link";
import { getDict, type Lang, pathPrefix } from "@/lib/i18n";
import Reveal from "./Reveal";
import ServiceCard from "./ServiceCard";

type Props = { lang?: Lang; compact?: boolean };

// Photo-topped services grid. Was icon-in-tinted-square cards; the
// audit flagged that pattern as shared across four sites in the
// portfolio. New card language is photo-first with a duotone
// placeholder until real photos ship via Pages CMS.

export default function ServicesGrid({ lang = "en", compact = false }: Props) {
  const dict = getDict(lang);
  const all = dict.services.items;
  const list = compact ? all.slice(0, 6) : all;
  return (
    <section className="py-14">
      <div className="container-page">
        <Reveal className="mx-auto mb-9 max-w-2xl text-center">
          <h2>{dict.whatWeDo.title}</h2>
          <p className="mt-2 text-neutral-700">{dict.whatWeDo.sub}</p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => (
            <Reveal key={s.slug} delay={i * 50}>
              <ServiceCard slug={s.slug} title={s.title} short={s.short} />
            </Reveal>
          ))}
        </div>
        {compact && (
          <div className="mt-8 text-center">
            <Link href={`${pathPrefix(lang)}/services`} className="btn btn-secondary">
              {dict.whatWeDo.seeAll}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
