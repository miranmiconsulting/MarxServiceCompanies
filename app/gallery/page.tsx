import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import VideoGrid from "@/components/VideoGrid";
import CtaBand from "@/components/CtaBand";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Recent Work — San Antonio Gutter Installs & Cleanings",
  description:
    "Recent gutter installations, Gutter Helmet® projects, and exterior cleanings in San Antonio TX. See real work from Alamo Area Gutters by Marx Service Companies.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Recent Work"
        subtitle="Real installs and cleanings from around the San Antonio area. New videos posted on Instagram every week."
      />
      <section className="py-14">
        <div className="container-page">
          <p className="mb-6 text-center text-sm text-neutral-500">
            Replace each placeholder below with an Instagram embed
            (<code className="rounded bg-neutral-100 px-1">&lt;iframe src=&quot;https://www.instagram.com/p/POST_ID/embed&quot;&gt;</code>),
            a self-hosted MP4, or a YouTube embed.
          </p>
          <VideoGrid />
          <div className="mt-8 text-center">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener"
              className="btn btn-secondary"
            >
              Follow Us on Instagram →
            </a>
          </div>
        </div>
      </section>
      <CtaBand
        title="Like What You See? Let's Talk About Your Home."
        body="Free, honest estimates across San Antonio and surrounding areas."
      />
    </>
  );
}
