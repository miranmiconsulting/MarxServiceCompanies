import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";
import RainScene from "./RainScene";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-navy to-navy-dark py-14 text-white md:py-20">
      <RainScene />
      <div className="container-page relative z-10 grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
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
          aria-label="Only Certified Gutter Helmet Installer in the San Antonio Area"
          className="overflow-hidden rounded-card border border-white/25 bg-white/15 text-center shadow-soft ring-1 ring-accent/30 backdrop-blur-sm"
        >
          {/* Slim accent bar reinforces the certification angle */}
          <div className="h-1 bg-accent" aria-hidden="true" />
          <div className="p-5">
            <Image
              src="/certified.svg"
              alt="Gutter Helmet Certified Installer badge"
              width={170}
              height={170}
              className="mx-auto h-[150px] w-[150px] sm:h-[170px] sm:w-[170px]"
            />
            <strong className="mt-3 block text-base font-extrabold leading-tight text-white sm:text-lg">
              Only Certified Gutter Helmet® Installer in the San Antonio Area
            </strong>
            <p className="mt-2 text-sm text-white/85">
              Authorized to install the original patented gutter protection system.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
