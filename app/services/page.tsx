import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Gutter Services in San Antonio TX — Install, Guards, Repair, Cleaning",
  description:
    "Seamless gutter installation, Gutter Helmet®, repairs, gutter cleaning, window cleaning and solar panel cleaning in San Antonio TX. Free estimates — call 210-419-1528.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Gutters, gutter protection, and exterior cleaning across San Antonio and surrounding areas."
      />
      <section className="py-14">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <article key={s.slug} id={s.slug} className="card-base">
                <div className="icon-chip">{s.icon}</div>
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
            ))}
          </div>
        </div>
      </section>
      {/* Reinforces the Gutter Helmet card above with the differentiator. */}
      <section className="bg-neutral-50 py-12">
        <div className="container-page">
          <div className="mx-auto max-w-3xl rounded-card border border-accent/30 bg-white p-7 text-center shadow-soft">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-accent-dark">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Gutter Helmet® Certification
            </span>
            <h2 className="mt-4">Certified Installation Matters</h2>
            <p className="mt-3 text-neutral-700">
              When it comes to Gutter Helmet® systems, proper installation makes
              all the difference. Marx Service Companies is the only certified
              installer in the area, ensuring the system is installed to
              manufacturer standards and backed by warranty.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Not Sure What You Need? Just Ask."
        body="We'll come look, tell you straight, and quote in writing — at no charge."
      />
    </>
  );
}
