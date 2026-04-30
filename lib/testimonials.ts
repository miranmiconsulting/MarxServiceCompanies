// Customer testimonials. Replace placeholders with real Google reviews
// before launch. Keep names initial-only (e.g., "Lisa K.") for privacy.
// Quotes can be lightly trimmed for length but should not be paraphrased.

export type Testimonial = {
  quote: { en: string; es: string };
  author: string;
  area: string;       // neighborhood or city, not full address
  service?: string;   // optional service tag
};

export const testimonials: Testimonial[] = [
  {
    quote: {
      en: "Marcos came out the next day, gave a fair price, and the work looked great. Couldn't ask for more.",
      es: "Marcos llegó al siguiente día, dio un precio justo, y el trabajo quedó muy bien. No se puede pedir más.",
    },
    author: "Lisa K.",
    area: "Stone Oak",
    service: "Seamless gutter installation",
  },
  {
    quote: {
      en: "First gutter company that actually showed up when they said they would. Cleanup was perfect, no mess left behind.",
      es: "La primera compañía de canales que de verdad llegó cuando dijo. La limpieza fue perfecta, no dejaron ningún tiradero.",
    },
    author: "David R.",
    area: "Boerne",
    service: "Gutter Helmet® install",
  },
  {
    quote: {
      en: "Honest, on time, and the price didn't change after the work started. Highly recommend.",
      es: "Honestos, puntuales, y el precio no cambió después de empezar el trabajo. Los recomiendo mucho.",
    },
    author: "Maria G.",
    area: "Alamo Heights",
    service: "Gutter cleaning & repair",
  },
];
