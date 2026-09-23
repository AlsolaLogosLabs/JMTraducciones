export interface ProcessStep {
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: "Envía tu documento",

    description: "Comparte por WhatsApp o correo electrónico el documento que necesitas traducir.",
  },

  {
    title: "Recibe una cotización",

    description: "Se revisan el tipo y la extensión del documento para enviarte una cotización.",
  },

  {
    title: "Confirma el servicio",

    description: "Confirma la cotización para dar inicio a la traducción.",
  },

  {
    title: "Recibe tu traducción",

    description: "Recibe tu traducción certificada una vez finalizada.",
  },
];
