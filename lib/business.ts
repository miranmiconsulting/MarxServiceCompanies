// Single source of truth for business / contact information.
// Update once and the whole site (header, footer, JSON-LD, contact page, sitemap) updates.

export const business = {
  legalName: "Marx Service Companies LLC",
  brandName: "Alamo Area Gutters",
  brandSubtitle: "by Marx Service Companies",
  tagline: "Servicing Your Projects",
  owner: "Marcos Munoz",
  foundedYear: 2011,
  phone: "(210) 419-1528",
  phoneE164: "+12104191528",
  email: "info@alamoareagutters.com",
  addressLocality: "San Antonio",
  addressRegion: "TX",
  addressCountry: "US",
  // Public-facing site URL — overridden by NEXT_PUBLIC_SITE_URL when deployed.
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alamoareagutterhelmet.com",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/marxservicecompanies/",
  },
  hours: {
    weekdays: "Mon to Sat · 8:00 AM to 6:00 PM",
    sunday: "Sun · By appointment",
  },
  serviceAreas: [
    "San Antonio",
    "Stone Oak",
    "Alamo Heights",
    "Castle Hills",
    "Leon Valley",
    "Helotes",
    "Boerne",
    "Bulverde",
    "Schertz",
    "Cibolo",
    "Selma",
    "Universal City",
    "Live Oak",
    "Converse",
    "New Braunfels",
  ],
  // Trust signals — placeholder values, owner should confirm/correct.
  // Reviews are intentionally OFF for now — set googleRating to a value
  // like "5.0" + a real count + (optional) URL to enable the ReviewsBadge.
  trust: {
    googleRating: "",          // "" hides the ReviewsBadge everywhere
    googleReviewCount: 0,      // hides the "· N reviews" suffix
    googleReviewsUrl: "",      // optional outbound link wrapping the badge
    insured: true,             // "Fully Insured" pill in TrustBar
    bbb: false,                // "BBB Accredited" pill if true
  },
} as const;

export type Business = typeof business;
