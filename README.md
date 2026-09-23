# JM Traducciones

[![CI](https://github.com/AlsolaLogosLabs/JMTraducciones/actions/workflows/ci.yml/badge.svg)](https://github.com/AlsolaLogosLabs/JMTraducciones/actions/workflows/ci.yml)
[![Deploy to GitHub Pages](https://github.com/AlsolaLogosLabs/JMTraducciones/actions/workflows/deploy.yml/badge.svg)](https://github.com/AlsolaLogosLabs/JMTraducciones/actions/workflows/deploy.yml)

Sitio web profesional de **JM Traducciones**, servicio de traducciones certificadas inglés ↔ español en Panamá a cargo de Juan Alberto Martínez de Gracia, Traductor Público Autorizado con idoneidad desde 2018.

El objetivo del sitio es explicar los servicios disponibles, transmitir confianza, mostrar la condición de Traductor Público Autorizado y facilitar que cada visitante solicite una cotización, principalmente por WhatsApp.

## 🌐 Sitio publicado

Sitio bilingüe; el español es el idioma principal:

| Idioma  | URL                                                  |
| ------- | ---------------------------------------------------- |
| Español | https://alsolalogoslabs.github.io/JMTraducciones/    |
| English | https://alsolalogoslabs.github.io/JMTraducciones/en/ |

Páginas de servicio:

| Servicio              | Español                                            | English                                                |
| --------------------- | -------------------------------------------------- | ------------------------------------------------------ |
| Documentos civiles    | `/JMTraducciones/servicios/documentos-civiles/`    | `/JMTraducciones/en/services/civil-documents/`         |
| Documentos académicos | `/JMTraducciones/servicios/documentos-academicos/` | `/JMTraducciones/en/services/academic-documents/`      |
| Documentación técnica | `/JMTraducciones/servicios/documentacion-tecnica/` | `/JMTraducciones/en/services/technical-documentation/` |

## 🧭 Secciones

| Sección       | ID              | Contenido                                                         |
| ------------- | --------------- | ----------------------------------------------------------------- |
| Inicio        | `inicio`        | Propuesta principal, traductor responsable y CTA de WhatsApp.     |
| Servicios     | `servicios`     | Documentos civiles, académicos, técnicos y otros previa consulta. |
| Credenciales  | `credenciales`  | Condición de Traductor Público Autorizado e idoneidad desde 2018. |
| Cómo funciona | `como-funciona` | Proceso de cuatro pasos para solicitar una traducción.            |
| Express       | `express`       | Consulta de disponibilidad del servicio express de 24 horas.      |
| Contacto      | `contacto`      | WhatsApp, email e Instagram.                                      |

## 🚀 Tecnologías

- Astro (sitio estático, sin frameworks de UI adicionales)
- TypeScript
- HTML semántico y CSS con variables (design tokens)
- `@astrojs/sitemap`
- Prettier + `prettier-plugin-astro`
- GitHub Actions y GitHub Pages
- Dependabot

## 📁 Estructura principal

```text
JMTraducciones/
├── .github/
│   ├── dependabot.yml
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
│
├── public/
│   ├── apple-touch-icon.png
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── og-image-en.png
│   └── og-image-es.png
│
├── src/
│   ├── components/
│   │   ├── Contact.astro
│   │   ├── Credentials.astro
│   │   ├── Express.astro
│   │   ├── FAQ.astro
│   │   ├── FloatingWhatsApp.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── LandingPage.astro
│   │   ├── Process.astro
│   │   ├── ServicePage.astro
│   │   ├── Services.astro
│   │   │
│   │   └── ui/
│   │       ├── CredentialCard.astro
│   │       ├── BrandLogo.astro
│   │       ├── Icon.astro
│   │       ├── icon-names.ts
│   │       ├── LanguagePair.astro
│   │       ├── LanguageSwitcher.astro
│   │       ├── Seal.astro
│   │       ├── SectionHeader.astro
│   │       ├── ServiceCard.astro
│   │       ├── SocialLink.astro
│   │       ├── StepCard.astro
│   │       ├── TranslatorStatement.astro
│   │       └── WhatsAppButton.astro
│   │
│   ├── data/
│   │   ├── contact.ts
│   │   ├── credentials.ts
│   │   ├── faq.ts
│   │   ├── navigation.ts
│   │   ├── process.ts
│   │   ├── profile.ts
│   │   └── services.ts
│   │
│   ├── i18n/
│   │   ├── config.ts
│   │   ├── content.ts
│   │   └── services.ts
│   │
│   ├── layouts/
│   │   └── MainLayout.astro
│   │
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── en/
│   │   │   ├── index.astro
│   │   │   └── services/
│   │   │       └── [slug].astro
│   │   ├── servicios/
│   │   │   └── [slug].astro
│   │   ├── index.astro
│   │   └── robots.txt.ts
│   │
│   └── styles/
│       └── global.css
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## 🧩 Arquitectura

```text
index.astro (es) / en/index.astro (en)
└── LandingPage locale

servicios/[slug].astro (es) / en/services/[slug].astro (en)
└── ServicePage locale + id   breadcrumb, hero, documentos, Process, CTA WhatsApp

MainLayout (SEO, Open Graph, JSON-LD, hreflang)
├── Header            navegación, menú móvil, scroll spy, LanguageSwitcher y CTA
├── main
│   ├── Hero          LanguagePair, Seal, WhatsAppButton
│   ├── Services      ServiceCard
│   ├── Credentials   CredentialCard
│   ├── Process       StepCard
│   ├── Express       WhatsAppButton (mensaje express)
│   └── Contact       SocialLink, WhatsAppButton
├── Footer
└── FloatingWhatsApp  visible en pantallas medianas y pequeñas
```

`LandingPage.astro` compone la landing completa y recibe el `locale` (`"es"` o `"en"`), que se transmite a todos los componentes. Los componentes usan `"es"` por defecto, por lo que la 404 global sigue en español.

Los datos que no cambian por idioma están en `src/data/`:

- `profile.ts`: marca, nombre del profesional y año de idoneidad.
- `contact.ts`: WhatsApp, email e Instagram. Las URLs de WhatsApp (`wa.me`) se construyen **solo aquí** con `createWhatsAppURL`.
- `services.ts`: orden e iconos de las categorías de servicios, y `serviceIds` (`civil`, `academic`, `technical`): servicios con página propia. "Otros documentos" no tiene página.
- `credentials.ts`: orden de los campos de la credencial.
- `process.ts`: orden de los pasos de "Cómo funciona".
- `navigation.ts`: IDs de sección del menú, comunes a ambos idiomas. El scroll spy del Header deriva las secciones observadas de estos enlaces.

## 🌎 Internacionalización

El sitio usa el i18n nativo de Astro (`astro.config.mjs`), sin librerías externas:

```js
i18n: {
  locales: ["es", "en"],
  defaultLocale: "es",
  routing: { prefixDefaultLocale: false },
},
```

- `src/i18n/config.ts`: tipo `Locale`, idioma por defecto, nombre y `og:locale` de cada idioma, y URLs de inicio por idioma mediante `astro:i18n` (respetan `base` y `trailingSlash`).
- `src/i18n/content.ts`: todos los textos traducibles, incluidos los textos accesibles (`aria-label`, `sr-only`), tipados con `LocaleContent` para que ambos idiomas tengan las mismas claves.
- `LanguageSwitcher.astro`: selector `ES | EN` en el Header (dentro del menú en pantallas de hasta 480 px). El idioma actual lleva `aria-current`; el otro es un enlace con `lang` y `hreflang`. No hay detección ni redirección automática.
- Mensajes de WhatsApp localizados: el texto prellenado de cotización y de servicio express se define por idioma en `content.ts` (`getWhatsAppURLs`); el número es único.
- `src/i18n/services.ts`: contenido de las páginas de servicio por idioma (slug explícito, título, introducción, SEO, documentos y mensaje de WhatsApp contextual) y helpers de URL (`getServiceURL`, `getAbsoluteServiceURL`, `getServiceStaticPaths`).

### Páginas de servicio

- Rutas dinámicas con `getStaticPaths()`: `src/pages/servicios/[slug].astro` y `src/pages/en/services/[slug].astro`. Ambas renderizan `ServicePage.astro`, la plantilla común.
- Los slugs son explícitos por idioma; el ID interno (`civil`, `academic`, `technical`) es común.
- En páginas internas, el `Header` recibe `internalPage`: la navegación enlaza a las secciones del inicio del idioma (`/JMTraducciones/#servicios`, `/JMTraducciones/en/#servicios`) y el scroll spy queda inactivo.
- `LanguageSwitcher` acepta `urls` opcionales: en una página de servicio lleva a la página equivalente del otro idioma; sin `urls`, lleva al inicio de cada idioma.
- `MainLayout` recibe `alternateURLs` (URLs absolutas por idioma) para canonical/hreflang; el `x-default` apunta a la versión española de la misma página.
- El JSON-LD del negocio es el mismo en todas las páginas (mismo `@id`); no se crean entidades por servicio.

Para añadir o cambiar un texto, edítalo en ambos idiomas dentro de `content.ts`.

La identidad visual (verde petróleo, dorado suave como acento y fondos marfil) se define como variables en `src/styles/global.css`. Los títulos usan una pila serif del sistema y el resto de la interfaz una sans-serif del sistema, sin fuentes externas.

## 🛠️ Requisitos

```text
Node.js >= 22.19.0
```

> En Windows con la ejecución de scripts de PowerShell restringida, utiliza `npm.cmd` en lugar de `npm`.

## 💻 Desarrollo

```bash
npm install
npm run dev
```

Astro sirve el sitio en `http://localhost:4321/JMTraducciones/`.

## ✅ Validación

```bash
npm run format        # aplica Prettier
npm run audit         # npm audit --audit-level=high
npm run validate      # Prettier (check) + astro check + astro build
```

## 📦 Build

```bash
npm run build
npm run preview
```

El resultado se genera en `dist/`.

## 🔄 CI/CD

### CI (`.github/workflows/ci.yml`)

Se ejecuta en cada push y pull request a `main`:

1. `npm ci`
2. `npm run audit`
3. `npm run format:check`
4. `npm run check`
5. `npm run build`

### Deploy (`.github/workflows/deploy.yml`)

Se ejecuta solo cuando CI termina correctamente en `main` (o manualmente) y publica en GitHub Pages.

```text
Push a main → CI → CI exitoso → Build → Deploy → GitHub Pages
```

Las Actions están fijadas mediante SHA, usan `persist-credentials: false` y permisos mínimos. Dependabot revisa semanalmente las dependencias de npm y de GitHub Actions.

## 🌍 GitHub Pages

`astro.config.mjs` está configurado para el repositorio `AlsolaLogosLabs/JMTraducciones`:

```js
site: "https://alsolalogoslabs.github.io",
base: "/JMTraducciones",
trailingSlash: "always",
```

Todos los recursos internos se construyen con `import.meta.env.BASE_URL`.

## 🔍 SEO

- Título y descripción específicos del servicio, localizados por idioma.
- URL canónica propia en cada página (inicio y páginas de servicio, por idioma).
- `hreflang` `es`, `en` y `x-default` (versión española equivalente) en el inicio y en cada página de servicio.
- `<html lang>`, `og:locale` (`es_PA` / `en_PA`) y `og:locale:alternate` según el idioma.
- Favicon SVG + ICO y `apple-touch-icon.png` (180 × 180) con la marca JM.
- Open Graph y Twitter Card con imagen social por idioma (1200 × 630, mismo diseño): `public/og-image-es.png` y `public/og-image-en.png`. `MainLayout` elige la imagen según el `locale` (`ogImage` en `src/i18n/config.ts`) y el texto alternativo sale de `content.ts`.
- Datos estructurados JSON-LD de tipo `ProfessionalService`, localizados por idioma.
- Sitemap generado por `@astrojs/sitemap` con el inicio y las páginas de servicio en ambos idiomas.
- Página 404 con `noindex`, sin canonical ni hreflang.
- `robots.txt` generado en `src/pages/robots.txt.ts`.

## ♿ Accesibilidad

- HTML semántico con secciones etiquetadas por sus títulos.
- Skip link hacia el contenido principal.
- Navegación por teclado y estados `focus-visible` con contraste en fondos claros y oscuros.
- Menú móvil basado en `<details>`, cerrable con Escape o pulsando fuera.
- `aria-current` en el enlace de la sección activa.
- Enlaces que abren pestaña nueva anunciados a lectores de pantalla.
- Controles táctiles de al menos 44 px.
- Diseño adaptable desde 320 px.
- Respeto por `prefers-reduced-motion`.

---

Desarrollado con [Astro](https://astro.build/).
