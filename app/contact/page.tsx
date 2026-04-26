import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact & Free Estimate — San Antonio Gutter Pros",
  description: `Request a free gutter estimate in San Antonio TX. Call or text ${business.owner} at 210-419-1528 — Alamo Area Gutters by Marx Service Companies, family-run since ${business.foundedYear}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Call, text, or send a message. Most estimates are scheduled the same day."
      />
      <section className="py-14">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <h2>Get In Touch</h2>

            <p className="mt-5 text-xs uppercase tracking-wide text-neutral-500">Phone & Text</p>
            <p className="text-lg font-semibold">
              <a href={`tel:${business.phoneE164}`}>📞 {business.phone}</a>
            </p>

            <p className="mt-4 text-xs uppercase tracking-wide text-neutral-500">Email</p>
            <p><a href={`mailto:${business.email}`}>{business.email}</a></p>

            <p className="mt-4 text-xs uppercase tracking-wide text-neutral-500">Service Area</p>
            <p>{business.addressLocality}, {business.addressRegion} & surrounding areas — Bexar County and beyond.</p>

            <p className="mt-4 text-xs uppercase tracking-wide text-neutral-500">Hours</p>
            <p>{business.hours.weekdays}<br />{business.hours.sunday}</p>

            <p className="mt-4 text-xs uppercase tracking-wide text-neutral-500">Owner</p>
            <p>{business.owner} · Family-run since {business.foundedYear}</p>

            <div className="mt-6 space-y-3">
              <a href={`tel:${business.phoneE164}`} className="btn btn-primary w-full">
                📞 Call Now
              </a>
              <a href={`sms:${business.phoneE164}`} className="btn btn-secondary w-full">
                💬 Text Us
              </a>
            </div>
          </div>

          <div id="estimate">
            <h2>Request a Free Estimate</h2>
            <p className="mt-2 text-neutral-600">
              Tell us about your project. We&apos;ll follow up within one business day.
            </p>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
