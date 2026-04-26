import Link from "next/link";
import { business } from "@/lib/business";

type Props = {
  title?: string;
  body?: string;
  inSection?: boolean;
};

export default function CtaBand({
  title = "Free Estimates — Same-Day Response",
  body = "Tell us about your project. We'll come measure, give honest recommendations, and a written quote with no pressure.",
  inSection = true,
}: Props) {
  const inner = (
    <div className="rounded-card bg-gradient-to-br from-navy to-navy-dark p-8 text-center text-white shadow-soft">
      <h2 className="text-white">{title}</h2>
      <p className="mt-2 text-white/90">{body}</p>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <a href={`tel:${business.phoneE164}`} className="btn btn-primary">
          📞 Call {business.phone}
        </a>
        <a
          href={`sms:${business.phoneE164}`}
          className="btn bg-white text-navy hover:bg-neutral-100 hover:no-underline"
        >
          💬 Text Us
        </a>
        <Link href="/contact#estimate" className="btn btn-outline-light">
          Request Online
        </Link>
      </div>
    </div>
  );

  if (!inSection) return inner;
  return (
    <section className="bg-neutral-50 py-14">
      <div className="container-page">{inner}</div>
    </section>
  );
}
