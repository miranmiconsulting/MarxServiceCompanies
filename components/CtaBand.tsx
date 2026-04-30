import Link from "next/link";
import { Phone, MessageSquare, ShieldCheck } from "lucide-react";
import { business } from "@/lib/business";
import { getDict, type Lang, pathPrefix } from "@/lib/i18n";

type Props = {
  lang?: Lang;
  title?: string;
  body?: string;
  inSection?: boolean;
};

const stripIconEmoji = (s: string) =>
  s.replace(/^(?:📞|💬|★|✓)\s*/u, "").trim();

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
      <h2 className="font-display text-white">{title ?? t.title}</h2>
      <p className="mt-2 text-white/90">{body ?? t.body}</p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <a href={`tel:${business.phoneE164}`} className="btn btn-primary">
          <Phone size={18} strokeWidth={2.5} aria-hidden="true" />
          <span>{stripIconEmoji(t.callBtn)}</span>
        </a>
        <a
          href={`sms:${business.phoneE164}`}
          className="btn bg-white text-navy hover:bg-neutral-100 hover:no-underline"
        >
          <MessageSquare size={18} strokeWidth={2.5} aria-hidden="true" />
          <span>{stripIconEmoji(t.textBtn)}</span>
        </a>
        <Link href={`${prefix}/contact#estimate`} className="btn btn-outline-light">
          {t.requestBtn}
        </Link>
      </div>
      {/* Kicker reinforces the certified-installer differentiator with the
          cert (green) icon. Contrast bumped from white/70 -> white/90. */}
      <p className="mt-5 inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-white/90">
        <ShieldCheck size={14} strokeWidth={2.5} className="text-cert" aria-hidden="true" />
        <span>{t.kicker}</span>
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
