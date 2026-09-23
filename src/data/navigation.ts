// El orden define la navegación y el scroll spy del Header.
// Los IDs de sección son comunes a todos los idiomas; las etiquetas están en src/i18n/content.ts.
export const navigationSections = [
  "inicio",
  "servicios",
  "credenciales",
  "como-funciona",
  "express",
  "contacto",
] as const;

export type NavigationSection = (typeof navigationSections)[number];
