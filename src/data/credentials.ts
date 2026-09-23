// Responde en orden: quién, para qué idiomas, desde cuándo y quién lo reconoce.
// Etiquetas y valores localizados en src/i18n/content.ts.
export const credentialFields = [
  "professional",
  "languages",
  "authorization",
  "recognition",
] as const;

export type CredentialField = (typeof credentialFields)[number];
