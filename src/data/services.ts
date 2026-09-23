import type { IconName } from "../components/ui/icon-names";

export interface ServiceCategory {
  title: string;
  description: string;
  icon: IconName;
  items: string[];
}

export const servicesSummary =
  "Traducción certificada de documentos personales, académicos, técnicos y otros documentos previa consulta.";

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Documentos civiles",

    description: "Certificados y documentos emitidos por el Registro Civil.",

    icon: "civil",

    items: [
      "Certificados de nacimiento",
      "Certificados de matrimonio",
      "Certificados de defunción",
      "Otros documentos del Registro Civil",
    ],
  },

  {
    title: "Documentos académicos",

    description: "Documentación de estudios para trámites académicos o profesionales.",

    icon: "academic",

    items: ["Créditos académicos", "Diplomas", "Otros documentos académicos"],
  },

  {
    title: "Documentación técnica",

    description: "Documentos con terminología técnica o especializada.",

    icon: "technical",

    items: ["Manuales", "Fichas técnicas", "Documentación especializada"],
  },

  {
    title: "Otros documentos",

    description:
      "Si tu documento no aparece en esta lista, envíalo por WhatsApp para revisarlo antes de cotizar.",

    icon: "other",

    items: ["Otros documentos previa consulta"],
  },
];
