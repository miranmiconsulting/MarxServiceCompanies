import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { es } from "@/lib/i18n/es";

export const metadata: Metadata = {
  title: es.pageMeta.home.title,
  description: es.pageMeta.home.description,
  alternates: {
    canonical: "/es",
    languages: { "en-US": "/", "es-US": "/es" },
  },
};

export default function HomeES() {
  return <HomePage lang="es" />;
}
