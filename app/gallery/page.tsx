import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import InstagramEmbed from "@/components/InstagramEmbed";
import InstagramScript from "@/components/InstagramScript";
import { business } from "@/lib/business";
import { recentWork } from "@/lib/recentWork";

export const metadata: Metadata = {
  title: "Recent Work | San Antonio Gutter Installs & Cleanings",
  description:
    "Recent gutter installation, cleaning, and maintenance projects from Marx Service Companies in San Antonio TX. Watch real reels from the field.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Recent Work"
        subtitle="See recent gutter installation, cleaning, and maintenance projects from Marx Service Companies."
      />

      <section className="py-14">
        <div className="container-page">
          <p className="mx-auto mb-10 max-w-2xl text-center text-neutral-700">
            Fresh gutters, repairs, cleaning, and maintenance work across San
            Antonio and surrounding areas. Follow Marx Service Companies for
            project updates, gutter tips, and seasonal maintenance reminders.
          </p>

          {/* Flex-wrap: 1 col mobile, 2 cols sm+, the orphan third reel
              auto-centers on its own row thanks to justify-center. */}
          <div className="mx-auto flex max-w-[1100px] flex-wrap justify-center gap-6">
            {recentWork.map((item) => (
              <figure
                key={item.url}
                className="m-0 w-full max-w-[540px] sm:w-[calc(50%-12px)]"
              >
                <InstagramEmbed url={item.url} />
                <figcaption className="mt-2 text-center text-sm font-semibold text-neutral-700">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View More Work on Instagram →
            </a>
          </div>
        </div>

        {/* Loads embed.js exactly once, lazily, after the page is idle. */}
        <InstagramScript />
      </section>

      <CtaBand
        title="Like What You See? Let's Talk About Your Home."
        body="Free, honest estimates across San Antonio and surrounding areas."
      />
    </>
  );
}
