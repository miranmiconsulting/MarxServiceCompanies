import type { Dict } from "./types";
import { business } from "../business";

const phone = business.phone;

// Warranty language deliberately omitted. Gutter Helmet's transferable
// performance warranty and lifetime no-clog language belong to the
// manufacturer, not Marx. Reinstate ONLY when we have owner-confirmed
// wording and can properly attribute the warranty to Gutter Helmet.

export const en: Dict = {
  langSwitcher: {
    en: "EN",
    es: "ES",
    aria: "Change language",
    otherHref: (path) => `/es${path === "/" ? "" : path}`,
  },

  utility: {
    // Top-bar message anchored across all viewports — leads with the
    // differentiator that nobody else in the area can claim.
    mobileMessage: "Only Certified Gutter Helmet® Installer in the Area",
    tagline: "Only Certified Gutter Helmet® Installer in the Area",
    established: `Established ${business.foundedYear}`,
  },

  nav: {
    home: "Home",
    services: "Services",
    recentWork: "Recent Work",
    about: "About",
    contact: "Contact",
    freeEstimate: "Free Estimate",
    aria: "Main",
    callPhone: `📞 Call ${phone}`,
  },

  hero: {
    eyebrow: "Only Certified Installer in the Area",
    h1: "San Antonio Gutter Pros for Installation, Guards, Repair & Cleaning",
    sub: `Seamless 5" and 6" gutters, Gutter Helmet® protection, repairs, and cleaning done right the first time. Family run and trusted across San Antonio and surrounding areas since ${business.foundedYear}.`,
    callBtn: `📞 Call ${phone}`,
    textBtn: "💬 Text Us",
    estimateBtn: "Get a Free Estimate",
    badges: [
      `★ Established ${business.foundedYear}`,
      "★ Free Estimates",
      "★ Locally Owned",
      "★ Call or Text",
    ],
    certCardTitle: "Only Certified Gutter Helmet® Installer in the San Antonio Area",
    certCardSub: "Authorized to install the original patented gutter protection system.",
    certCardAria: "Only Certified Gutter Helmet Installer in the San Antonio Area",
    certCardBadgeAlt: "Gutter Helmet Certified Installer badge",
  },

  trustBar: {
    items: [
      "Only Certified Gutter Helmet® Installer in the Area",
      `Established ${business.foundedYear}`,
      "Discounts for military and first responders",
      "Free estimates · Call or text",
      "Servicing San Antonio & surrounding areas",
    ],
  },

  services: {
    items: [
      {
        slug: "install",
        icon: "🏠",
        title: 'Seamless Gutter Installation in 5" and 6"',
        short:
          'Custom cut 5" and 6" K-style aluminum gutters fabricated on site for a clean, leak-resistant fit.',
        long:
          'K-style aluminum gutters fabricated on site to your home\'s exact lengths. Fewer seams means fewer leaks. We help you choose between 5" residential and 6" oversized profiles based on your roof pitch and rainfall load. That matters in a city that gets sudden Texas downpours.',
        bullets: [
          "On-site seamless fabrication",
          "Hidden hangers, screwed (not nailed)",
          "Color options to match your trim",
        ],
      },
      {
        slug: "helmet",
        icon: "🛡️",
        title: "Gutter Helmet®: The Only Certified Installer in the Area",
        short: "The original patented gutter protection system. Authorized installer.",
        long:
          "Gutter Helmet® keeps leaves, twigs, and debris out while letting water in. Stop climbing ladders. Stop paying for cleanings.",
        bullets: [
          "Installs over your existing gutters",
          "Handles even heavy oak debris",
        ],
      },
      {
        slug: "screens",
        icon: "🧱",
        title: "Gutter Screens & Covers",
        short: "Budget friendly gutter protection for homeowners who don't need a full Gutter Helmet® system.",
        long: "Budget friendly gutter protection alternatives. We'll recommend what actually fits your tree coverage and roof type, not just whatever we have on the truck.",
      },
      {
        slug: "repair",
        icon: "🔧",
        title: "Gutter Repair & Maintenance",
        short: "Sagging, leaking, or pulling away from the fascia? We re-secure, reseal, and replace damaged sections.",
        long: "Sagging sections, leaking joints, gutters pulling away from fascia, downspouts that don't drain. We fix it. Most repairs are completed in a single visit.",
        bullets: [
          "Re-securing & re-pitching",
          "Resealing seams and end caps",
          "Fascia repair and downspout replacement",
        ],
      },
      {
        slug: "cleaning",
        icon: "💧",
        title: "Gutter Cleaning",
        short: "Hand cleaning of gutters and downspouts so storm water actually drains where it should.",
        long: "Full hand cleaning of gutters and downspouts so storm water actually drains away from your foundation. We bag debris and leave your property clean. Best done twice a year in San Antonio. Once after fall, and once after spring oak pollen.",
      },
    ],
  },

  whatWeDo: {
    title: "What We Do",
    sub: "Seamless gutter installs, clog-free Gutter Helmet® protection, screens and covers, repairs, and cleaning. We handle the work that keeps your home protected from Texas storms.",
    seeAll: "See All Services →",
  },

  whyUs: {
    title: "Why San Antonio Homeowners Choose Marx",
    sub: "We show up, do the work right, and stand behind it. That's it.",
    items: [
      { title: `Established ${business.foundedYear}`, body: "Over a decade serving San Antonio homeowners. Referrals are most of our work." },
      { title: "Owner On Every Job", body: `${business.owner} is on site, not just on the truck wrap. You talk to the owner.` },
      { title: "Free, No-Pressure Estimates", body: "We measure, recommend, and quote. No hard sell. No surprise extras." },
      { title: "Authorized Gutter Helmet® Installer", body: "The area's only certified installer of the original patented gutter protection system." },
      { title: "Clean Work Sites", body: "We protect your landscaping and clean up every nail, screw, and scrap before we leave." },
      { title: "Local & Responsive", body: "Calls and texts answered the same day. We live here too." },
    ],
  },

  recentWork: {
    title: "Recent Work",
    sub: "Real gutter installs and cleanings from around San Antonio. Follow along on Instagram for new project videos every week.",
    body: "Fresh gutters, repairs, cleaning, and maintenance work across San Antonio and surrounding areas. Follow Marx Service Companies for project updates, gutter tips, and seasonal maintenance reminders.",
    captions: [
      "Fresh gutters on an older home",
      "Seamless gutter installation",
      "Gutter cleaning and maintenance",
    ],
    seeAll: "See All Recent Work →",
    follow: "View More Work on Instagram →",
    galleryCtaTitle: "Like What You See? Let's Talk About Your Home.",
    galleryCtaBody: "Free, honest estimates across San Antonio and surrounding areas.",
  },

  cta: {
    title: "Free Estimates with Same Day Response",
    body: "Tell us about your project. We'll come measure, give honest recommendations, and a written quote with no pressure.",
    callBtn: `📞 Call ${phone}`,
    textBtn: "💬 Text Us",
    requestBtn: "Request Online",
    kicker: "Installed by the area's only certified Gutter Helmet® professional",
  },

  areas: {
    title: "Proudly Serving San Antonio & Surrounding Areas",
    sub: `Based in ${business.addressLocality}, ${business.addressRegion}. We service homes across Bexar County and the surrounding communities.`,
  },

  servicesPage: {
    title: "Our Services",
    subtitle: "Gutter installation, gutter protection, repair, and cleaning across San Antonio and surrounding areas.",
    certEyebrow: "Gutter Helmet® Certification",
    certTitle: "Certified Installation Matters",
    certBody: "When it comes to Gutter Helmet® systems, proper installation makes all the difference. Marx Service Companies is the only certified installer in the area, so the system is installed to manufacturer standards.",
    ctaTitle: "Not Sure What You Need? Just Ask.",
    ctaBody: "We'll come look, tell you straight, and quote in writing. No charge.",
  },

  galleryPage: {
    title: "Recent Work",
    subtitle: "See recent gutter installation, cleaning, and maintenance projects from Marx Service Companies.",
  },

  about: {
    title: "About Marx Service Companies",
    sub: "Family run. Locally owned. On the ladder ourselves.",
    foundedH2: `Founded in ${business.foundedYear} by ${business.owner}`,
    p1: `Marx Service Companies LLC was started in ${business.foundedYear} with one job at a time and one rule: do the work the way you'd want it done at your own house. More than a decade later, that's still the rule.`,
    p2: 'Gutters are what we do — start to finish. Seamless 5" and 6" installs, Gutter Helmet® protection, screens and covers, repairs, and cleanings. One craft, one crew, one focus.',
    meaningH2: 'What "Servicing Your Projects" Means to Us',
    meaningP: "It means the owner picks up the phone. It means we show up when we say we will. It means we measure twice, quote once, and don't change the number on you halfway through. It means cleaning up before we leave so you can't tell where we worked, except your gutters drain again.",
    whereH2: "Where We Work",
    whereP: `We're based in ${business.addressLocality}, ${business.addressRegion} and serve homeowners across Bexar County and the surrounding communities, including Stone Oak, Alamo Heights, Helotes, Boerne, Bulverde, Schertz, Cibolo, Selma, Universal City, Live Oak, Converse, and New Braunfels.`,
    certH2: "Gutter Helmet® Certified Installer",
    certP: "Marx Service Companies is the only certified Gutter Helmet® installer in the area. Every install is done to manufacturer standards. If a screen or cover is a better fit for your home, we'll tell you that too.",
    certBadgeAlt: "Gutter Helmet Certified Installer badge",
    ctaTitle: "Talk to the Owner Directly",
    ctaBody: `No call centers. No sales reps. ${business.owner} answers, comes out, and quotes the job himself.`,
  },

  contact: {
    title: "Contact Us",
    sub: "Call, text, or send a message. Most estimates are scheduled the same day.",
    h2: "Get In Touch",
    phoneLabel: "Phone & Text",
    emailLabel: "Email",
    areaLabel: "Service Area",
    areaText: `${business.addressLocality}, ${business.addressRegion} and surrounding areas. Bexar County and beyond.`,
    hoursLabel: "Hours",
    hoursWeek: "Mon to Sat · 8:00 AM to 6:00 PM",
    hoursSun: "Sun · By appointment",
    ownerLabel: "Owner",
    ownerText: `${business.owner} · Family run since ${business.foundedYear}`,
    callNow: "📞 Call Now",
    textUs: "💬 Text Us",
    estimateH2: "Request a Free Estimate",
    estimateSub: "Tell us about your project. We'll follow up within one business day.",
    form: {
      nameLabel: "Your Name",
      phoneLabel: "Phone Number",
      phonePlaceholder: "(210) 555-1234",
      serviceLabel: "What do you need?",
      servicePlaceholder: "Select a service",
      addressLabel: "Property Address or Neighborhood",
      addressPlaceholder: "e.g., Stone Oak, 78258",
      messageLabel: "Project Details",
      messagePlaceholder: "Single story or two story? Trees overhead? Any leaks or sagging?",
      submit: "Send My Estimate Request",
      submitting: "Sending…",
      consent: "By submitting you agree to be contacted by phone, text, or email about your estimate. We do not share your info.",
      services: [
        'Gutter Installation (5" or 6")',
        "Gutter Helmet®",
        "Gutter Screens & Covers",
        "Gutter Repair",
        "Gutter Cleaning",
        "Multiple / Not sure",
      ],
    },
  },

  footer: {
    tagline: `${business.tagline} since ${business.foundedYear}. Locally owned in ${business.addressLocality}, ${business.addressRegion}.`,
    servicesH4: "Services",
    companyH4: "Company",
    rights: `© ${new Date().getFullYear()} ${business.legalName} · All rights reserved.`,
    location: `${business.addressLocality}, ${business.addressRegion}`,
    serviceLinks: [
      { href: "/services#install", label: "Gutter Installation" },
      { href: "/services#helmet", label: "Gutter Helmet®" },
      { href: "/services#screens", label: "Screens & Covers" },
      { href: "/services#repair", label: "Gutter Repair" },
      { href: "/services#cleaning", label: "Gutter Cleaning" },
    ],
    companyLinks: [
      { href: "/about", label: "About" },
      { href: "/gallery", label: "Recent Work" },
      { href: "/contact", label: "Contact" },
      { href: "/contact#estimate", label: "Free Estimate" },
    ],
  },

  notFound: {
    title: "Page Not Found",
    body: `That page doesn't exist, but we're still here. Call or text ${phone} for a free estimate.`,
    back: "Back to Home",
    callBtn: `📞 Call ${phone}`,
  },

  pageMeta: {
    home: {
      title: "Gutter Installation & Cleaning in San Antonio TX",
      description: `Trusted San Antonio gutter installation, gutter guards, repairs and cleaning since ${business.foundedYear}. Free estimates from Alamo Area Gutters by Marx Service Companies. Call ${phone}.`,
    },
    services: {
      title: "Gutter Services in San Antonio TX | Install, Guards, Repair, Cleaning",
      description: `Seamless gutter installation, Gutter Helmet®, screens and covers, repairs, and gutter cleaning in San Antonio TX. Free estimates. Call ${phone}.`,
    },
    about: {
      title: `About ${business.legalName} | San Antonio Gutter Specialist Since ${business.foundedYear}`,
      description: `${business.legalName} is a family run gutter services company in San Antonio, TX. Founded by ${business.owner} in ${business.foundedYear}. Free estimates. Call ${phone}.`,
    },
    contact: {
      title: "Contact & Free Estimate | San Antonio Gutter Pros",
      description: `Request a free gutter estimate in San Antonio TX. Call or text ${business.owner} at ${phone}. Alamo Area Gutters by Marx Service Companies, family run since ${business.foundedYear}.`,
    },
    gallery: {
      title: "Recent Work | San Antonio Gutter Installs & Cleanings",
      description: "Recent gutter installation, cleaning, and maintenance projects from Marx Service Companies in San Antonio TX. Watch real reels from the field.",
    },
  },
};
