import Link from "next/link";
import Image from "next/image";
import { business } from "@/lib/business";
import { en } from "@/lib/i18n/en";

export default function NotFound() {
  const t = en.notFound;
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-neutral-100 py-4">
        <div className="container-page">
          <Link href="/" className="inline-flex items-center hover:no-underline" aria-label="Home">
            <Image src="/logo.svg" alt="Marx Service Companies" width={319} height={186} unoptimized className="h-12 w-auto sm:h-14" />
          </Link>
        </div>
      </header>
      <section className="py-20">
        <div className="container-page max-w-xl text-center">
          <h1>{t.title}</h1>
          <p className="mt-3 text-neutral-700">{t.body}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn btn-secondary">{t.back}</Link>
            <a href={`tel:${business.phoneE164}`} className="btn btn-primary">
              {t.callBtn}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
