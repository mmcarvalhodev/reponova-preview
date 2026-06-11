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
      u("photo-1605884878538-6468614df578"),
      u("photo-1583937443566-6fe1a1c6e400"),
      u("photo-1550368566-f9cc32d7392d"),
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
      u("photo-1511253819057-5408d4d70465"),
      u("photo-1585053736987-f817dc225fc5"),
      u("photo-1535632787350-4e68ef0ac584"),
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
      u("photo-1612239396116-4da3087f8f79"),
      u("photo-1588444968576-f8fe92ce56fd"),
      u("photo-1591209608777-fb022eac7112"),
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
      u("photo-1589674781759-c21c37956a44"),
      u("photo-1601244732063-bcaac519db4f"),
      u("photo-1565206077209-0e7e57b6c152"),
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
      u("photo-1590703160323-ac5d3fc14089"),
      u("photo-1656010280162-772358d9f4ed"),
      u("photo-1678834778658-9862d9987dd3"),
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
      u("photo-1593295583578-fda964d48b72"),
      u("photo-1561995734-ef4b62bb6586"),
      u("photo-1679156271420-e6c596e9c10a"),
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
      u("photo-1676329945867-01c9975aa9d1"),
      u("photo-1636103952204-0b738c225264"),
      u("photo-1623449634301-5ef15c0ad98e"),
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
      u("photo-1601544737793-0d21af535968"),
      u("photo-1611012844392-f4f96c7fd052"),
      u("photo-1676329947145-99145926d3eb"),
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
      u("photo-1535632787350-4e68ef0ac584"),
      u("photo-1693212793204-bcea856c75fe"),
      u("photo-1716461534906-d31a17008801"),
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
      u("photo-1684616289742-2e48aff416bf"),
      u("photo-1665159882377-385d68d2bdff"),
      u("photo-1680181724947-75f0956f1469"),
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
