// Orden de los pasos de "Cómo funciona". Sus textos están en src/i18n/content.ts.
export const processSteps = ["send", "quote", "confirm", "deliver"] as const;

export type ProcessStepId = (typeof processSteps)[number];
