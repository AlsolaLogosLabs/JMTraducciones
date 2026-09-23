import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from "astro:i18n";

// Debe coincidir con la sección i18n de astro.config.mjs.
export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

interface LocaleSettings {
  // Nombre del idioma en su propio idioma, anunciado por el selector.
  name: string;
  // Abreviatura visible en el selector.
  shortName: string;
  ogLocale: string;
  // Imagen social 1200 × 630 en public/, con los textos en este idioma.
  ogImage: string;
}

export const localeSettings: Record<Locale, LocaleSettings> = {
  es: {
    name: "Español",
    shortName: "ES",
    ogLocale: "es_PA",
    ogImage: "og-image-es.png",
  },

  en: {
    name: "English",
    shortName: "EN",
    ogLocale: "en_PA",
    ogImage: "og-image-en.png",
  },
};

// Inicio de cada idioma, respetando base y trailingSlash: "/JMTraducciones/", "/JMTraducciones/en/".
export const getHomeURL = (locale: Locale) => getRelativeLocaleUrl(locale);

export const getAbsoluteHomeURL = (locale: Locale) => getAbsoluteLocaleUrl(locale);
