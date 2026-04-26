import Link from "next/link";
import { business } from "@/lib/business";

export default function NotFound() {
  return (
    <section className="py-20">
      <div className="container-page max-w-xl text-center">
        <h1>Page Not Found</h1>
        <p className="mt-3 text-neutral-700">
          That page doesn&apos;t exist, but we&apos;re still here. Call or text{" "}
          {business.phone} for a free estimate.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-secondary">Back to Home</Link>
          <a href={`tel:${business.phoneE164}`} className="btn btn-primary">
            📞 Call {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
