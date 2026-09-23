import { createWhatsAppURL } from "../data/contact";
import type { CredentialField } from "../data/credentials";
import type { NavigationSection } from "../data/navigation";
import type { ProcessStepId } from "../data/process";
import { profile } from "../data/profile";
import type { ServiceCategoryId } from "../data/services";

import { defaultLocale, type Locale } from "./config";

interface TextBlock {
  title: string;
  description: string;
}

export interface LocaleContent {
  // Denominaciones que dependen del idioma. Los datos objetivos están en src/data/profile.ts.
  profile: {
    role: string;
    // Denominación legal original, mostrada entre paréntesis cuando el rol está traducido.
    roleOriginal?: string;
    languages: { source: string; target: string };
    location: string;
    authority: string;
    serviceSummary: string;
    authorizedSinceText: string;
  };

  seo: {
    title: string;
    description: string;
    socialImageAlt: string;
    credentialCategory: string;
  };

  whatsapp: {
    quoteMessage: string;
    expressMessage: string;
  };

  a11y: {
    whatsappNewTab: string;
    opensNewTab: string;
    primaryChannel: string;
    step: string;
    documentsFor: (category: string) => string;
    languagePair: (source: string, target: string) => string;
  };

  header: {
    skipLink: string;
    navigationLabel: string;
    logoLabel: string;
    quoteCta: string;
    menu: string;
    mobileQuoteCta: string;
    languageLabel: string;
    navigation: Record<NavigationSection, string>;
  };

  hero: {
    titleStart: string;
    titleEnd: string;
    quoteCta: string;
    servicesCta: string;
    trustLabel: string;
    trustItems: string[];
  };

  services: {
    label: string;
    title: string;
    summary: string;
    categories: Record<ServiceCategoryId, TextBlock & { items: string[] }>;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };

  credentials: {
    label: string;
    introLead: string;
    introLanguagesPrefix: string;
    introEnd: string;
    fields: Record<CredentialField, { label: string; value: string }>;
    disclaimer: string;
    cardLabel: string;
    sealLabel: string;
  };

  process: {
    label: string;
    title: string;
    description: string;
    steps: Record<ProcessStepId, TextBlock>;
  };

  express: {
    label: string;
    title: string;
    description: string;
    cta: string;
  };

  contact: {
    label: string;
    title: string;
    description: string;
    cta: string;
    channelsTitle: string;
  };

  floatingWhatsApp: {
    label: string;
  };
}

const es: LocaleContent = {
  profile: {
    role: "Traductor Público Autorizado",
    languages: { source: "Inglés", target: "Español" },
    location: "Panamá",
    authority: "Ministerio de Educación de Panamá",
    serviceSummary: "Traducción certificada de documentos personales, académicos y técnicos.",
    authorizedSinceText: `Idoneidad desde ${profile.authorizedSince}`,
  },

  seo: {
    title: "JM Traducciones | Traductor Público Autorizado en Panamá",
    description:
      "Traducciones certificadas inglés ↔ español en Panamá. Traductor Público Autorizado con idoneidad desde 2018. Solicita información y cotización por WhatsApp.",
    socialImageAlt: `${profile.brand} - Traducciones certificadas inglés ↔ español en Panamá`,
    credentialCategory: "Idoneidad profesional",
  },

  whatsapp: {
    quoteMessage: "Hola, quisiera solicitar una cotización para una traducción.",
    expressMessage:
      "Hola, quisiera consultar la disponibilidad del servicio express de traducción.",
  },

  a11y: {
    whatsappNewTab: "(WhatsApp, abre en una pestaña nueva)",
    opensNewTab: "Abre en una pestaña nueva.",
    primaryChannel: "Canal principal",
    step: "Paso",
    documentsFor: (category) => `Documentos: ${category}`,
    languagePair: (source, target) => `${source} y ${target}`,
  },

  header: {
    skipLink: "Saltar al contenido",
    navigationLabel: "Navegación principal",
    logoLabel: `${profile.brand}, ir al inicio`,
    quoteCta: "Cotizar",
    menu: "Menú",
    mobileQuoteCta: "Cotizar por WhatsApp",
    languageLabel: "Idioma",
    navigation: {
      inicio: "Inicio",
      servicios: "Servicios",
      credenciales: "Credenciales",
      "como-funciona": "Cómo funciona",
      express: "Express",
      contacto: "Contacto",
    },
  },

  hero: {
    titleStart: "Traducciones certificadas",
    titleEnd: "en Panamá",
    quoteCta: "Cotizar por WhatsApp",
    servicesCta: "Ver servicios",
    trustLabel: "Información del servicio",
    // Datos de confianza complementarios: no repiten lo que ya dicen el título y el bloque profesional.
    trustItems: [
      "Cotización antes de iniciar",
      "Servicio express bajo consulta",
      "Reconocimiento del Ministerio de Educación de Panamá",
    ],
  },

  services: {
    label: "Servicios",
    title: "Traducciones certificadas",
    summary:
      "Traducción certificada de documentos personales, académicos, técnicos y otros documentos previa consulta.",
    categories: {
      civil: {
        title: "Documentos civiles",
        description: "Certificados y documentos emitidos por el Registro Civil.",
        items: [
          "Certificados de nacimiento",
          "Certificados de matrimonio",
          "Certificados de defunción",
          "Otros documentos del Registro Civil",
        ],
      },
      academic: {
        title: "Documentos académicos",
        description: "Documentación de estudios para trámites académicos o profesionales.",
        items: ["Créditos académicos", "Diplomas", "Otros documentos académicos"],
      },
      technical: {
        title: "Documentación técnica",
        description: "Documentos con terminología técnica o especializada.",
        items: ["Manuales", "Fichas técnicas", "Documentación especializada"],
      },
      other: {
        title: "Otros documentos",
        description:
          "Si tu documento no aparece en esta lista, envíalo por WhatsApp para revisarlo antes de cotizar.",
        items: ["Otros documentos previa consulta"],
      },
    },
    ctaTitle: "¿Tienes un documento para traducir?",
    ctaText: "Envíalo por WhatsApp y recibe una cotización.",
    ctaButton: "Enviar documento",
  },

  credentials: {
    label: "Credenciales",
    introLead: `${profile.name} fue reconocido por el Ministerio de Educación de Panamá como`,
    introLanguagesPrefix: "de",
    introEnd: `, con idoneidad desde ${profile.authorizedSince}.`,
    fields: {
      professional: { label: "Profesional", value: profile.name },
      languages: { label: "Idiomas", value: "Inglés ↔ Español" },
      authorization: { label: "Idoneidad", value: `Desde ${profile.authorizedSince}` },
      recognition: { label: "Reconocimiento", value: "Ministerio de Educación de Panamá" },
    },
    disclaimer: `${profile.brand} es un servicio profesional privado. No representa al Ministerio de Educación de Panamá ni a ninguna otra entidad gubernamental.`,
    cardLabel: "Resumen de la credencial profesional",
    sealLabel: "IDONEIDAD",
  },

  process: {
    label: "Cómo funciona",
    title: "Solicitar una traducción es sencillo",
    description: "Cuatro pasos desde el primer mensaje hasta recibir tu traducción certificada.",
    steps: {
      send: {
        title: "Envía tu documento",
        description:
          "Comparte por WhatsApp o correo electrónico el documento que necesitas traducir.",
      },
      quote: {
        title: "Recibe una cotización",
        description:
          "Se revisan el tipo y la extensión del documento para enviarte una cotización.",
      },
      confirm: {
        title: "Confirma el servicio",
        description: "Confirma la cotización para dar inicio a la traducción.",
      },
      deliver: {
        title: "Recibe tu traducción",
        description: "Recibe tu traducción certificada una vez finalizada.",
      },
    },
  },

  express: {
    label: "Servicio express",
    title: "¿Necesitas tu traducción con urgencia?",
    description:
      "Consulta por disponibilidad del servicio express de 24 horas. El plazo dependerá del tipo y extensión del documento.",
    cta: "Consultar servicio express",
  },

  contact: {
    label: "Contacto",
    title: "Solicita tu cotización",
    description:
      "Envía tu documento por WhatsApp para recibir una cotización. También puedes escribir por correo electrónico o Instagram.",
    cta: "Solicitar cotización por WhatsApp",
    channelsTitle: "Canales de contacto",
  },

  floatingWhatsApp: {
    label: "Cotizar por WhatsApp. Abre en una pestaña nueva.",
  },
};

const en: LocaleContent = {
  profile: {
    role: "Authorized Public Translator",
    roleOriginal: "Traductor Público Autorizado",
    languages: { source: "English", target: "Spanish" },
    location: "Panama",
    authority: "Ministry of Education of Panama",
    serviceSummary: "Certified translation of personal, academic and technical documents.",
    authorizedSinceText: `Authorized since ${profile.authorizedSince}`,
  },

  seo: {
    title: "JM Traducciones | Authorized Public Translator in Panama",
    description:
      "Certified English ↔ Spanish translations in Panama. Authorized Public Translator since 2018. Request information and a quote via WhatsApp.",
    socialImageAlt: `${profile.brand} - Certified English ↔ Spanish translations in Panama`,
    credentialCategory: "Professional authorization",
  },

  whatsapp: {
    quoteMessage: "Hello, I would like to request a quote for a translation.",
    expressMessage:
      "Hello, I would like to ask about availability of the express translation service.",
  },

  a11y: {
    whatsappNewTab: "(WhatsApp, opens in a new tab)",
    opensNewTab: "Opens in a new tab.",
    primaryChannel: "Primary channel",
    step: "Step",
    documentsFor: (category) => `Documents: ${category}`,
    languagePair: (source, target) => `${source} and ${target}`,
  },

  header: {
    skipLink: "Skip to content",
    navigationLabel: "Main navigation",
    logoLabel: `${profile.brand}, go to home page`,
    quoteCta: "Get a quote",
    menu: "Menu",
    mobileQuoteCta: "Get a quote on WhatsApp",
    languageLabel: "Language",
    navigation: {
      inicio: "Home",
      servicios: "Services",
      credenciales: "Credentials",
      "como-funciona": "How it works",
      express: "Express",
      contacto: "Contact",
    },
  },

  hero: {
    titleStart: "Certified translations",
    titleEnd: "in Panama",
    quoteCta: "Get a quote on WhatsApp",
    servicesCta: "View services",
    trustLabel: "Service information",
    trustItems: [
      "Quote before starting",
      "Express service upon request",
      "Recognized by the Ministry of Education of Panama",
    ],
  },

  services: {
    label: "Services",
    title: "Certified translations",
    summary:
      "Certified translation of personal, academic and technical documents, and other documents upon request.",
    categories: {
      civil: {
        title: "Civil documents",
        description: "Certificates and documents issued by the Civil Registry.",
        items: [
          "Birth certificates",
          "Marriage certificates",
          "Death certificates",
          "Other Civil Registry documents",
        ],
      },
      academic: {
        title: "Academic documents",
        description: "Educational records for academic or professional applications.",
        items: ["Academic transcripts", "Diplomas", "Other academic documents"],
      },
      technical: {
        title: "Technical documentation",
        description: "Documents with technical or specialized terminology.",
        items: ["Manuals", "Technical data sheets", "Specialized documentation"],
      },
      other: {
        title: "Other documents",
        description:
          "If your document is not on this list, send it via WhatsApp so it can be reviewed before a quote is provided.",
        items: ["Other documents upon request"],
      },
    },
    ctaTitle: "Do you have a document to translate?",
    ctaText: "Send it via WhatsApp and receive a quote.",
    ctaButton: "Send document",
  },

  credentials: {
    label: "Credentials",
    introLead: `${profile.name} was recognized by the Ministry of Education of Panama as an`,
    introLanguagesPrefix: "for",
    introEnd: `, authorized since ${profile.authorizedSince}.`,
    fields: {
      professional: { label: "Professional", value: profile.name },
      languages: { label: "Languages", value: "English ↔ Spanish" },
      authorization: { label: "Authorization", value: `Since ${profile.authorizedSince}` },
      recognition: { label: "Recognition", value: "Ministry of Education of Panama" },
    },
    disclaimer: `${profile.brand} is a private professional service. It does not represent the Ministry of Education of Panama or any other government entity.`,
    cardLabel: "Professional credential summary",
    sealLabel: "AUTHORIZED",
  },

  process: {
    label: "How it works",
    title: "Requesting a translation is simple",
    description: "Four steps from the first message to receiving your certified translation.",
    steps: {
      send: {
        title: "Send your document",
        description: "Share the document you need translated via WhatsApp or email.",
      },
      quote: {
        title: "Receive a quote",
        description: "The document type and length are reviewed before a quote is sent to you.",
      },
      confirm: {
        title: "Confirm the service",
        description: "Confirm the quote to start the translation.",
      },
      deliver: {
        title: "Receive your translation",
        description: "Receive your certified translation once it is completed.",
      },
    },
  },

  express: {
    label: "Express service",
    title: "Need your translation urgently?",
    description:
      "Ask about availability of the 24-hour express service. Turnaround time depends on the type and length of the document.",
    cta: "Ask about express service",
  },

  contact: {
    label: "Contact",
    title: "Request a quote",
    description:
      "Send your document via WhatsApp to receive a quote. You can also reach out by email or Instagram.",
    cta: "Request a quote on WhatsApp",
    channelsTitle: "Contact channels",
  },

  floatingWhatsApp: {
    label: "Get a quote on WhatsApp. Opens in a new tab.",
  },
};

const content: Record<Locale, LocaleContent> = { es, en };

export const getContent = (locale: Locale = defaultLocale) => content[locale];

export const getWhatsAppURLs = (locale: Locale = defaultLocale) => ({
  quote: createWhatsAppURL(content[locale].whatsapp.quoteMessage),
  express: createWhatsAppURL(content[locale].whatsapp.expressMessage),
});
