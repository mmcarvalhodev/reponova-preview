import type { CategorySlug } from "./site";

export type Product = {
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  shortDescription: string;
  description: string;
  details: string[];
  images: string[];
  featured?: boolean;
  badge?: string;
};

/**
 * Placeholders gerados via placehold.co (paleta dark + champagne).
 * Substituir pelas fotos reais antes de publicar — basta trocar os URLs em "images".
 */
const ph = (label: string) =>
  `https://placehold.co/1000x1000/1c1c22/d4b88a/png?font=playfair&text=${encodeURIComponent(label)}`;

export const products: Product[] = [
  // ── Pingentes ─────────────────────────────────────────────────────────
  {
    slug: "pingente-coracao-vazado",
    name: "Pingente Coração Vazado",
    category: "pingentes",
    price: 129.0,
    shortDescription: "Coração delicado em prata 925 com acabamento polido.",
    description:
      "Pingente em formato de coração vazado, modelado à mão em prata 925. Combina com correntes finas e veneziana. Excelente opção para presentear em datas marcantes.",
    details: [
      "Material: prata 925",
      "Altura aprox.: 1,2 cm",
      "Argola embutida",
      "Acompanha embalagem para presente",
    ],
    images: [ph("Pingente\\nCoracao"), ph("Detalhe\\nCoracao"), ph("Verso\\nPolido")],
    featured: true,
    badge: "Mais vendido",
  },
  {
    slug: "pingente-cruz-classica",
    name: "Pingente Cruz Clássica",
    category: "pingentes",
    price: 159.0,
    shortDescription: "Cruz lisa com bordas levemente arredondadas.",
    description:
      "Cruz clássica em prata 925, com bordas suavemente arredondadas e brilho uniforme. Peça atemporal — funciona tanto no uso religioso quanto como acessório de estilo.",
    details: [
      "Material: prata 925",
      "Altura aprox.: 2,0 cm",
      "Acabamento polido espelhado",
      "Argola reforçada",
    ],
    images: [ph("Pingente\\nCruz"), ph("Cruz\\nPerfil"), ph("Detalhe\\nArgola")],
  },
  {
    slug: "pingente-estrela-7-pontas",
    name: "Pingente Estrela 7 Pontas",
    category: "pingentes",
    price: 189.0,
    shortDescription: "Estrela de 7 pontas com microzircônia central.",
    description:
      "Pingente de estrela trabalhado com cuidado nas 7 pontas. Pedra zircônia incolor cravada no centro dá brilho extra à peça. Ideal para correntes mais delicadas.",
    details: [
      "Material: prata 925 + zircônia",
      "Diâmetro: 1,8 cm",
      "Cravação garra dupla",
      "Verifique a corrente compatível na descrição",
    ],
    images: [ph("Estrela\\n7 Pontas"), ph("Cravacao\\nDetalhe"), ph("Verso")],
    badge: "Novo",
  },

  // ── Anéis ─────────────────────────────────────────────────────────────
  {
    slug: "anel-solitario-zirconia",
    name: "Anel Solitário Zircônia",
    category: "aneis",
    price: 249.0,
    shortDescription: "Solitário com zircônia incolor 5 mm e aro fino.",
    description:
      "Solitário clássico em prata 925 com zircônia incolor de 5 mm, lapidação brilhante. Aro fino confortável pro uso diário. Disponível sob encomenda nos aros 14 ao 22.",
    details: [
      "Material: prata 925 + zircônia",
      "Pedra: 5 mm, lapidação brilhante",
      "Aros: 14 a 22 (consultar)",
      "Espessura do aro: 1,8 mm",
    ],
    images: [ph("Anel\\nSolitario"), ph("Pedra\\n5 mm"), ph("Vista\\nLateral")],
    featured: true,
  },
  {
    slug: "anel-trancado-prata",
    name: "Anel Trançado",
    category: "aneis",
    price: 169.0,
    shortDescription: "Três fios de prata trançados à mão.",
    description:
      "Anel formado por três fios de prata 925 trançados à mão. Peça artesanal sem solda aparente — cada exemplar tem pequenas variações que tornam a peça única.",
    details: [
      "Material: prata 925",
      "Trabalho 100% artesanal",
      "Espessura aprox.: 3 mm",
      "Disponível nos aros 14 a 24",
    ],
    images: [ph("Anel\\nTrancado"), ph("Trança\\nMacro"), ph("No Dedo")],
  },
  {
    slug: "anel-meia-alianca-cravejado",
    name: "Meia Aliança Cravejada",
    category: "aneis",
    price: 319.0,
    shortDescription: "Sete zircônias cravadas em meia volta do aro.",
    description:
      "Meia aliança em prata 925 com sete zircônias cravadas em sequência uniforme. Brilho marcante mas discreto. Perfeito como anel de presente ou comemorativo.",
    details: [
      "Material: prata 925 + zircônia",
      "7 pedras de 2,5 mm",
      "Cravação tipo trilho",
      "Aros: 14 a 22",
    ],
    images: [ph("Meia\\nAlianca"), ph("Cravacao\\nLinha"), ph("Brilho")],
    badge: "Edição limitada",
  },

  // ── Correntes ─────────────────────────────────────────────────────────
  {
    slug: "corrente-veneziana-45cm",
    name: "Corrente Veneziana 45 cm",
    category: "correntes",
    price: 219.0,
    shortDescription: "Corrente veneziana fina 45 cm com fecho gaveta.",
    description:
      "Corrente veneziana em prata 925 com 45 cm de comprimento e fecho gaveta. Elo fino e regular, ideal pra usar com pingentes pequenos e médios sem peso excessivo no pescoço.",
    details: [
      "Material: prata 925",
      "Comprimento: 45 cm",
      "Elo veneziana 1,2 mm",
      "Fecho gaveta com trava de segurança",
    ],
    images: [ph("Corrente\\nVeneziana"), ph("Elo\\n1.2 mm"), ph("Fecho\\nGaveta")],
    featured: true,
  },
  {
    slug: "corrente-cubana-60cm",
    name: "Corrente Cubana 60 cm",
    category: "correntes",
    price: 389.0,
    shortDescription: "Cubana achatada 60 cm, elo médio polido.",
    description:
      "Corrente cubana clássica em prata 925, achatada e polida. Comprimento de 60 cm com elo médio — proposta moderna sem perder elegância. Acompanha estojo.",
    details: [
      "Material: prata 925",
      "Comprimento: 60 cm",
      "Largura: 4 mm",
      "Fecho mosquetão reforçado",
    ],
    images: [ph("Cubana\\n60 cm"), ph("Elo\\nAchatado"), ph("Fecho")],
    badge: "Top",
  },

  // ── Brincos ───────────────────────────────────────────────────────────
  {
    slug: "brinco-argola-fina",
    name: "Brinco Argola Fina",
    category: "brincos",
    price: 139.0,
    shortDescription: "Argola lisa 18 mm em prata 925.",
    description:
      "Par de argolas lisas em prata 925 com 18 mm de diâmetro. Discreto e versátil, transita bem do trabalho à noite. Fecho click confortável.",
    details: [
      "Material: prata 925",
      "Diâmetro: 18 mm",
      "Espessura: 1,5 mm",
      "Fecho click",
    ],
    images: [ph("Argola\\nFina"), ph("Diametro\\n18 mm"), ph("Fecho\\nClick")],
  },
  {
    slug: "brinco-ponto-de-luz",
    name: "Brinco Ponto de Luz",
    category: "brincos",
    price: 119.0,
    shortDescription: "Par de zircônia 4 mm cravada em garra.",
    description:
      "Clássico ponto de luz em prata 925 com zircônia incolor de 4 mm cravada em quatro garras. Fica bonito sozinho ou em second hole. Tarraxa borboleta.",
    details: [
      "Material: prata 925 + zircônia",
      "Pedra: 4 mm",
      "Cravação 4 garras",
      "Tarraxa borboleta",
    ],
    images: [ph("Ponto\\nde Luz"), ph("Pedra\\n4 mm"), ph("Tarraxa")],
    featured: true,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function productsByCategory(slug: CategorySlug): Product[] {
  return products.filter((p) => p.category === slug);
}

export function featuredProducts(limit = 4): Product[] {
  return products.filter((p) => p.featured).slice(0, limit);
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
