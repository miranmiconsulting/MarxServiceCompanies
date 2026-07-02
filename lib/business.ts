// Single source of truth for business / contact information.
// Update once and the whole site (header, footer, JSON-LD, contact page, sitemap) updates.

export const business = {
  legalName: "Marx Service Companies LLC",
  brandName: "Alamo Area Gutters",
  brandSubtitle: "by Marx Service Companies",
  tagline: "Servicing Your Projects",
  owner: "Marcos Munoz",
  foundedYear: 2015,
  phone: "(210) 419-1528",
  phoneE164: "+12104191528",
  email: "info@marxservicecompanies.com",
  addressLocality: "San Antonio",
  addressRegion: "TX",
  addressCountry: "US",
  // Public-facing site URL — overridden by NEXT_PUBLIC_SITE_URL when deployed.
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alamoareagutterhelmet.com",
  social: {
    // Placeholder removed — leave empty until Marcos provides the real
    // Facebook page URL. JSON-LD sameAs filters out empty entries.
    facebook: "",
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
  // Trust signals.
  // Reviews are OFF because Marx does not yet have a Google Business
  // Profile with live reviews. Do NOT populate googleRating /
  // googleReviewCount with fabricated values — that's what pulled fake
  // "5.0 · 3 reviews" onto the site before. When Marcos activates GBP
  // and has real reviews, set googleRating to the real value, count to
  // the real number, and googleReviewsUrl to the profile permalink.
  trust: {
    googleRating: "",
    googleReviewCount: 0,
    googleReviewsUrl: "",
    insured: true,
    bbb: false,
  },
} as const;

export type Business = typeof business;
