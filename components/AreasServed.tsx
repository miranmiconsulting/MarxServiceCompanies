import { business } from "@/lib/business";
import { getDict, type Lang } from "@/lib/i18n";
import Reveal from "./Reveal";

type Props = { lang?: Lang };

export default function AreasServed({ lang = "en" }: Props) {
  const t = getDict(lang).areas;
  return (
    <section className="py-14">
      <div className="container-page">
        <Reveal className="mx-auto mb-8 max-w-2xl text-center">
          <h2>{t.title}</h2>
          <p className="mt-2 text-neutral-700">{t.sub}</p>
        </Reveal>
        <Reveal className="flex flex-wrap justify-center gap-2">
          {business.serviceAreas.map((c) => (
            <span
              key={c}
              className="rounded-full border border-neutral-100 bg-white px-3 py-1 text-sm text-neutral-700 transition hover:border-brand/40 hover:text-navy"
            >
              {c}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
