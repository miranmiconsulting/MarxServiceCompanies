import { business } from "@/lib/business";

const items = [
  "Only Certified Gutter Helmet® Installer in the Area",
  `Established ${business.foundedYear}`,
  `Owner ${business.owner} on every job`,
  "Free estimates · Call or text",
  "Servicing San Antonio & surrounding areas",
];

export default function TrustBar() {
  return (
    <div className="border-b border-neutral-100 bg-white py-3">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm font-semibold text-neutral-700">
        {items.map((t) => (
          <span key={t} className="inline-flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
