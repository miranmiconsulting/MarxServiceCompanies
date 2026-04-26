import type { Metadata } from "next";
import GalleryPage from "@/components/GalleryPage";
import { es } from "@/lib/i18n/es";

export const metadata: Metadata = {
  title: es.pageMeta.gallery.title,
  description: es.pageMeta.gallery.description,
  alternates: {
    canonical: "/es/gallery",
    languages: { "en-US": "/gallery", "es-US": "/es/gallery" },
  },
};

export default function GalleryES() {
  return <GalleryPage lang="es" />;
}
