// Datos de contacto que usa todo el sitio. Cambiá acá y se actualiza en todas las páginas.
export const SITE = {
  name: "Joaquín Caldera",
  tagline: "Sitios web para comercios de Toay y Santa Rosa",
  city: "Toay, La Pampa",
  // Número en formato internacional sin "+" ni espacios: 54 9 + característica + número.
  // TODO: reemplazar por el número real de Joaquín.
  whatsapp: "5492954000000",
  instagram: "",
  email: "",
};

export function waLink(text: string, phone: string = SITE.whatsapp) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
