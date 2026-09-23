import { profile } from "./profile";

export interface CredentialItem {
  label: string;
  value: string;
}

// Responde en orden: quién, para qué idiomas, desde cuándo y quién lo reconoce.
export const credentials: CredentialItem[] = [
  {
    label: "Profesional",

    value: profile.name,
  },

  {
    label: "Idiomas",

    value: `${profile.languages.source} ↔ ${profile.languages.target}`,
  },

  {
    label: "Idoneidad",

    value: `Desde ${profile.authorizedSince}`,
  },

  {
    label: "Reconocimiento",

    value: profile.authority,
  },
];

export const credentialsDisclaimer = `${profile.brand} es un servicio profesional privado. No representa al ${profile.authority} ni a ninguna otra entidad gubernamental.`;
