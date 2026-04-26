import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";
import { es } from "@/lib/i18n/es";

export const metadata: Metadata = {
  title: es.pageMeta.about.title,
  description: es.pageMeta.about.description,
  alternates: {
    canonical: "/es/about",
    languages: { "en-US": "/about", "es-US": "/es/about" },
  },
};

export default function AboutES() {
  return <AboutPage lang="es" />;
}
