import Link from "next/link";
import { getDict, type Lang, pathPrefix } from "@/lib/i18n";
import Reveal from "./Reveal";
import ServiceIcon from "./ServiceIcon";

type Props = { lang?: Lang; compact?: boolean };

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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => (
            <Reveal key={s.slug} delay={i * 50}>
              <article id={s.slug} className="card-base h-full transition hover:-translate-y-1">
                <div className="icon-chip">
                  <ServiceIcon slug={s.slug} size={22} />
                </div>
                <h3>{s.title}</h3>
                <p className="mt-1 text-neutral-700">{s.short}</p>
              </article>
            </Reveal>
          ))}
        </div>
        {compact && (
          <div className="mt-6 text-center">
            <Link href={`${pathPrefix(lang)}/services`} className="btn btn-secondary">
              {dict.whatWeDo.seeAll}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
