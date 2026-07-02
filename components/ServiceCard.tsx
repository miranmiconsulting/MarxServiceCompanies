// Photo-topped residential-services card. Replaces the prior
// icon-in-tinted-square pattern that was shared across four sites in
// the same portfolio. Structure:
//
//   [16:9 photo or duotone placeholder]
//   [Title]
//   [One-line description]
//
// The card uses a warm-tinted shadow so it reads as residential /
// craftsman rather than corporate SaaS. Rounded 12px per spec.

import Image from "next/image";
import ServicePlaceholder from "./ServicePlaceholder";

type Props = {
  slug: string;
  title: string;
  short: string;
  photo?: string;
  className?: string;
};

export default function ServiceCard({ slug, title, short, photo, className = "" }: Props) {
  return (
    <article
      id={slug}
      className={`group relative overflow-hidden rounded-[12px] border border-neutral-100 bg-white shadow-[0_2px_10px_rgba(120,80,40,0.06)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_22px_rgba(120,80,40,0.12)] ${className}`}
    >
      <div className="relative aspect-video overflow-hidden bg-brand-light">
        {photo ? (
          <Image
            src={photo}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <ServicePlaceholder slug={slug} />
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-neutral-700">{short}</p>
      </div>
    </article>
  );
}
