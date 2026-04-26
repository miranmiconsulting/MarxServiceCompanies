import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { business } from "@/lib/business";
import { getDict, type Lang } from "@/lib/i18n";

export default function ContactPage({ lang }: { lang: Lang }) {
  const t = getDict(lang).contact;
  return (
    <>
      <PageHeader title={t.title} subtitle={t.sub} />
      <section className="py-14">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <Reveal>
            <h2>{t.h2}</h2>

            <p className="mt-5 text-xs uppercase tracking-wide text-neutral-500">{t.phoneLabel}</p>
            <p className="text-lg font-semibold">
              <a href={`tel:${business.phoneE164}`}>📞 {business.phone}</a>
            </p>

            <p className="mt-4 text-xs uppercase tracking-wide text-neutral-500">{t.emailLabel}</p>
            <p><a href={`mailto:${business.email}`}>{business.email}</a></p>

            <p className="mt-4 text-xs uppercase tracking-wide text-neutral-500">{t.areaLabel}</p>
            <p>{t.areaText}</p>

            <p className="mt-4 text-xs uppercase tracking-wide text-neutral-500">{t.hoursLabel}</p>
            <p>{t.hoursWeek}<br />{t.hoursSun}</p>

            <p className="mt-4 text-xs uppercase tracking-wide text-neutral-500">{t.ownerLabel}</p>
            <p>{t.ownerText}</p>

            <div className="mt-6 space-y-3">
              <a href={`tel:${business.phoneE164}`} className="btn btn-primary w-full">
                {t.callNow}
              </a>
              <a href={`sms:${business.phoneE164}`} className="btn btn-secondary w-full">
                {t.textUs}
              </a>
            </div>
          </Reveal>

          <Reveal delay={80} as="div">
            <div id="estimate">
              <h2>{t.estimateH2}</h2>
              <p className="mt-2 text-neutral-600">{t.estimateSub}</p>
              <div className="mt-4">
                <ContactForm lang={lang} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
