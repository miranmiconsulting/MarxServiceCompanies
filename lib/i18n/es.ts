import type { Dict } from "./types";
import { business } from "../business";

// Humanized first-pass Spanish for the San Antonio market.
// Style notes:
//   - Conversational "usted" form throughout (more respectful for the
//     older homeowner audience that calls a gutter company).
//   - "Canales" is used for "gutters" (more universally understood in
//     Bexar County than the regional "canaletas").
//   - Brand names (Marx Service Companies, Gutter Helmet, Alamo Area
//     Gutters) are kept in English.
//   - Intentionally avoids stiff or marketing-flavored Spanish; reads
//     like how a contractor would actually talk.
//   - Should be reviewed by a native bilingual speaker before final
//     marketing use.

const phone = business.phone;

export const es: Dict = {
  langSwitcher: {
    en: "EN",
    es: "ES",
    aria: "Cambiar idioma",
    otherHref: (path) => {
      // From a Spanish path (/es/about) build the English equivalent (/about)
      const stripped = path.replace(/^\/es/, "") || "/";
      return stripped;
    },
  },

  utility: {
    mobileMessage: "Estimados Gratis Disponibles",
    tagline: "A Su Servicio",
    established: `Desde ${business.foundedYear}`,
  },

  nav: {
    home: "Inicio",
    services: "Servicios",
    recentWork: "Trabajo Reciente",
    about: "Quiénes Somos",
    contact: "Contacto",
    freeEstimate: "Estimado Gratis",
    aria: "Principal",
    callPhone: `📞 Llamar al ${phone}`,
  },

  hero: {
    eyebrow: "Único Instalador Certificado en el Área",
    h1: "Expertos en Canales en San Antonio: Instalación, Protección, Reparación y Limpieza",
    sub: `Canales sin uniones de 5" y 6", protección Gutter Helmet®, y limpieza exterior bien hecha desde la primera vez. Empresa familiar local de confianza en San Antonio y áreas alrededor desde ${business.foundedYear}.`,
    callBtn: `📞 Llamar al ${phone}`,
    textBtn: "💬 Envíenos un mensaje",
    estimateBtn: "Pida un Estimado Gratis",
    badges: [
      `★ Desde ${business.foundedYear}`,
      "★ Estimados Gratis",
      "★ Negocio Local",
      "★ Llame o envíe mensaje",
    ],
    certCardTitle: "Único Instalador Certificado de Gutter Helmet® en el Área de San Antonio",
    certCardSub: "Autorizados para instalar el sistema original patentado de protección de canales.",
    certCardAria: "Único Instalador Certificado de Gutter Helmet en el Área de San Antonio",
    certCardBadgeAlt: "Insignia de Instalador Certificado de Gutter Helmet",
  },

  trustBar: {
    items: [
      "Único Instalador Certificado de Gutter Helmet® en el Área",
      `Desde ${business.foundedYear}`,
      `El dueño ${business.owner} en cada trabajo`,
      "Estimados gratis · Llame o envíe mensaje",
      "Servicio en San Antonio y áreas alrededor",
    ],
  },

  services: {
    items: [
      {
        slug: "install",
        icon: "🏠",
        title: 'Instalación de Canales sin Uniones de 5" y 6"',
        short:
          'Canales de aluminio estilo K cortados a la medida y fabricados en sitio para un ajuste limpio y resistente a fugas.',
        long:
          'Canales de aluminio estilo K fabricados en sitio a las medidas exactas de su hogar. Menos uniones significa menos fugas. Le ayudamos a elegir entre el perfil residencial de 5" y el de 6" según la inclinación de su techo y la cantidad de lluvia. Esto importa en una ciudad que recibe aguaceros tejanos repentinos.',
        bullets: [
          "Fabricación sin uniones en sitio",
          "Soportes ocultos, atornillados (no clavados)",
          "Opciones de color para combinar con su techo",
        ],
      },
      {
        slug: "helmet",
        icon: "🛡️",
        title: "Gutter Helmet®: El Único Instalador Certificado en el Área",
        short:
          "El sistema original patentado de protección de canales. Instalador autorizado.",
        long:
          "Gutter Helmet® mantiene fuera las hojas, ramas y residuos mientras deja entrar el agua, y viene con garantía transferible de funcionamiento. Deje de subir escaleras. Deje de pagar por limpiezas.",
        bullets: [
          "Garantía vitalicia de funcionamiento sin obstrucciones",
          "Se instala sobre sus canales existentes",
          "Maneja hasta los residuos pesados de roble",
        ],
      },
      {
        slug: "screens",
        icon: "🧱",
        title: "Mallas y Cubiertas para Canales",
        short:
          "Protección económica de canales para hogares que no necesitan un sistema completo de Gutter Helmet®.",
        long:
          "Alternativas económicas de protección de canales. Le recomendamos lo que de verdad funciona para sus árboles y tipo de techo, no solo lo que tengamos en el camión.",
      },
      {
        slug: "repair",
        icon: "🔧",
        title: "Reparación y Mantenimiento de Canales",
        short:
          "¿Caídos, con fugas, o despegándose del techo? Los aseguramos, sellamos, y reemplazamos las secciones dañadas.",
        long:
          "Secciones caídas, uniones con fugas, canales despegándose de la fascia, bajantes que no drenan. Nosotros lo arreglamos. La mayoría de las reparaciones se completan en una sola visita.",
        bullets: [
          "Re-asegurado y re-inclinado",
          "Sellado de uniones y tapas",
          "Reparación de fascia y reemplazo de bajante",
        ],
      },
      {
        slug: "cleaning",
        icon: "💧",
        title: "Limpieza de Canales",
        short:
          "Limpieza a mano de canales y bajantes para que el agua de tormenta drene como debe.",
        long:
          "Limpieza completa a mano de canales y bajantes para que el agua de tormenta de verdad drene lejos de su cimiento. Embolsamos los residuos y dejamos su propiedad limpia. Lo mejor es hacerlo dos veces al año en San Antonio. Una vez después del otoño, y otra después del polen de roble en primavera.",
      },
      {
        slug: "windows",
        icon: "🪟",
        title: "Limpieza de Ventanas",
        short:
          "Limpieza interior y exterior de ventanas, sin rayas, para hogares residenciales.",
        long:
          "Limpieza interior y exterior de ventanas sin rayas para hogares residenciales. A menudo se reserva junto con la limpieza de canales a un precio combinado.",
      },
      {
        slug: "solar",
        icon: "☀️",
        title: "Limpieza de Paneles Solares",
        short:
          "Recupere su producción solar quitando polvo, polen, y suciedad de aves de manera segura.",
        long:
          "El polen, polvo y suciedad de aves pueden bajar entre 15 y 25% su producción solar. Usamos métodos de limpieza seguros y aprobados para paneles, para recuperar su producción sin afectar la garantía.",
      },
    ],
  },

  whatWeDo: {
    title: "Lo Que Hacemos",
    sub: "Desde la instalación de canales sin uniones hasta la protección Gutter Helmet® libre de obstrucciones y la limpieza exterior, hacemos el trabajo que mantiene su hogar protegido de las tormentas de Texas.",
    seeAll: "Ver Todos los Servicios →",
  },

  whyUs: {
    title: "Por Qué los Vecinos de San Antonio Eligen a Marx",
    sub: "Llegamos, hacemos el trabajo bien, y respondemos por él. Eso es todo.",
    items: [
      { title: `Desde ${business.foundedYear}`, body: "Más de una década sirviendo a familias en San Antonio. La mayoría de nuestro trabajo viene por referencia." },
      { title: "El Dueño en Cada Trabajo", body: `${business.owner} está en sitio, no solo en la calcomanía del camión. Usted habla con el dueño.` },
      { title: "Estimados Gratis y Sin Presión", body: "Medimos, recomendamos, y le damos un precio. Sin presión de venta. Sin sorpresas." },
      { title: "Instalador Autorizado de Gutter Helmet®", body: "Respaldados por el sistema original de protección de canales con garantía transferible de funcionamiento." },
      { title: "Lugares de Trabajo Limpios", body: "Cuidamos su jardín y recogemos cada clavo, tornillo, y pedazo antes de irnos." },
      { title: "Locales y Atentos", body: "Llamadas y mensajes contestados el mismo día. Aquí también vivimos." },
    ],
  },

  recentWork: {
    title: "Trabajo Reciente",
    sub: "Instalaciones y limpiezas reales en el área de San Antonio. Síganos en Instagram para nuevos videos cada semana.",
    body: "Canales nuevos, reparaciones, limpieza, y mantenimiento por todo San Antonio y áreas alrededor. Siga a Marx Service Companies para ver actualizaciones de proyectos, consejos sobre canales, y recordatorios de mantenimiento por temporada.",
    captions: [
      "Canales nuevos en una casa antigua",
      "Instalación de canales sin uniones",
      "Limpieza y mantenimiento de canales",
    ],
    seeAll: "Ver Todo el Trabajo Reciente →",
    follow: "Vea Más Trabajo en Instagram →",
    galleryCtaTitle: "¿Le Gusta Lo Que Ve? Hablemos Sobre Su Hogar.",
    galleryCtaBody: "Estimados gratis y honestos en todo San Antonio y áreas alrededor.",
  },

  cta: {
    title: "Estimados Gratis con Respuesta el Mismo Día",
    body: "Cuéntenos sobre su proyecto. Pasamos a medir, le damos recomendaciones honestas, y un precio por escrito sin presión.",
    callBtn: `📞 Llamar al ${phone}`,
    textBtn: "💬 Envíenos un mensaje",
    requestBtn: "Pídalo en Línea",
    kicker: "Instalado por el único profesional certificado de Gutter Helmet® en el área",
  },

  areas: {
    title: "Sirviendo con Orgullo a San Antonio y Áreas Alrededor",
    sub: `Basados en ${business.addressLocality}, ${business.addressRegion}. Atendemos hogares por todo el Condado de Bexar y las comunidades alrededor.`,
  },

  servicesPage: {
    title: "Nuestros Servicios",
    subtitle: "Canales, protección de canales, y limpieza exterior en todo San Antonio y áreas alrededor.",
    certEyebrow: "Certificación de Gutter Helmet®",
    certTitle: "La Instalación Certificada Importa",
    certBody: "Cuando se trata de sistemas Gutter Helmet®, una instalación correcta hace toda la diferencia. Marx Service Companies es el único instalador certificado en el área, lo que garantiza que el sistema se instala según los estándares del fabricante y con respaldo de garantía.",
    ctaTitle: "¿No Está Seguro de Lo Que Necesita? Solo Pregunte.",
    ctaBody: "Pasamos a verlo, le decimos directo, y le damos el precio por escrito. Sin costo.",
  },

  galleryPage: {
    title: "Trabajo Reciente",
    subtitle: "Vea proyectos recientes de instalación, limpieza, y mantenimiento de canales de Marx Service Companies.",
  },

  about: {
    title: "Sobre Marx Service Companies",
    sub: "Empresa familiar. Dueños locales. Nosotros mismos en la escalera.",
    foundedH2: `Fundada en ${business.foundedYear} por ${business.owner}`,
    p1: `Marx Service Companies LLC empezó en ${business.foundedYear} con un trabajo a la vez y una sola regla: hacer el trabajo como usted lo querría hecho en su propia casa. Más de una década después, esa sigue siendo la regla.`,
    p2: 'Empezamos con canales y eso sigue siendo el corazón de lo que hacemos. Instalaciones sin uniones de 5" y 6", protección Gutter Helmet®, reparaciones, y limpiezas. Con el tiempo, los clientes pidieron más, así que agregamos limpieza de ventanas y limpieza de paneles solares para completar el trabajo exterior que mantiene un hogar funcionando.',
    meaningH2: '¿Qué Significa "A Su Servicio" Para Nosotros?',
    meaningP: "Significa que el dueño contesta el teléfono. Significa que llegamos cuando decimos que vamos a llegar. Significa que medimos dos veces, damos un precio una vez, y no le cambiamos el número a la mitad del trabajo. Significa limpiar antes de irnos para que no pueda saber dónde trabajamos, excepto que sus canales drenan otra vez.",
    whereH2: "Dónde Trabajamos",
    whereP: `Estamos basados en ${business.addressLocality}, ${business.addressRegion} y atendemos hogares por todo el Condado de Bexar y las comunidades alrededor, incluyendo Stone Oak, Alamo Heights, Helotes, Boerne, Bulverde, Schertz, Cibolo, Selma, Universal City, Live Oak, Converse, y New Braunfels.`,
    certH2: "Instalador Certificado de Gutter Helmet®",
    certP: "Marx Service Companies es el único instalador certificado de Gutter Helmet® en el área, lo que garantiza que el sistema se instala según los estándares del fabricante y con garantía transferible de funcionamiento. Si una malla o cubierta es mejor para su hogar, también se lo decimos.",
    certBadgeAlt: "Insignia de Instalador Certificado de Gutter Helmet",
    ctaTitle: "Hable Directamente con el Dueño",
    ctaBody: `Sin centros de llamadas. Sin vendedores. ${business.owner} contesta, llega, y le da el precio él mismo.`,
  },

  contact: {
    title: "Contáctenos",
    sub: "Llame, envíe un mensaje, o llene el formulario. La mayoría de los estimados se programan el mismo día.",
    h2: "Comuníquese con Nosotros",
    phoneLabel: "Teléfono y Mensaje",
    emailLabel: "Correo",
    areaLabel: "Área de Servicio",
    areaText: `${business.addressLocality}, ${business.addressRegion} y áreas alrededor. Condado de Bexar y más allá.`,
    hoursLabel: "Horario",
    hoursWeek: "Lun a Sáb · 8:00 AM a 6:00 PM",
    hoursSun: "Dom · Por cita",
    ownerLabel: "Dueño",
    ownerText: `${business.owner} · Empresa familiar desde ${business.foundedYear}`,
    callNow: "📞 Llamar Ahora",
    textUs: "💬 Envíenos un Mensaje",
    estimateH2: "Pida un Estimado Gratis",
    estimateSub: "Cuéntenos sobre su proyecto. Le contestamos en un día laboral.",
    form: {
      nameLabel: "Su Nombre",
      phoneLabel: "Número de Teléfono",
      phonePlaceholder: "(210) 555-1234",
      serviceLabel: "¿Qué Necesita?",
      servicePlaceholder: "Seleccione un servicio",
      addressLabel: "Dirección o Vecindario",
      addressPlaceholder: "ej., Stone Oak, 78258",
      messageLabel: "Detalles del Proyecto",
      messagePlaceholder: "¿Una planta o dos? ¿Árboles arriba? ¿Fugas o caídos?",
      submit: "Envíe Mi Pedido de Estimado",
      submitting: "Enviando…",
      consent: "Al enviar acepta ser contactado por teléfono, mensaje, o correo sobre su estimado. No compartimos su información.",
      services: [
        'Instalación de Canales (5" o 6")',
        "Gutter Helmet® / Protección de Canales",
        "Reparación de Canales",
        "Limpieza de Canales",
        "Limpieza de Ventanas",
        "Limpieza de Paneles Solares",
        "Múltiple / No estoy seguro",
      ],
    },
  },

  footer: {
    tagline: `A su servicio desde ${business.foundedYear}. Empresa local en ${business.addressLocality}, ${business.addressRegion}.`,
    servicesH4: "Servicios",
    companyH4: "Empresa",
    rights: `© ${new Date().getFullYear()} ${business.legalName} · Todos los derechos reservados.`,
    location: `${business.addressLocality}, ${business.addressRegion}`,
    serviceLinks: [
      { href: "/es/services#install", label: "Instalación de Canales" },
      { href: "/es/services#helmet", label: "Gutter Helmet®" },
      { href: "/es/services#repair", label: "Reparación de Canales" },
      { href: "/es/services#cleaning", label: "Limpieza de Canales" },
      { href: "/es/services#windows", label: "Limpieza de Ventanas" },
      { href: "/es/services#solar", label: "Limpieza Solar" },
    ],
    companyLinks: [
      { href: "/es/about", label: "Quiénes Somos" },
      { href: "/es/gallery", label: "Trabajo Reciente" },
      { href: "/es/contact", label: "Contacto" },
      { href: "/es/contact#estimate", label: "Estimado Gratis" },
    ],
  },

  notFound: {
    title: "Página No Encontrada",
    body: `Esa página no existe, pero seguimos aquí. Llame o envíe un mensaje al ${phone} para un estimado gratis.`,
    back: "Volver al Inicio",
    callBtn: `📞 Llamar al ${phone}`,
  },

  pageMeta: {
    home: {
      title: "Instalación y Limpieza de Canales en San Antonio TX | Alamo Area Gutters by Marx",
      description: `Instalación, protección, reparación, y limpieza de canales de confianza en San Antonio desde ${business.foundedYear}. Estimados gratis de Alamo Area Gutters by Marx Service Companies. Llame al ${phone}.`,
    },
    services: {
      title: "Servicios de Canales en San Antonio TX | Instalación, Protección, Reparación, Limpieza",
      description: `Instalación de canales sin uniones, Gutter Helmet®, reparaciones, limpieza de canales, limpieza de ventanas y limpieza de paneles solares en San Antonio TX. Estimados gratis. Llame al ${phone}.`,
    },
    about: {
      title: `Sobre ${business.legalName} | Especialista en Canales en San Antonio Desde ${business.foundedYear}`,
      description: `${business.legalName} es una empresa familiar de canales y servicios exteriores en San Antonio, TX. Fundada por ${business.owner} en ${business.foundedYear}. Estimados gratis. Llame al ${phone}.`,
    },
    contact: {
      title: "Contacto y Estimado Gratis | Expertos en Canales en San Antonio",
      description: `Pida un estimado gratis para canales en San Antonio TX. Llame o envíe mensaje a ${business.owner} al ${phone}. Alamo Area Gutters by Marx Service Companies, empresa familiar desde ${business.foundedYear}.`,
    },
    gallery: {
      title: "Trabajo Reciente | Instalaciones y Limpiezas de Canales en San Antonio",
      description: "Proyectos recientes de instalación, limpieza, y mantenimiento de canales de Marx Service Companies en San Antonio TX. Vea videos reales del trabajo.",
    },
  },
};
