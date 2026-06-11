export type Review = {
  id: string;
  productSlug: string;
  customerName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  date: string; // ISO yyyy-mm-dd
  verified?: boolean;
};

export const reviews: Review[] = [
  // ── Pingente Coração Vazado ───────────────────────────────────────────
  { id: "r01", productSlug: "pingente-coracao-vazado", customerName: "Mariana A.", rating: 5,
    comment: "Veio numa embalagem linda, presenteei minha mãe. A prata é polida e brilha de verdade. Recomendo demais.",
    date: "2026-05-22", verified: true },
  { id: "r02", productSlug: "pingente-coracao-vazado", customerName: "Júlia S.", rating: 5,
    comment: "Uso todos os dias há 3 meses, inclusive no banho, e continua impecável.",
    date: "2026-05-10", verified: true },
  { id: "r03", productSlug: "pingente-coracao-vazado", customerName: "Patrícia R.", rating: 4,
    comment: "Lindo, só achei que ficaria um pouco maior. Mas é exatamente como descrito.",
    date: "2026-04-28", verified: true },
  { id: "r04", productSlug: "pingente-coracao-vazado", customerName: "Camila L.", rating: 5,
    comment: "Entrega rápida e atendimento atencioso no WhatsApp.",
    date: "2026-04-15" },

  // ── Pingente Cruz Clássica ────────────────────────────────────────────
  { id: "r05", productSlug: "pingente-cruz-classica", customerName: "Ricardo M.", rating: 5,
    comment: "Comprei pra minha esposa, ficou emocionada. Acabamento impecável.",
    date: "2026-05-18", verified: true },
  { id: "r06", productSlug: "pingente-cruz-classica", customerName: "Tatiana N.", rating: 4,
    comment: "Bonita e bem feita. Argola um pouco apertada para correntes mais grossas.",
    date: "2026-05-02", verified: true },
  { id: "r07", productSlug: "pingente-cruz-classica", customerName: "Felipe C.", rating: 5,
    comment: "Peça delicada e elegante. Vale o preço.",
    date: "2026-04-12" },

  // ── Pingente Estrela 7 Pontas ─────────────────────────────────────────
  { id: "r08", productSlug: "pingente-estrela-7-pontas", customerName: "Beatriz O.", rating: 5,
    comment: "A pedrinha no centro dá um charme enorme. Cumprimentos pela qualidade!",
    date: "2026-05-25", verified: true },
  { id: "r09", productSlug: "pingente-estrela-7-pontas", customerName: "Larissa P.", rating: 5,
    comment: "Recebi rapidinho e a embalagem é caprichada. Brilho lindo.",
    date: "2026-05-08", verified: true },
  { id: "r10", productSlug: "pingente-estrela-7-pontas", customerName: "Vanessa K.", rating: 4,
    comment: "Linda peça, só achei a corrente sugerida muito fina pro meu gosto. Mas é avisado na descrição.",
    date: "2026-04-30" },

  // ── Anel Solitário Zircônia ───────────────────────────────────────────
  { id: "r11", productSlug: "anel-solitario-zirconia", customerName: "Fernanda T.", rating: 5,
    comment: "Comprei pra noivado simbólico, ficou perfeito! Parece muito mais caro do que custou.",
    date: "2026-05-30", verified: true },
  { id: "r12", productSlug: "anel-solitario-zirconia", customerName: "André B.", rating: 5,
    comment: "Atendimento personalizado, ajudaram a escolher o aro certo. Recomendo.",
    date: "2026-05-19", verified: true },
  { id: "r13", productSlug: "anel-solitario-zirconia", customerName: "Helena F.", rating: 4,
    comment: "Lindo demais. Achei o aro um pouquinho menor que outras marcas, vale conferir antes.",
    date: "2026-05-04", verified: true },
  { id: "r14", productSlug: "anel-solitario-zirconia", customerName: "Sofia D.", rating: 5,
    comment: "Brilha como diamante. Uso há 2 meses sem nenhum sinal de oxidação.",
    date: "2026-04-20" },

  // ── Anel Trançado ─────────────────────────────────────────────────────
  { id: "r15", productSlug: "anel-trancado-prata", customerName: "Renata V.", rating: 5,
    comment: "Adorei a textura, parece bem artesanal. Combina com tudo.",
    date: "2026-05-21", verified: true },
  { id: "r16", productSlug: "anel-trancado-prata", customerName: "Marcos J.", rating: 4,
    comment: "Bem feito mas demora um pouco a chegar (é sob encomenda, foi avisado).",
    date: "2026-05-05" },
  { id: "r17", productSlug: "anel-trancado-prata", customerName: "Aline G.", rating: 5,
    comment: "A trança é perfeita, sem nenhum defeito. Ganhei vários elogios.",
    date: "2026-04-18", verified: true },

  // ── Meia Aliança Cravejada ────────────────────────────────────────────
  { id: "r18", productSlug: "anel-meia-alianca-cravejado", customerName: "Bruna E.", rating: 5,
    comment: "Comprei pra mim de presente e amei! Brilha demais.",
    date: "2026-05-27", verified: true },
  { id: "r19", productSlug: "anel-meia-alianca-cravejado", customerName: "Letícia M.", rating: 5,
    comment: "Encaixe das pedras impecável. Uma jóia.",
    date: "2026-05-14", verified: true },
  { id: "r20", productSlug: "anel-meia-alianca-cravejado", customerName: "Daniela A.", rating: 4,
    comment: "Lindo, só atenção pra escolher o aro certo — fica um pouco apertado nas falanges.",
    date: "2026-04-26" },

  // ── Corrente Veneziana 45 cm ──────────────────────────────────────────
  { id: "r21", productSlug: "corrente-veneziana-45cm", customerName: "Isabela R.", rating: 5,
    comment: "Acabamento maravilhoso, super leve, ideal pro dia a dia.",
    date: "2026-05-29", verified: true },
  { id: "r22", productSlug: "corrente-veneziana-45cm", customerName: "Lucas P.", rating: 5,
    comment: "Comprei pra usar com um pingente pequeno, casou perfeitamente.",
    date: "2026-05-12", verified: true },
  { id: "r23", productSlug: "corrente-veneziana-45cm", customerName: "Gabriela H.", rating: 4,
    comment: "Linda, mas pra quem usa pingentes pesados, melhor uma cordão mais grosso.",
    date: "2026-04-22" },

  // ── Corrente Cubana 60 cm ─────────────────────────────────────────────
  { id: "r24", productSlug: "corrente-cubana-60cm", customerName: "Rafael S.", rating: 5,
    comment: "Peso e brilho de uma corrente de verdade. Atendimento ótimo, tirei várias dúvidas no WhatsApp.",
    date: "2026-05-26", verified: true },
  { id: "r25", productSlug: "corrente-cubana-60cm", customerName: "Thiago L.", rating: 5,
    comment: "Vale cada centavo. Achei até melhor do que esperava.",
    date: "2026-05-13", verified: true },
  { id: "r26", productSlug: "corrente-cubana-60cm", customerName: "Diego A.", rating: 4,
    comment: "Muito boa, só achei o fecho meio difícil de operar sozinho.",
    date: "2026-04-29" },

  // ── Brinco Argola Fina ────────────────────────────────────────────────
  { id: "r27", productSlug: "brinco-argola-fina", customerName: "Carolina F.", rating: 5,
    comment: "Tamanho perfeito, nem grande nem pequeno. Uso direto.",
    date: "2026-05-24", verified: true },
  { id: "r28", productSlug: "brinco-argola-fina", customerName: "Natália Q.", rating: 5,
    comment: "Acabamento bonito e fecho seguro. Recomendo.",
    date: "2026-05-09" },
  { id: "r29", productSlug: "brinco-argola-fina", customerName: "Priscila B.", rating: 4,
    comment: "Linda e leve. Esperava algo um pouco mais espesso.",
    date: "2026-04-17", verified: true },

  // ── Brinco Ponto de Luz ───────────────────────────────────────────────
  { id: "r30", productSlug: "brinco-ponto-de-luz", customerName: "Vivian C.", rating: 5,
    comment: "Brilho discreto e elegante, ideal pro dia a dia.",
    date: "2026-05-31", verified: true },
  { id: "r31", productSlug: "brinco-ponto-de-luz", customerName: "Manuela X.", rating: 5,
    comment: "Comprei dois pares pra usar em second hole, ficou lindo.",
    date: "2026-05-16", verified: true },
  { id: "r32", productSlug: "brinco-ponto-de-luz", customerName: "Eduarda T.", rating: 4,
    comment: "Bonito e bem feito. Tarraxa borboleta caiu uma vez, recomendo trocar pelas de pressão.",
    date: "2026-04-25" },
];

export function reviewsForProduct(slug: string): Review[] {
  return reviews
    .filter((r) => r.productSlug === slug)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function averageRating(slug: string): number {
  const rs = reviews.filter((r) => r.productSlug === slug);
  if (!rs.length) return 0;
  const sum = rs.reduce((s, r) => s + r.rating, 0);
  return sum / rs.length;
}

export function reviewCount(slug: string): number {
  return reviews.filter((r) => r.productSlug === slug).length;
}
