import { profile } from "./profile";

export interface CredentialItem {
  label: string;
  value: string;
}

export const credentials: CredentialItem[] = [
  {
    label: "Condición",

    value: profile.role,
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

    value: `Emitido por el ${profile.authority}`,
  },
];

export const credentialsDisclaimer = `${profile.brand} es un servicio profesional privado. No representa al ${profile.authority} ni a ninguna otra entidad gubernamental.`;
