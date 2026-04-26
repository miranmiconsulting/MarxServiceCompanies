import { en } from "./en";
import { es } from "./es";
import type { Dict, Lang } from "./types";

export const dicts: Record<Lang, Dict> = { en, es };

export function getDict(lang: Lang): Dict {
  return dicts[lang];
}

export function pathPrefix(lang: Lang): string {
  return lang === "es" ? "/es" : "";
}

// For a given path on the current locale, return the matching path on the
// other locale. Used by LocaleSwitcher.
export function otherLocaleHref(lang: Lang, currentPath: string): string {
  if (lang === "en") {
    // EN page; switch to ES.
    return `/es${currentPath === "/" ? "" : currentPath}`;
  }
  // ES page; switch to EN.
  const stripped = currentPath.replace(/^\/es/, "") || "/";
  return stripped;
}

export type { Dict, Lang } from "./types";
