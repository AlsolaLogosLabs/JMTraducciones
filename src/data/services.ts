import type { IconName } from "../components/ui/icon-names";

export type ServiceCategoryId = "civil" | "academic" | "technical" | "other";

export interface ServiceCategory {
  id: ServiceCategoryId;
  icon: IconName;
}

// Orden e iconos de las categorías. Sus textos están en src/i18n/content.ts.
export const serviceCategories: ServiceCategory[] = [
  { id: "civil", icon: "civil" },
  { id: "academic", icon: "academic" },
  { id: "technical", icon: "technical" },
  { id: "other", icon: "other" },
];

// Servicios con página propia. "other" se consulta por WhatsApp y no tiene página.
export const serviceIds = ["civil", "academic", "technical"] as const;

export type ServiceId = (typeof serviceIds)[number];

export const isServiceId = (id: string): id is ServiceId =>
  (serviceIds as readonly string[]).includes(id);
