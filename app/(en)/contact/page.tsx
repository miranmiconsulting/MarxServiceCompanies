import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
import { en } from "@/lib/i18n/en";

export const metadata: Metadata = {
  title: en.pageMeta.contact.title,
  description: en.pageMeta.contact.description,
  alternates: {
    canonical: "/contact",
    languages: { "en-US": "/contact", "es-US": "/es/contact" },
  },
};

export default function Contact() {
  return <ContactPage lang="en" />;
}
