const whatsappNumber = "50766496982";

// Genera un enlace wa.me con un mensaje inicial prellenado.
const createWhatsAppURL = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const contact = {
  whatsapp: {
    label: "WhatsApp",

    display: "+507 6649-6982",

    // Formato E.164 utilizado en datos estructurados.
    phone: `+${whatsappNumber}`,

    quoteURL: createWhatsAppURL("Hola, quisiera solicitar una cotización para una traducción."),

    expressURL: createWhatsAppURL(
      "Hola, quisiera consultar la disponibilidad del servicio express de traducción.",
    ),
  },

  email: {
    label: "Email",

    address: "jualmartinezdeg@gmail.com",

    url: "mailto:jualmartinezdeg@gmail.com",
  },

  instagram: {
    label: "Instagram",

    handle: "@jmtraducciones",

    url: "https://www.instagram.com/jmtraducciones",
  },
} as const;
