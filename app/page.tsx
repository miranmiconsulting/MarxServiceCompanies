import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUs from "@/components/WhyUs";
import CtaBand from "@/components/CtaBand";
import AreasServed from "@/components/AreasServed";
import VideoGrid from "@/components/VideoGrid";

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
              See real installs and cleanings from around the San Antonio area.
              Follow along on Instagram for new project videos every week.
            </p>
          </div>
          <VideoGrid
            tiles={[
              { title: "Gutter Helmet® install · Stone Oak", href: "/gallery" },
              { title: '6" seamless gutters · Boerne', href: "/gallery" },
              { title: "Full gutter cleaning · Alamo Heights", href: "/gallery" },
            ]}
          />
          <div className="mt-6 text-center">
            <Link href="/gallery" className="btn btn-outline">
              View More Recent Work
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
      <AreasServed />
    </>
  );
}
