import { getDict, type Lang } from "@/lib/i18n";
import Reveal from "./Reveal";

type Props = { lang?: Lang };

export default function WhyUs({ lang = "en" }: Props) {
  const t = getDict(lang).whyUs;
  return (
    <section className="bg-neutral-50 py-14">
      <div className="container-page">
        <Reveal className="mx-auto mb-9 max-w-2xl text-center">
          <h2>{t.title}</h2>
          <p className="mt-2 text-neutral-700">{t.sub}</p>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {t.items.map((r, i) => (
            <Reveal key={r.title} delay={i * 60}>
              <div className="flex h-full gap-3 rounded-card border border-neutral-100 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-soft">
                <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-accent font-extrabold text-white">
                  ✓
                </span>
                <div>
                  <h3 className="text-base">{r.title}</h3>
                  <p className="text-sm text-neutral-700">{r.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
