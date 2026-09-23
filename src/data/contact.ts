const whatsappNumber = "50766496982";

// Único punto donde se construyen enlaces wa.me. El mensaje prellenado depende del idioma.
export const createWhatsAppURL = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const contact = {
  whatsapp: {
    label: "WhatsApp",

    display: "+507 6649-6982",

    // Formato E.164 utilizado en datos estructurados.
    phone: `+${whatsappNumber}`,
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
