import { Phone, MessageSquare, Mail, MapPin, Clock, User } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { business } from "@/lib/business";
import { getDict, type Lang } from "@/lib/i18n";

const stripIconEmoji = (s: string) =>
  s.replace(/^(?:📞|💬|★|✓)\s*/u, "").trim();

export default function ContactPage({ lang }: { lang: Lang }) {
  const t = getDict(lang).contact;
  return (
    <>
      <PageHeader title={t.title} subtitle={t.sub} />
      <section className="py-14">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display">{t.h2}</h2>

            <p className="mt-5 inline-flex items-center gap-1.5 text-xs uppercase tracking-wide text-neutral-600">
              <Phone size={12} strokeWidth={2.5} aria-hidden="true" />
              <span>{t.phoneLabel}</span>
            </p>
            <p className="font-display text-lg font-semibold">
              <a
                href={`tel:${business.phoneE164}`}
                className="inline-flex items-center gap-2 text-navy hover:text-brand-dark"
              >
                <Phone size={18} strokeWidth={2.5} aria-hidden="true" />
                <span>{business.phone}</span>
              </a>
            </p>

            <p className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-wide text-neutral-600">
              <Mail size={12} strokeWidth={2.5} aria-hidden="true" />
              <span>{t.emailLabel}</span>
            </p>
            <p>
              <a href={`mailto:${business.email}`} className="text-navy hover:text-brand-dark">
                {business.email}
              </a>
            </p>

            <p className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-wide text-neutral-600">
              <MapPin size={12} strokeWidth={2.5} aria-hidden="true" />
              <span>{t.areaLabel}</span>
            </p>
            <p className="text-neutral-700">{t.areaText}</p>

            <p className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-wide text-neutral-600">
              <Clock size={12} strokeWidth={2.5} aria-hidden="true" />
              <span>{t.hoursLabel}</span>
            </p>
            <p className="text-neutral-700">{t.hoursWeek}<br />{t.hoursSun}</p>

            <p className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-wide text-neutral-600">
              <User size={12} strokeWidth={2.5} aria-hidden="true" />
              <span>{t.ownerLabel}</span>
            </p>
            <p className="text-neutral-700">{t.ownerText}</p>

            <div className="mt-6 space-y-3">
              <a href={`tel:${business.phoneE164}`} className="btn btn-primary w-full">
                <Phone size={18} strokeWidth={2.5} aria-hidden="true" />
                <span>{stripIconEmoji(t.callNow)}</span>
              </a>
              <a href={`sms:${business.phoneE164}`} className="btn btn-secondary w-full">
                <MessageSquare size={18} strokeWidth={2.5} aria-hidden="true" />
                <span>{stripIconEmoji(t.textUs)}</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={80} as="div">
            <div id="estimate">
              <h2 className="font-display">{t.estimateH2}</h2>
              <p className="mt-2 text-neutral-700">{t.estimateSub}</p>
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
