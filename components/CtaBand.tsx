import Link from "next/link";
import { business } from "@/lib/business";
import { getDict, type Lang, pathPrefix } from "@/lib/i18n";

type Props = {
  lang?: Lang;
  title?: string;
  body?: string;
  inSection?: boolean;
};

export default function CtaBand({
  lang = "en",
  title,
  body,
  inSection = true,
}: Props) {
  const t = getDict(lang).cta;
  const prefix = pathPrefix(lang);

  const inner = (
    <div className="rounded-card bg-gradient-to-br from-navy to-navy-dark p-8 text-center text-white shadow-soft">
      <h2 className="text-white">{title ?? t.title}</h2>
      <p className="mt-2 text-white/90">{body ?? t.body}</p>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <a href={`tel:${business.phoneE164}`} className="btn btn-primary">
          {t.callBtn}
        </a>
        <a
          href={`sms:${business.phoneE164}`}
          className="btn bg-white text-navy hover:bg-neutral-100 hover:no-underline"
        >
          {t.textBtn}
        </a>
        <Link href={`${prefix}/contact#estimate`} className="btn btn-outline-light">
          {t.requestBtn}
        </Link>
      </div>
      <p className="mt-5 text-xs uppercase tracking-wider text-white/70">
        {t.kicker}
      </p>
    </div>
  );

  if (!inSection) return inner;
  return (
    <section className="bg-neutral-50 py-14">
      <div className="container-page">{inner}</div>
    </section>
  );
}
