export interface NavigationItem {
  label: string;
  section: string;
}

// El orden define la navegación y el scroll spy del Header.
export const navigationItems: NavigationItem[] = [
  {
    label: "Inicio",
    section: "inicio",
  },
  {
    label: "Servicios",
    section: "servicios",
  },
  {
    label: "Credenciales",
    section: "credenciales",
  },
  {
    label: "Cómo funciona",
    section: "como-funciona",
  },
  {
    label: "Express",
    section: "express",
  },
  {
    label: "Contacto",
    section: "contacto",
  },
];
