import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from "astro:i18n";

import { createWhatsAppURL } from "../data/contact";
import { serviceIds, type ServiceId } from "../data/services";

import type { Locale } from "./config";

// Segmento de ruta de las páginas de servicio por idioma.
// Debe coincidir con src/pages/servicios/ y src/pages/en/services/.
const servicesPath: Record<Locale, string> = {
  es: "servicios",
  en: "services",
};

export interface ServicePageContent {
  // Slug explícito: no se genera a partir del título.
  slug: string;
  // Nombre corto para breadcrumb y enlaces (coincide con la tarjeta de la landing).
  name: string;
  title: string;
  intro: string;
  seo: { title: string; description: string };
  documents: string[];
  whatsappMessage: string;
}

export interface ServicePagesUI {
  breadcrumbLabel: string;
  heroLabel: string;
  aboutTitle: string;
  documentsTitle: string;
  ctaButton: string;
  detailsLink: string;
  backLink: string;
}

const pages: Record<Locale, Record<ServiceId, ServicePageContent>> = {
  es: {
    civil: {
      slug: "documentos-civiles",
      name: "Documentos civiles",
      title: "Traducción de documentos civiles en Panamá",
      intro:
        "Traducciones certificadas de documentos civiles entre inglés y español, realizadas por un Traductor Público Autorizado en Panamá.",
      seo: {
        title: "Traducción de documentos civiles en Panamá | JM Traducciones",
        description:
          "Traducciones certificadas de documentos civiles inglés ↔ español en Panamá. Solicita una cotización para certificados de nacimiento, matrimonio, defunción y otros documentos civiles.",
      },
      documents: [
        "Certificados de nacimiento",
        "Certificados de matrimonio",
        "Certificados de defunción",
        "Otros documentos civiles previa consulta",
      ],
      whatsappMessage:
        "Hola, quisiera solicitar una cotización para la traducción de un documento civil.",
    },

    academic: {
      slug: "documentos-academicos",
      name: "Documentos académicos",
      title: "Traducción de documentos académicos en Panamá",
      intro:
        "Traducciones certificadas de documentos académicos entre inglés y español para trámites académicos o profesionales.",
      seo: {
        title: "Traducción de documentos académicos en Panamá | JM Traducciones",
        description:
          "Traducciones certificadas inglés ↔ español de créditos académicos, diplomas y otros documentos académicos en Panamá.",
      },
      documents: ["Créditos académicos", "Diplomas", "Otros documentos académicos previa consulta"],
      whatsappMessage:
        "Hola, quisiera solicitar una cotización para la traducción de un documento académico.",
    },

    technical: {
      slug: "documentacion-tecnica",
      name: "Documentación técnica",
      title: "Traducción de documentación técnica en Panamá",
      intro:
        "Traducciones inglés ↔ español de documentación técnica con atención a la terminología y al contenido del documento.",
      seo: {
        title: "Traducción de documentación técnica en Panamá | JM Traducciones",
        description:
          "Traducciones inglés ↔ español de manuales, fichas técnicas y otros documentos técnicos en Panamá.",
      },
      documents: ["Manuales", "Fichas técnicas", "Otros documentos técnicos previa consulta"],
      whatsappMessage:
        "Hola, quisiera solicitar una cotización para la traducción de documentación técnica.",
    },
  },

  en: {
    civil: {
      slug: "civil-documents",
      name: "Civil documents",
      title: "Civil document translations in Panama",
      intro:
        "Certified English ↔ Spanish translations of civil documents provided by an Authorized Public Translator in Panama.",
      seo: {
        title: "Civil Document Translations in Panama | JM Traducciones",
        description:
          "Certified English ↔ Spanish civil document translations in Panama. Request a quote for birth, marriage, death certificates and other civil documents.",
      },
      documents: [
        "Birth certificates",
        "Marriage certificates",
        "Death certificates",
        "Other civil documents upon request",
      ],
      whatsappMessage: "Hello, I would like to request a quote for a civil document translation.",
    },

    academic: {
      slug: "academic-documents",
      name: "Academic documents",
      title: "Academic document translations in Panama",
      intro:
        "Certified English ↔ Spanish translations of academic documents for academic or professional applications.",
      seo: {
        title: "Academic Document Translations in Panama | JM Traducciones",
        description:
          "Certified English ↔ Spanish translations of academic transcripts, diplomas and other academic documents in Panama.",
      },
      documents: ["Academic transcripts", "Diplomas", "Other academic documents upon request"],
      whatsappMessage:
        "Hello, I would like to request a quote for an academic document translation.",
    },

    technical: {
      slug: "technical-documentation",
      name: "Technical documentation",
      title: "Technical document translations in Panama",
      intro:
        "English ↔ Spanish translations of technical documentation with attention to terminology and document content.",
      seo: {
        title: "Technical Document Translations in Panama | JM Traducciones",
        description:
          "English ↔ Spanish translations of manuals, technical data sheets and other technical documents in Panama.",
      },
      documents: ["Manuals", "Technical data sheets", "Other technical documents upon request"],
      whatsappMessage:
        "Hello, I would like to request a quote for a technical document translation.",
    },
  },
};

const ui: Record<Locale, ServicePagesUI> = {
  es: {
    breadcrumbLabel: "Ruta de navegación",
    heroLabel: "Servicio",
    aboutTitle: "Sobre el servicio",
    documentsTitle: "Documentos frecuentes",
    ctaButton: "Solicitar cotización por WhatsApp",
    detailsLink: "Ver detalles",
    backLink: "Volver a Servicios",
  },

  en: {
    breadcrumbLabel: "Breadcrumb",
    heroLabel: "Service",
    aboutTitle: "About the service",
    documentsTitle: "Common documents",
    ctaButton: "Request a quote on WhatsApp",
    detailsLink: "Learn more",
    backLink: "Back to services",
  },
};

export const getServicePage = (locale: Locale, id: ServiceId) => pages[locale][id];

export const getServicePagesUI = (locale: Locale) => ui[locale];

const servicePath = (locale: Locale, id: ServiceId) =>
  `${servicesPath[locale]}/${pages[locale][id].slug}`;

// "/JMTraducciones/servicios/documentos-civiles/", "/JMTraducciones/en/services/civil-documents/".
export const getServiceURL = (locale: Locale, id: ServiceId) =>
  getRelativeLocaleUrl(locale, servicePath(locale, id));

export const getAbsoluteServiceURL = (locale: Locale, id: ServiceId) =>
  getAbsoluteLocaleUrl(locale, servicePath(locale, id));

export const getServiceWhatsAppURL = (locale: Locale, id: ServiceId) =>
  createWhatsAppURL(pages[locale][id].whatsappMessage);

// Parámetros para getStaticPaths() de cada idioma.
export const getServiceStaticPaths = (locale: Locale) =>
  serviceIds.map((id) => ({
    params: { slug: pages[locale][id].slug },
    props: { id },
  }));
