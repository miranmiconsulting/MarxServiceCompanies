import type { Metadata, Viewport } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import "../globals.css";
import { business } from "@/lib/business";
import { es } from "@/lib/i18n/es";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";

// Root layout for the Spanish locale. Next 15 multi-root pattern:
// app/layout.tsx is removed and each route group owns its own <html>,
// so /es/* routes ship with lang="es" from SSR. See app/(en)/layout.tsx
// for the English twin.

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
    default: es.pageMeta.home.title,
    template: `%s | ${brandFull}`,
  },
  description: es.pageMeta.home.description,
  keywords: [
    "instalación canales San Antonio",
    "limpieza canales San Antonio",
    "protección canales San Antonio",
    "reparación canales San Antonio",
    "Gutter Helmet San Antonio",
    "Alamo Area Gutters",
    "Marx Service Companies",
  ],
  authors: [{ name: business.legalName }],
  creator: business.legalName,
  openGraph: {
    type: "website",
    locale: "es_US",
    url: `${siteBase}/es`,
    siteName: brandFull,
    title: `${brandFull} | Instaladores de Canales en San Antonio Desde ${business.foundedYear}`,
    description:
      "Canales sin uniones, Gutter Helmet®, mallas y cubiertas, reparaciones, y limpieza en San Antonio. Estimados gratis.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${brandFull} | Instaladores de Canales en San Antonio Desde ${business.foundedYear}`,
    description:
      "Canales sin uniones, Gutter Helmet®, mallas y cubiertas, reparaciones, y limpieza en San Antonio. Estimados gratis.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/es",
    languages: { "en-US": "/", "es-US": "/es", "x-default": "/" },
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#EEF6FB",
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
  inLanguage: "es-US",
  image: `${siteBase}/certified.png`,
  logo: `${siteBase}/logo.png`,
  url: `${siteBase}/es`,
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
  // aggregateRating deliberately omitted. No Google reviews exist yet.
  // Reinstate ONLY when Marcos confirms real Google Business Profile
  // review counts/ratings — never seed with fabricated values.
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
    name: "Servicios de canales",
    itemListElement: es.services.items.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title },
    })),
  },
};

export default function EsRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body className="font-sans">
        <Navbar lang="es" />
        <main id="main" className="pb-20 md:pb-0">{children}</main>
        <Footer lang="es" />
        <StickyCallBar lang="es" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
