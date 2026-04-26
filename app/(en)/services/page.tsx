import type { Metadata } from "next";
import ServicesPage from "@/components/ServicesPage";
import { en } from "@/lib/i18n/en";

export const metadata: Metadata = {
  title: en.pageMeta.services.title,
  description: en.pageMeta.services.description,
  alternates: {
    canonical: "/services",
    languages: { "en-US": "/services", "es-US": "/es/services" },
  },
};

export default function Services() {
  return <ServicesPage lang="en" />;
}
