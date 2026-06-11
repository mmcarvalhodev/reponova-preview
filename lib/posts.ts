export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readingMinutes: number;
  coverImage: string;
  category: string;
};

const u = (id: string) =>
  `https://images.unsplash.com/${id}?w=1200&h=700&fit=crop&crop=entropy&q=80&auto=format`;

export const posts: Post[] = [
  {
    slug: "brincos-de-prata-para-cada-ocasiao",
    title: "Brincos de prata: a joia certa para cada ocasião",
    excerpt:
      "Do escritório à festa, saiba como escolher o par de brincos em prata 925 que vai completar o seu look com elegância e sem exageros.",
    date: "2026-06-05",
    readingMinutes: 4,
    coverImage: u("photo-1630019852942-f89202989a59"),
    category: "Estilo",
    content: `
Os brincos são a joia mais democrática que existe. Um par certo eleva qualquer look — e um par errado pode quebrar uma produção inteira. A boa notícia é que a prata 925 é incrivelmente versátil: o tom frio e o brilho limpo funcionam tanto com roupas formais quanto com looks casuais do dia a dia.

## Para o trabalho: discrição com personalidade

No ambiente profissional, a regra de ouro é não competir com a roupa. **Pontos de luz** e **argolas finas até 20 mm** são escolhas seguras — ficam elegantes em videoconferências e reuniões sem distrair. Evite peças que balancem ao caminhar ou que façam barulho.

Dica de combinação: argola fina + blazer estruturado = look de executiva completo sem precisar de mais nenhum acessório.

## Para encontros e jantares: um toque especial

Nesse contexto, você pode ousar um pouco mais. **Argolas médias**, **brincos de gota** e **modelos com zircônia** são ótimas pedidas. A pedra cravada capta a luz das velas e dos ambientes mais intimistas de uma forma que o ouro simplesmente não consegue imitar.

## Para festas e baladas: sem medo de aparecer

É aqui que os brincos podem ser protagonistas. Modelos longos, com movimento, ou peças que combinam prata com pedras coloridas fazem toda a diferença. Lembre-se: se os brincos já são grandes, dispense o colar — a regra é equilibrar, não acumular.

## Para o dia a dia: conforto acima de tudo

Para quem usa brincos 24h, os **pontos de luz** e as **argolas finas com fecho click** ganham de longe. São leves, não machucam com o tempo, e resistem bem ao uso contínuo — principalmente em prata 925 bem acabada, que não oxida com facilidade.

## Cuidados para manter o brilho

Prata escurece com o tempo em contato com o suor, perfumes e cremes. Para manter o brilho: retire antes de dormir, armazene em local seco e limpe com flanela macia. Um cuidado simples que prolonga a vida útil da peça por anos.
    `.trim(),
  },
  {
    slug: "anel-de-prata-para-cada-momento",
    title: "Anel de prata: como escolher o modelo ideal para cada momento",
    excerpt:
      "Solitário, trançado, meia aliança — cada modelo de anel conta uma história diferente. Descubra qual combina mais com você e com a ocasião.",
    date: "2026-05-28",
    readingMinutes: 5,
    coverImage: u("photo-1611591437281-460bfbe1220a"),
    category: "Guia",
    content: `
O anel é uma das joias com mais carga simbólica. Ao mesmo tempo, é um acessório extremamente funcional — está presente no nosso campo visual o tempo todo, já que olhamos para as mãos dezenas de vezes por dia. Escolher bem o modelo faz diferença tanto no simbolismo quanto no estilo.

## Solitário: clássico por uma razão

O anel solitário — uma pedra em evidência, aro fino — é o modelo mais versátil da joalheria. Funciona como anel de noivado simbólico, mas também como peça de uso diário para quem gosta de ter algo especial nos dedos sem exagerar.

Com **zircônia incolor em prata 925**, o resultado se aproxima muito de um diamante em ouro branco — a uma fração do preço. Para quem busca impacto visual com elegância, é a escolha mais certeira.

## Trançado: artesanal e autoral

O anel trançado à mão carrega uma narrativa que os modelos industriais não conseguem reproduzir: cada peça tem pequenas variações que a tornam única. É um anel de autoexpressão, perfeito pra quem gosta de contar histórias pelo que usa.

Combina com looks boho, casuais sofisticados e com o estilo de quem não quer seguir regras. Funciona bem sozinho ou empilhado com outros anéis finos.

## Meia aliança cravejada: para celebrar

Sete pedras alinhadas em sequência. Esse modelo tem uma tradição: é dado como presente em datas que merecem ser lembradas — aniversários marcantes, conquistas, renovações de votos. O brilho múltiplo das pedras cravadas em trilho é marcante sem ser extravagante.

## Como combinar anéis

A tendência de **stacking** (empilhar anéis) nunca saiu de moda. A regra básica: misture espessuras diferentes (fino + grosso), mas mantenha o mesmo metal — prata com prata. Evite colocar mais de 3 anéis na mesma mão para não parecer excessivo.

## Sobre os aros: qual o seu tamanho?

Muita gente compra anel sem saber o próprio aro. A forma mais simples de medir: enrole uma tira de papel em torno do dedo, marque onde se encontra, meça o comprimento em milímetros e divida por 3,14. O resultado é o diâmetro — que corresponde ao número do aro.
    `.trim(),
  },
  {
    slug: "como-combinar-correntes-e-pingentes-de-prata",
    title: "Correntes e pingentes: como montar um look cheio de identidade",
    excerpt:
      "A arte de combinar correntes e pingentes em prata 925 é mais simples do que parece. Aprenda a criar camadas harmoniosas e looks com personalidade.",
    date: "2026-05-15",
    readingMinutes: 4,
    coverImage: u("photo-1602173574767-37ac01994b2a"),
    category: "Estilo",
    content: `
Corrente e pingente parecem uma dupla simples — e são. Mas quando bem escolhidos, eles criam looks que parecem elaborados sem muito esforço. A prata tem uma vantagem clara aqui: o tom frio combina com praticamente todas as cores de roupa e com qualquer estação do ano.

## Corrente como base: entenda os estilos

Antes de escolher o pingente, a corrente importa. Cada tipo de elo muda completamente o caráter da peça:

- **Veneziana** (elo quadrado, fino e regular): delicada, feminina, ideal para pingentes menores e looks mais sutis
- **Cubana** (elo oval achatado, mais robusto): presença forte, funciona muito bem sozinha como declaração de estilo ou com pingentes de peso

A espessura do elo também define a "personalidade" da peça: finos para o dia a dia, mais grossos para noite e festas.

## Tamanho da corrente por tipo de uso

- **40–42 cm** (ras-do-cangote): destaque para pingentes no centro do pescoço
- **45 cm** (clavícula): o comprimento mais versátil, vai bem com a maioria dos decotes
- **50–60 cm** (longa): cai sobre o decote e pede pingentes maiores

## A arte do layering

Layering é a técnica de sobrepor correntes de comprimentos diferentes. A regra mais importante: varie os comprimentos em pelo menos 5 cm entre cada camada. O resultado é um look estruturado que parece deliberado, não acumulado.

Sugestão de trio clássico:
1. Veneziana 40 cm com pingente pequeno (coração, estrela)
2. Corrente simples 45 cm sozinha
3. Cubana 60 cm como base

## Escolhendo o pingente pelo decote

- **Decote em V**: pingente em triângulo ou gota que acompanhe o "V"
- **Decote redondo**: pingente circular ou coração
- **Gola alta**: corrente mais longa, sem pingente, para criar profundidade

## Cuidado ao sobrepor correntes

Correntes de elos diferentes podem se enredar. Para evitar: use comprimentos bem distintos e prefira elos maiores nas camadas externas.
    `.trim(),
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}
