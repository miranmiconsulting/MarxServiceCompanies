import type { Metadata, Viewport } from "next";
import "./globals.css";
import { business } from "@/lib/business";
import { services } from "@/lib/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default:
      "Gutter Installation & Cleaning in San Antonio TX | Alamo Area Gutters by Marx",
    template: "%s | Alamo Area Gutters by Marx",
  },
  description:
    "Trusted San Antonio gutter installation, gutter guards, repairs and cleaning since 2011. Free estimates from Alamo Area Gutters by Marx Service Companies. Call 210-419-1528.",
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
    siteName: `${business.brandName} ${business.brandSubtitle}`,
    title:
      "Alamo Area Gutters by Marx | San Antonio Gutter Pros Since 2011",
    description:
      "Seamless gutters, Gutter Helmet®, repairs, cleaning, window & solar cleaning across San Antonio. Free estimates.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Alamo Area Gutters by Marx | San Antonio Gutter Pros Since 2011",
    description:
      "Seamless gutters, Gutter Helmet®, repairs, cleaning, window & solar cleaning across San Antonio. Free estimates.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#1B2D5C",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: `${business.brandName} ${business.brandSubtitle}`,
  alternateName: [business.legalName, "Alamo Area Gutter Helmet"],
  image: `${business.siteUrl}/logo.png`,
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
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Gutter & Exterior Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title },
    })),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <StickyCallBar />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
