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

const u = (id: string, crop = "entropy") =>
  `https://images.unsplash.com/${id}?w=1000&h=1000&fit=crop&crop=${crop}&q=80&auto=format`;

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
    images: [
      u("photo-1573408301185-9519f94816b4"),
      u("photo-1515562141207-7a88fb7ce338"),
      u("photo-1573408301185-9519f94816b4", "top"),
    ],
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
    images: [
      u("photo-1599643477877-530eb83abc8e"),
      u("photo-1573408301185-9519f94816b4", "bottom"),
      u("photo-1515562141207-7a88fb7ce338", "center"),
    ],
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
    images: [
      u("photo-1617038260897-41a1f14a8ca0"),
      u("photo-1515562141207-7a88fb7ce338", "top"),
      u("photo-1573408301185-9519f94816b4", "center"),
    ],
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
    images: [
      u("photo-1611591437281-460bfbe1220a"),
      u("photo-1605100804763-247f67b3557e"),
      u("photo-1611591437281-460bfbe1220a", "top"),
    ],
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
    images: [
      u("photo-1605100804763-247f67b3557e"),
      u("photo-1596944924616-7b38e7cfac36"),
      u("photo-1605100804763-247f67b3557e", "bottom"),
    ],
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
    images: [
      u("photo-1596944924616-7b38e7cfac36"),
      u("photo-1611591437281-460bfbe1220a", "bottom"),
      u("photo-1605100804763-247f67b3557e", "top"),
    ],
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
    images: [
      u("photo-1602173574767-37ac01994b2a"),
      u("photo-1599643478518-a784e5dc4c8f"),
      u("photo-1602173574767-37ac01994b2a", "top"),
    ],
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
    images: [
      u("photo-1599643478518-a784e5dc4c8f"),
      u("photo-1602173574767-37ac01994b2a", "bottom"),
      u("photo-1599643478518-a784e5dc4c8f", "top"),
    ],
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
    images: [
      u("photo-1630019852942-f89202989a59"),
      u("photo-1589128777073-263566ae5e4d"),
      u("photo-1630019852942-f89202989a59", "top"),
    ],
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
    images: [
      u("photo-1589128777073-263566ae5e4d"),
      u("photo-1630019852942-f89202989a59", "bottom"),
      u("photo-1589128777073-263566ae5e4d", "top"),
    ],
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
