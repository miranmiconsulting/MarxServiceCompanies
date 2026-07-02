import Link from "next/link";
import Image from "next/image";
import { business } from "@/lib/business";
import { en } from "@/lib/i18n/en";

// Fallback 404 for the English root and any unmatched top-level route.
// Wrapped by app/(en)/layout.tsx so it gets the standard chrome (Navbar,
// Footer, sticky call bar). Do NOT put an <html> tag here — the root
// layout owns it.

export default function NotFound() {
  const t = en.notFound;
  return (
    <section className="py-20">
      <div className="container-page max-w-xl text-center">
        <Image
          src="/logo.png"
          alt="Marx Service Companies"
          width={319}
          height={186}
          className="mx-auto mb-8 h-12 w-auto sm:h-14"
        />
        <h1>{t.title}</h1>
        <p className="mt-3 text-neutral-700">{t.body}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-secondary">
            {t.back}
          </Link>
          <a href={`tel:${business.phoneE164}`} className="btn btn-primary">
            {t.callBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
