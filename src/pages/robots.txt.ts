import type { APIRoute } from "astro";

// Genera el contenido del archivo robots.txt.
const getRobotsTxt = (sitemapURL: URL) => `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

// Devuelve robots.txt utilizando la URL pública configurada en Astro.
export const GET: APIRoute = ({ site }) => {
  if (!site) {
    return new Response(
      `User-agent: *
Allow: /
`,
      {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
        },
      },
    );
  }

  const sitemapURL = new URL(`${import.meta.env.BASE_URL}sitemap-index.xml`, site);

  return new Response(getRobotsTxt(sitemapURL), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
