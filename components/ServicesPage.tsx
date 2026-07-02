import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import ServicePlaceholder from "@/components/ServicePlaceholder";
import { getDict, type Lang } from "@/lib/i18n";

// Detailed /services page. Uses the same photo-topped card language as
// the homepage ServicesGrid but expanded with long descriptions +
// bullet lists. Same duotone placeholder story until real job photos
// land via Pages CMS.

export default function ServicesPage({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  const t = dict.servicesPage;
  return (
    <>
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <section className="py-14">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2">
            {dict.services.items.map((s, i) => (
              <Reveal key={s.slug} delay={i * 50}>
                <article
                  id={s.slug}
                  className="group overflow-hidden rounded-[12px] border border-neutral-100 bg-white shadow-[0_2px_10px_rgba(120,80,40,0.06)] transition duration-300 hover:shadow-[0_6px_22px_rgba(120,80,40,0.12)]"
                >
                  <div className="relative aspect-video overflow-hidden bg-brand-light">
                    <ServicePlaceholder slug={s.slug} />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-bold text-navy">{s.title}</h3>
                    <p className="mt-2 text-neutral-700">{s.long}</p>
                    {s.bullets && (
                      <ul className="checks mt-4 space-y-2 text-sm">
                        {s.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
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
