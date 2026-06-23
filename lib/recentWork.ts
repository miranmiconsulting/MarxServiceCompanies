// Recent Work data layer — content lives in /content/recent-work as
// Markdown files with YAML frontmatter. Marcos edits these files via
// Pages CMS (app.pagescms.org); commits trigger a Vercel rebuild.
//
// Schema is defined in /.pages.yml at the repo root.
//
// Display rule: a project shows uploaded photos if any exist; otherwise
// it falls back to embedding the instagram_url. At least one must be set.

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Lang } from "@/lib/i18n";

export type ServiceType =
  | "gutter_install"
  | "gutter_helmet"
  | "repair"
  | "cleaning"
  | "window_cleaning"
  | "solar_cleaning"
  | "other";

export type Project = {
  slug: string;
  title: string;
  captionEn: string;
  captionEs: string;
  serviceType: ServiceType;
  featured: boolean;
  order: number;
  instagramUrl?: string;
  photos: string[];
};

const CONTENT_DIR = path.join(process.cwd(), "content", "recent-work");

function readProject(filename: string): Project | null {
  try {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
    const { data } = matter(raw);
    // gray-matter parses YAML — coerce/default each field defensively so a
    // missing or mistyped value in the CMS doesn't break the build.
    const captionEn = String(data.caption_en ?? data.title ?? "");
    return {
      slug: filename.replace(/\.md$/, ""),
      title: String(data.title ?? ""),
      captionEn,
      captionEs: String(data.caption_es ?? captionEn),
      serviceType: (data.service_type as ServiceType) ?? "other",
      featured: Boolean(data.featured),
      order: typeof data.order === "number" ? data.order : 100,
      instagramUrl:
        typeof data.instagram_url === "string" && data.instagram_url.length > 0
          ? data.instagram_url
          : undefined,
      photos: Array.isArray(data.photos)
        ? data.photos.map((p: unknown) => String(p))
        : [],
    };
  } catch {
    return null;
  }
}

export function getRecentWork(): Project[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(readProject)
    .filter((p): p is Project => p !== null)
    .filter((p) => p.photos.length > 0 || p.instagramUrl)
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedWork(limit = 2): Project[] {
  return getRecentWork()
    .filter((p) => p.featured)
    .slice(0, limit);
}

export function projectCaption(p: Project, lang: Lang): string {
  return lang === "es" ? p.captionEs || p.captionEn : p.captionEn;
}
