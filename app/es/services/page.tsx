import type { Metadata } from "next";
import ServicesPage from "@/components/ServicesPage";
import { es } from "@/lib/i18n/es";

export const metadata: Metadata = {
  title: es.pageMeta.services.title,
  description: es.pageMeta.services.description,
  alternates: {
    canonical: "/es/services",
    languages: { "en-US": "/services", "es-US": "/es/services" },
  },
};

export default function ServicesES() {
  return <ServicesPage lang="es" />;
}
