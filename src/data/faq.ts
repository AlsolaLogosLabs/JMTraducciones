// Orden de las preguntas frecuentes. Sus textos están en src/i18n/content.ts.
export const faqItems = [
  "documents",
  "quote",
  "requirements",
  "express",
  "languages",
  "otherDocuments",
  "governmentAffiliation",
] as const;

export type FAQItemId = (typeof faqItems)[number];
