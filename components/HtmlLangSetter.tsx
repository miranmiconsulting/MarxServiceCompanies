"use client";

import { useEffect } from "react";
import type { Lang } from "@/lib/i18n";

// Updates <html lang> client-side for the active locale. The root layout
// hardcodes lang="en", so Spanish routes call this to override post-mount.

export default function HtmlLangSetter({ lang }: { lang: Lang }) {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);
  return null;
}
