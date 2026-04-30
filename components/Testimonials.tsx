// Customer testimonials section (audit H1). 3 quote cards with star rating,
// author initial+area, optional service tag. Bilingual via testimonial.quote.en/es.

import { Star, Quote as QuoteIcon } from "lucide-react";
import { testimonials } from "@/lib/testimonials";
import type { Lang } from "@/lib/i18n";
import Reveal from "./Reveal";
import ReviewsBadge from "./ReviewsBadge";

type Props = { lang?: Lang };

export default function Testimonials({ lang = "en" }: Props) {
  const heading =
    lang === "es" ? "Lo Que Dicen Nuestros Clientes" : "What Our Customers Say";
  const sub =
    lang === "es"
      ? "Reseñas verificadas de hogares en el área de San Antonio."
      : "Verified reviews from real San Antonio area homes.";

  return (
    <section className="bg-white py-14">
      <div className="container-page">
        <Reveal className="mx-auto mb-9 max-w-2xl text-center">
          <h2 className="font-display">{heading}</h2>
          <p className="mt-2 text-neutral-700">{sub}</p>
          <div className="mt-4 flex justify-center">
            <ReviewsBadge variant="light" />
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((tm, i) => (
            <Reveal key={tm.author + i} delay={i * 80}>
              <figure className="card-base flex h-full flex-col">
                <div className="flex items-center gap-1" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={16}
                      strokeWidth={2}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <QuoteIcon
                  size={20}
                  strokeWidth={2}
                  className="mt-3 text-brand"
                  aria-hidden="true"
                />
                <blockquote className="mt-2 flex-1 text-base text-neutral-800">
                  &ldquo;{tm.quote[lang]}&rdquo;
                </blockquote>
                <figcaption className="mt-4 border-t border-neutral-100 pt-3 text-sm">
                  <span className="font-display font-bold text-navy">{tm.author}</span>
                  <span className="text-neutral-600"> · {tm.area}</span>
                  {tm.service && (
                    <span className="mt-0.5 block text-xs uppercase tracking-wide text-neutral-500">
                      {tm.service}
                    </span>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
