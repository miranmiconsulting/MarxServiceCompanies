import type { Metadata } from "next";
import GalleryPage from "@/components/GalleryPage";
import { en } from "@/lib/i18n/en";

export const metadata: Metadata = {
  title: en.pageMeta.gallery.title,
  description: en.pageMeta.gallery.description,
  alternates: {
    canonical: "/gallery",
    languages: { "en-US": "/gallery", "es-US": "/es/gallery" },
  },
};

export default function Gallery() {
  return <GalleryPage lang="en" />;
}
