// Bilingual content types. EN is the canonical source; ES is the v1 humanized
// translation, intended to be refined by a native San Antonio Spanish speaker.

export type Lang = "en" | "es";

export type ServiceItem = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  long: string;
  bullets?: string[];
};

export type ReelItem = {
  url: string;
  caption: string;
};

export type WhyItem = { title: string; body: string };

export type Dict = {
  langSwitcher: { en: string; es: string; aria: string; otherHref: (path: string) => string };

  utility: { mobileMessage: string; tagline: string; established: string };

  nav: {
    home: string;
    services: string;
    recentWork: string;
    about: string;
    contact: string;
    freeEstimate: string;
    aria: string;
    callPhone: string;
  };

  hero: {
    eyebrow: string;
    h1: string;
    sub: string;
    callBtn: string;
    textBtn: string;
    estimateBtn: string;
    badges: string[];
    certCardTitle: string;
    certCardSub: string;
    certCardAria: string;
    certCardBadgeAlt: string;
  };

  trustBar: { items: string[] };

  services: { items: ServiceItem[] };

  whatWeDo: { title: string; sub: string; seeAll: string };

  whyUs: { title: string; sub: string; items: WhyItem[] };

  recentWork: {
    title: string;
    sub: string;
    body: string;
    captions: string[];
    seeAll: string;
    follow: string;
    galleryCtaTitle: string;
    galleryCtaBody: string;
  };

  cta: {
    title: string;
    body: string;
    callBtn: string;
    textBtn: string;
    requestBtn: string;
    kicker: string;
  };

  areas: { title: string; sub: string };

  servicesPage: {
    title: string;
    subtitle: string;
    certEyebrow: string;
    certTitle: string;
    certBody: string;
    ctaTitle: string;
    ctaBody: string;
  };

  galleryPage: {
    title: string;
    subtitle: string;
  };

  about: {
    title: string;
    sub: string;
    foundedH2: string;
    p1: string;
    p2: string;
    meaningH2: string;
    meaningP: string;
    whereH2: string;
    whereP: string;
    certH2: string;
    certP: string;
    certBadgeAlt: string;
    ctaTitle: string;
    ctaBody: string;
  };

  contact: {
    title: string;
    sub: string;
    h2: string;
    phoneLabel: string;
    emailLabel: string;
    areaLabel: string;
    areaText: string;
    hoursLabel: string;
    hoursWeek: string;
    hoursSun: string;
    ownerLabel: string;
    ownerText: string;
    callNow: string;
    textUs: string;
    estimateH2: string;
    estimateSub: string;
    form: {
      nameLabel: string;
      phoneLabel: string;
      phonePlaceholder: string;
      serviceLabel: string;
      servicePlaceholder: string;
      addressLabel: string;
      addressPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      consent: string;
      services: string[];
    };
  };

  footer: {
    tagline: string;
    servicesH4: string;
    companyH4: string;
    rights: string;
    location: string;
    serviceLinks: { href: string; label: string }[];
    companyLinks: { href: string; label: string }[];
  };

  notFound: { title: string; body: string; back: string; callBtn: string };

  pageMeta: {
    home: { title: string; description: string };
    services: { title: string; description: string };
    about: { title: string; description: string };
    contact: { title: string; description: string };
    gallery: { title: string; description: string };
  };
};
