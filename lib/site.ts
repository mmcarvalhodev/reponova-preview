export const site = {
  name: "Tutupratas",
  tagline: "Joias e prata 925 com alma artesanal",
  description:
    "Coleção autoral de joias em prata esterlina. Peças feitas à mão, polidas e pensadas pra durar.",
  whatsappNumber: "5511999999999",
  whatsappLabel: "(11) 99999-9999",
  email: "contato@tutupratas.com.br",
  instagram: "@tutupratas",
  city: "São Paulo, SP",
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const CATEGORIES = [
  { slug: "pingentes",  label: "Pingentes" },
  { slug: "aneis",      label: "Anéis"     },
  { slug: "correntes",  label: "Correntes" },
  { slug: "brincos",    label: "Brincos"   },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];
