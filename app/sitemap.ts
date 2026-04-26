import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.siteUrl.replace(/\/$/, "");
  const now = new Date();
  const enPaths = ["/", "/services", "/about", "/gallery", "/contact"];
  const esPaths = enPaths.map((p) => (p === "/" ? "/es" : `/es${p}`));

  const buildEntry = (path: string, priority: number, freq: MetadataRoute.Sitemap[number]["changeFrequency"]) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  });

  const priorities: Record<string, number> = {
    "/": 1,
    "/services": 0.9,
    "/contact": 0.9,
    "/gallery": 0.6,
    "/about": 0.7,
  };
  const freqs: Record<string, MetadataRoute.Sitemap[number]["changeFrequency"]> = {
    "/": "monthly",
    "/services": "monthly",
    "/about": "yearly",
    "/gallery": "weekly",
    "/contact": "yearly",
  };

  return [
    ...enPaths.map((p) => buildEntry(p, priorities[p], freqs[p])),
    ...esPaths.map((p) => {
      const enKey = p === "/es" ? "/" : p.replace(/^\/es/, "");
      return buildEntry(p, priorities[enKey] * 0.9, freqs[enKey]);
    }),
  ];
}
