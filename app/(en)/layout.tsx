import type { Metadata, Viewport } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import "../globals.css";
import { business } from "@/lib/business";
import { en } from "@/lib/i18n/en";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";

// Root layout for the English locale. Next 15 multi-root pattern:
// app/layout.tsx is removed and each route group owns its own <html>,
// so /es routes ship with lang="es" from SSR rather than needing a
// client-side override. See app/es/layout.tsx for the Spanish twin.

const fontDisplay = Lexend({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const fontBody = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const brandFull = `${business.brandName} ${business.brandSubtitle}`;
const siteBase = business.siteUrl.replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: en.pageMeta.home.title,
    template: `%s | ${brandFull}`,
  },
  description: en.pageMeta.home.description,
  keywords: [
    "gutter installation San Antonio",
    "seamless gutters San Antonio",
    "Gutter Helmet San Antonio",
    "gutter guards San Antonio",
    "gutter cleaning San Antonio",
    "gutter repair San Antonio",
    "window cleaning San Antonio",
    "solar panel cleaning San Antonio",
    "Alamo Area Gutters",
    "Marx Service Companies",
  ],
  authors: [{ name: business.legalName }],
  creator: business.legalName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: business.siteUrl,
    siteName: brandFull,
    title: `${brandFull} | San Antonio Gutter Pros Since ${business.foundedYear}`,
    description:
      "Seamless gutters, Gutter Helmet®, repairs, cleaning, window & solar cleaning across San Antonio. Free estimates.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${brandFull} | San Antonio Gutter Pros Since ${business.foundedYear}`,
    description:
      "Seamless gutters, Gutter Helmet®, repairs, cleaning, window & solar cleaning across San Antonio. Free estimates.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
    languages: { "en-US": "/", "es-US": "/es", "x-default": "/" },
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#1B2D5C",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "RoofingContractor"],
  "@id": `${siteBase}/#business`,
  name: brandFull,
  legalName: business.legalName,
  alternateName: [business.legalName, "Alamo Area Gutter Helmet"],
  inLanguage: "en-US",
  image: `${siteBase}/certified.png`,
  logo: `${siteBase}/logo.png`,
  url: business.siteUrl,
  telephone: business.phoneE164,
  email: business.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: business.addressLocality,
    addressRegion: business.addressRegion,
    addressCountry: business.addressCountry,
  },
  areaServed: business.serviceAreas.map((c) => `${c}, TX`),
  founder: { "@type": "Person", name: business.owner },
  foundingDate: String(business.foundedYear),
  sameAs: [business.social.facebook, business.social.instagram].filter(Boolean),
  ...(business.trust.googleRating
    ? {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: business.trust.googleRating,
          reviewCount: business.trust.googleReviewCount,
          bestRating: "5",
          worstRating: "1",
        },
      }
    : {}),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Gutter & Exterior Services",
    itemListElement: en.services.items.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title },
    })),
  },
};

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body className="font-sans">
        <Navbar lang="en" />
        {/* pb-20 reserves space under the sticky bottom CTA on mobile so the
            last footer line isn't hidden behind it. md+ no sticky bar. */}
        <main id="main" className="pb-20 md:pb-0">{children}</main>
        <Footer lang="en" />
        <StickyCallBar lang="en" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
