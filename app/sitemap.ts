import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.siteUrl.replace(/\/$/, "");
  const now = new Date();
  return [
    { url: `${base}/`,         lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`,    lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
    { url: `${base}/gallery`,  lastModified: now, changeFrequency: "weekly",  priority: 0.6 },
    { url: `${base}/contact`,  lastModified: now, changeFrequency: "yearly",  priority: 0.9 },
  ];
}
