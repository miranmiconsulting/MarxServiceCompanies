import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUs from "@/components/WhyUs";
import CtaBand from "@/components/CtaBand";
import AreasServed from "@/components/AreasServed";
import InstagramEmbed from "@/components/InstagramEmbed";
import InstagramScript from "@/components/InstagramScript";
import { recentWork } from "@/lib/recentWork";

// Featured preview = first 2 reels. Full grid lives at /gallery.
const FEATURED = recentWork.slice(0, 2);

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid compact />
      <WhyUs />

      <section className="py-14">
        <div className="container-page">
          <div className="mx-auto mb-9 max-w-2xl text-center">
            <h2>Recent Work</h2>
            <p className="mt-2 text-neutral-700">
              Real gutter installs and cleanings from around San Antonio. Follow
              along on Instagram for new project videos every week.
            </p>
          </div>

          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-6">
            {FEATURED.map((item) => (
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

          <div className="mt-10 text-center">
            <Link href="/gallery" className="btn btn-secondary">
              See All Recent Work →
            </Link>
          </div>
        </div>
        <InstagramScript />
      </section>

      <CtaBand />
      <AreasServed />
    </>
  );
}
