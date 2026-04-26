export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  bullets?: string[];
  icon: string; // emoji used in cards (replaceable with SVG later)
};

export const services: Service[] = [
  {
    slug: "install",
    title: "Seamless Gutter Installation — 5\" and 6\"",
    short:
      "Custom-cut 5\" and 6\" K-style aluminum gutters fabricated on site for a clean, leak-resistant fit.",
    long:
      "K-style aluminum gutters fabricated on site to your home's exact lengths. Fewer seams means fewer leaks. We help you choose between 5\" residential and 6\" oversized profiles based on your roof pitch and the rainfall load — important in a city that gets sudden Texas downpours.",
    bullets: [
      "On-site seamless fabrication",
      "Hidden hangers, screwed (not nailed)",
      "Color options to match your trim",
    ],
    icon: "🏠",
  },
  {
    slug: "helmet",
    title: "Gutter Helmet® — Certified Installer",
    short:
      "The original patented gutter protection system. Authorized installer.",
    long:
      "Gutter Helmet® keeps leaves, twigs, and debris out while letting water in — and it's backed by a transferable performance warranty. Stop climbing ladders. Stop paying for cleanings.",
    bullets: [
      "Lifetime no-clog performance warranty",
      "Installs over your existing gutters",
      "Handles even heavy oak debris",
    ],
    icon: "🛡️",
  },
  {
    slug: "screens",
    title: "Gutter Screens & Covers",
    short:
      "Budget-friendly gutter protection for homeowners who don't need a full Gutter Helmet® system.",
    long:
      "Budget-friendly gutter protection alternatives. We'll recommend what actually fits your tree coverage and roof type — not just whatever we have on the truck.",
    icon: "🧱",
  },
  {
    slug: "repair",
    title: "Gutter Repair & Maintenance",
    short:
      "Sagging, leaking, or pulling away from the fascia? We re-secure, reseal, and replace damaged sections.",
    long:
      "Sagging sections, leaking joints, gutters pulling away from fascia, downspouts that don't drain — we fix it. Most repairs are completed in a single visit.",
    bullets: [
      "Re-securing & re-pitching",
      "Resealing seams and end caps",
      "Fascia repair and downspout replacement",
    ],
    icon: "🔧",
  },
  {
    slug: "cleaning",
    title: "Gutter Cleaning",
    short:
      "Hand-cleaning of gutters and downspouts so storm water actually drains where it should.",
    long:
      "Full hand-cleaning of gutters and downspouts so storm water actually drains away from your foundation. We bag debris and leave your property clean. Best done twice a year in San Antonio — once after fall and once after spring oak pollen.",
    icon: "💧",
  },
  {
    slug: "windows",
    title: "Window Cleaning",
    short:
      "Streak-free interior and exterior window cleaning for residential homes.",
    long:
      "Streak-free interior and exterior window cleaning for residential homes. Often booked alongside gutter cleaning at a combined rate.",
    icon: "🪟",
  },
  {
    slug: "solar",
    title: "Solar Panel Cleaning",
    short:
      "Restore solar output by safely removing dust, pollen, and bird droppings.",
    long:
      "Pollen, dust and bird droppings can knock 15–25% off your solar production. We use safe, panel-rated cleaning methods to restore output without voiding warranties.",
    icon: "☀️",
  },
];
