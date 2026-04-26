import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-navy to-navy-dark py-14 text-white md:py-20">
      <div className="container-page grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
        <div>
          <h1 className="text-balance text-white">
            San Antonio Gutter Pros — Installation, Guards, Repair & Cleaning
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/90">
            Seamless 5&quot; and 6&quot; gutters, Gutter Helmet® protection, and
            exterior cleaning done right the first time. Family-run and trusted
            across San Antonio and surrounding areas since {business.foundedYear}.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${business.phoneE164}`} className="btn btn-primary">
              📞 Call {business.phone}
            </a>
            <a href={`sms:${business.phoneE164}`} className="btn btn-outline-light">
              💬 Text Us
            </a>
            <Link href="/contact#estimate" className="btn btn-outline-light">
              Get a Free Estimate
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            <span className="badge-pill">★ Established {business.foundedYear}</span>
            <span className="badge-pill">★ Free Estimates</span>
            <span className="badge-pill">★ Locally Owned</span>
            <span className="badge-pill">★ Call or Text</span>
          </div>
        </div>

        <aside
          aria-label="Gutter Helmet Certified Installer"
          className="rounded-card border border-white/20 bg-white/5 p-5 text-center"
        >
          <Image
            src="/certified.svg"
            alt="Gutter Helmet Certified Installer badge"
            width={150}
            height={150}
            className="mx-auto h-[150px] w-[150px]"
          />
          <strong className="mt-2 block text-base text-white">
            Gutter Helmet® Certified Installer
          </strong>
          <p className="mt-1 text-sm text-white/85">
            Authorized to install the original patented gutter protection system —
            backed by a transferable performance warranty.
          </p>
        </aside>
      </div>
    </section>
  );
}
