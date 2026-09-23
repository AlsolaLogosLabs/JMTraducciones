// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://alsolalogoslabs.github.io",
  base: "/JMTraducciones",
  trailingSlash: "always",

  // Español en la raíz (/JMTraducciones/) e inglés en /JMTraducciones/en/.
  // Los idiomas deben coincidir con src/i18n/config.ts.
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      namespaces: {
        news: false,
        xhtml: false,
        image: false,
        video: false,
      },
    }),
  ],
});
