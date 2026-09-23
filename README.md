# JM Traducciones

[![CI](https://github.com/AlsolaLogosLabs/JMTraducciones/actions/workflows/ci.yml/badge.svg)](https://github.com/AlsolaLogosLabs/JMTraducciones/actions/workflows/ci.yml)
[![Deploy to GitHub Pages](https://github.com/AlsolaLogosLabs/JMTraducciones/actions/workflows/deploy.yml/badge.svg)](https://github.com/AlsolaLogosLabs/JMTraducciones/actions/workflows/deploy.yml)

Sitio web profesional de **JM Traducciones**, servicio de traducciones certificadas inglés ↔ español en Panamá a cargo de Juan Alberto Martínez de Gracia, Traductor Público Autorizado con idoneidad desde 2018.

El objetivo del sitio es explicar los servicios disponibles, transmitir confianza, mostrar la condición de Traductor Público Autorizado y facilitar que cada visitante solicite una cotización, principalmente por WhatsApp.

## 🌐 Sitio publicado

https://alsolalogoslabs.github.io/JMTraducciones/

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
│   └── og-image.png
│
├── src/
│   ├── components/
│   │   ├── Contact.astro
│   │   ├── Credentials.astro
│   │   ├── Express.astro
│   │   ├── FloatingWhatsApp.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Process.astro
│   │   ├── Services.astro
│   │   │
│   │   └── ui/
│   │       ├── CredentialCard.astro
│   │       ├── Icon.astro
│   │       ├── icon-names.ts
│   │       ├── LanguagePair.astro
│   │       ├── Seal.astro
│   │       ├── SectionHeader.astro
│   │       ├── ServiceCard.astro
│   │       ├── SocialLink.astro
│   │       ├── StepCard.astro
│   │       └── WhatsAppButton.astro
│   │
│   ├── data/
│   │   ├── contact.ts
│   │   ├── credentials.ts
│   │   ├── navigation.ts
│   │   ├── process.ts
│   │   ├── profile.ts
│   │   └── services.ts
│   │
│   ├── layouts/
│   │   └── MainLayout.astro
│   │
│   ├── pages/
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
MainLayout (SEO, Open Graph, JSON-LD)
├── Header            navegación, menú móvil, scroll spy y CTA
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

El contenido está separado de la interfaz en `src/data/`:

- `profile.ts`: marca, profesional, condición, idiomas, ubicación, año de idoneidad y textos SEO.
- `contact.ts`: WhatsApp, email e Instagram. Las URLs de WhatsApp (`wa.me`) y sus mensajes iniciales se generan **solo aquí**.
- `services.ts`: categorías de servicios y sus documentos.
- `credentials.ts`: datos de la credencial y aviso de servicio privado.
- `process.ts`: pasos de "Cómo funciona".
- `navigation.ts`: elementos del menú. El scroll spy del Header deriva las secciones observadas de estos enlaces.

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

- Título y descripción específicos del servicio.
- URL canónica.
- Favicon SVG + ICO y `apple-touch-icon.png` (180 × 180) con la marca JM.
- Open Graph y Twitter Card con imagen social propia (`og-image.png`, 1200 × 630).
- Datos estructurados JSON-LD de tipo `ProfessionalService`.
- Sitemap generado por `@astrojs/sitemap`.
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
