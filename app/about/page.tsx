import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: `About ${business.legalName} | San Antonio Gutter Specialist Since ${business.foundedYear}`,
  description: `${business.legalName} is a family run gutter and exterior services company in San Antonio, TX. Founded by ${business.owner} in ${business.foundedYear}. Free estimates. Call 210-419-1528.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Marx Service Companies"
        subtitle="Family-run. Locally owned. On the ladder ourselves."
      />
      <section className="py-14">
        <div className="container-page max-w-3xl">
          <h2>Founded in {business.foundedYear} by {business.owner}</h2>
          <p className="mt-3 text-neutral-700">
            Marx Service Companies LLC was started in {business.foundedYear} with
            one job at a time and one rule: do the work the way you&apos;d want
            it done at your own house. More than a decade later, that&apos;s
            still the rule.
          </p>
          <p className="mt-3 text-neutral-700">
            We started with gutters and that&apos;s still the heart of what we
            do. Seamless 5&quot; and 6&quot; installs, Gutter Helmet®
            protection, repairs, and cleanings. Over time, customers asked for
            more, so we added window cleaning and solar panel cleaning to round
            out the exterior work that keeps a home running.
          </p>

          <h2 className="mt-10">What &ldquo;Servicing Your Projects&rdquo; Means to Us</h2>
          <p className="mt-3 text-neutral-700">
            It means the owner picks up the phone. It means we show up when we
            say we will. It means we measure twice, quote once, and don&apos;t
            change the number on you halfway through. It means cleaning up
            before we leave so you can&apos;t tell where we worked, except your
            gutters drain again.
          </p>

          <h2 className="mt-10">Where We Work</h2>
          <p className="mt-3 text-neutral-700">
            We&apos;re based in {business.addressLocality},{" "}
            {business.addressRegion} and serve homeowners across Bexar County
            and the surrounding communities, including Stone Oak, Alamo
            Heights, Helotes, Boerne, Bulverde, Schertz, Cibolo, Selma,
            Universal City, Live Oak, Converse, and New Braunfels.
          </p>

          <h2 className="mt-10">Gutter Helmet® Certified Installer</h2>
          <div className="mt-4 flex flex-wrap gap-5">
            <Image
              src="/certified.svg"
              alt="Gutter Helmet Certified Installer badge"
              width={120}
              height={120}
              className="h-[120px] w-[120px] flex-none"
            />
            <p className="min-w-[240px] flex-1 text-neutral-700">
              Marx Service Companies is the only certified Gutter Helmet®
              installer in the area, ensuring the system is installed to
              manufacturer standards and backed by a transferable performance
              warranty. If a screen or cover is a better fit for your home,
              we&apos;ll tell you that too.
            </p>
          </div>
        </div>
      </section>
      <CtaBand
        title="Talk to the Owner Directly"
        body={`No call centers. No sales reps. ${business.owner} answers, comes out, and quotes the job himself.`}
      />
    </>
  );
}
