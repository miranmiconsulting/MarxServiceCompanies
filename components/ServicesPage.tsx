import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { getDict, type Lang } from "@/lib/i18n";

export default function ServicesPage({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  const t = dict.servicesPage;
  return (
    <>
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <section className="py-14">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-2">
            {dict.services.items.map((s, i) => (
              <Reveal key={s.slug} delay={i * 50}>
                <article id={s.slug} className="card-base h-full transition hover:-translate-y-1">
                  <div className="icon-chip">
                    <ServiceIcon slug={s.slug} size={22} />
                  </div>
                  <h3>{s.title}</h3>
                  <p className="mt-1 text-neutral-700">{s.long}</p>
                  {s.bullets && (
                    <ul className="checks mt-3 space-y-2 text-sm">
                      {s.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* Certified-installer callout — uses the cert (green) palette,
          intentionally distinct from accent (orange CTA). */}
      <section className="bg-neutral-50 py-12">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl rounded-card border border-cert/30 bg-white p-7 text-center shadow-soft">
            <span className="inline-flex items-center gap-2 rounded-full bg-cert/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-cert-dark">
              <span className="h-2 w-2 rounded-full bg-cert" />
              {t.certEyebrow}
            </span>
            <h2 className="mt-4">{t.certTitle}</h2>
            <p className="mt-3 text-neutral-700">{t.certBody}</p>
          </Reveal>
        </div>
      </section>
      <CtaBand lang={lang} title={t.ctaTitle} body={t.ctaBody} />
    </>
  );
}
