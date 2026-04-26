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
    instagram: "https://www.instagram.com/",
  },
  hours: {
    weekdays: "Mon – Sat · 8:00 AM – 6:00 PM",
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
} as const;

export type Business = typeof business;
