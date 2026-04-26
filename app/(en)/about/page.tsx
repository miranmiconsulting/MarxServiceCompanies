import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";
import { en } from "@/lib/i18n/en";

export const metadata: Metadata = {
  title: en.pageMeta.about.title,
  description: en.pageMeta.about.description,
  alternates: {
    canonical: "/about",
    languages: { "en-US": "/about", "es-US": "/es/about" },
  },
};

export default function About() {
  return <AboutPage lang="en" />;
}
