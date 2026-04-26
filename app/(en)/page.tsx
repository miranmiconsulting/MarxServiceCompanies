import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { en } from "@/lib/i18n/en";

export const metadata: Metadata = {
  title: en.pageMeta.home.title,
  description: en.pageMeta.home.description,
  alternates: {
    canonical: "/",
    languages: { "en-US": "/", "es-US": "/es" },
  },
};

export default function Home() {
  return <HomePage lang="en" />;
}
