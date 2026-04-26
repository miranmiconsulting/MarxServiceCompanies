import type { Metadata, Viewport } from "next";
import "./globals.css";
import { business } from "@/lib/business";
import { en } from "@/lib/i18n/en";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: en.pageMeta.home.title,
    template: "%s | Alamo Area Gutters by Marx",
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
    "instalación canales San Antonio",
    "limpieza canales San Antonio",
  ],
  authors: [{ name: business.legalName }],
  creator: business.legalName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: business.siteUrl,
    siteName: `${business.brandName} ${business.brandSubtitle}`,
    title: "Alamo Area Gutters by Marx | San Antonio Gutter Pros Since 2011",
    description: "Seamless gutters, Gutter Helmet®, repairs, cleaning, window & solar cleaning across San Antonio. Free estimates.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alamo Area Gutters by Marx | San Antonio Gutter Pros Since 2011",
    description: "Seamless gutters, Gutter Helmet®, repairs, cleaning, window & solar cleaning across San Antonio. Free estimates.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
    languages: { "en-US": "/", "es-US": "/es" },
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#1FA9E0",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: `${business.brandName} ${business.brandSubtitle}`,
  alternateName: [business.legalName, "Alamo Area Gutter Helmet"],
  image: `${business.siteUrl}/logo.svg`,
  url: business.siteUrl,
  telephone: business.phoneE164,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: business.addressLocality,
    addressRegion: business.addressRegion,
    addressCountry: business.addressCountry,
  },
  areaServed: business.serviceAreas.map((c) => `${c}, TX`),
  founder: business.owner,
  foundingDate: String(business.foundedYear),
  sameAs: [business.social.facebook, business.social.instagram],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
