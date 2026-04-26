import { business } from "@/lib/business";

export default function AreasServed() {
  return (
    <section className="py-14">
      <div className="container-page">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2>Proudly Serving San Antonio & Surrounding Areas</h2>
          <p className="mt-2 text-neutral-700">
            Based in {business.addressLocality}, {business.addressRegion}. We
            service homes across Bexar County and the surrounding communities.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {business.serviceAreas.map((c) => (
            <span
              key={c}
              className="rounded-full border border-neutral-100 bg-white px-3 py-1 text-sm text-neutral-700"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
