import { MapPin } from "lucide-react";
import { business } from "@/lib/business";
import { getDict, type Lang } from "@/lib/i18n";
import Reveal from "./Reveal";

type Props = { lang?: Lang };

// Display-only chips: removed hover states (audit C5) — they implied
// interactivity that wasn't there. Each chip is now a static badge.
export default function AreasServed({ lang = "en" }: Props) {
  const t = getDict(lang).areas;
  return (
    <section className="py-14">
      <div className="container-page">
        <Reveal className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="font-display">{t.title}</h2>
          <p className="mt-2 text-neutral-700">{t.sub}</p>
        </Reveal>
        <Reveal className="flex flex-wrap justify-center gap-2">
          {business.serviceAreas.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700"
            >
              <MapPin size={12} strokeWidth={2.5} className="text-brand" aria-hidden="true" />
              <span>{c}</span>
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
