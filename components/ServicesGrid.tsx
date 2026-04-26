import Link from "next/link";
import { services } from "@/lib/services";

type Props = { compact?: boolean };

export default function ServicesGrid({ compact = false }: Props) {
  const list = compact ? services.slice(0, 6) : services;
  return (
    <section className="py-14">
      <div className="container-page">
        <div className="mx-auto mb-9 max-w-2xl text-center">
          <h2>What We Do</h2>
          <p className="mt-2 text-neutral-700">
            From seamless gutter installs to clog-free Gutter Helmet® protection
            and exterior cleaning, we handle the work that keeps your home
            protected from Texas storms.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s) => (
            <article key={s.slug} id={s.slug} className="card-base">
              <div className="icon-chip">{s.icon}</div>
              <h3>{s.title}</h3>
              <p className="mt-1 text-neutral-700">{s.short}</p>
            </article>
          ))}
        </div>
        {compact && (
          <div className="mt-6 text-center">
            <Link href="/services" className="btn btn-secondary">
              See All Services →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
