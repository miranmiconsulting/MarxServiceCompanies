import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
import { es } from "@/lib/i18n/es";

export const metadata: Metadata = {
  title: es.pageMeta.contact.title,
  description: es.pageMeta.contact.description,
  alternates: {
    canonical: "/es/contact",
    languages: { "en-US": "/contact", "es-US": "/es/contact" },
  },
};

export default function ContactES() {
  return <ContactPage lang="es" />;
}
