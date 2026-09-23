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
