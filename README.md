# Reponova — Preview de site de joias e prata

Preview estático em Next.js 16 (App Router + Tailwind v4) para apresentar a um cliente a vitrine de uma joalheria de prata 925. Sem banco, sem admin, sem dependências externas — os 10 produtos e as 32 avaliações vivem em arquivos TypeScript versionados.

## Páginas

- `/` — home com hero, vitrine de categorias, destaques, pilares, recém-chegadas
- `/produtos` — catálogo com filtro por categoria (`?cat=pingentes|aneis|correntes|brincos`)
- `/produtos/[slug]` — página de produto com galeria, ficha técnica, CTA WhatsApp, avaliações com média/distribuição/lista, e bloco "Você também pode gostar"

## Onde editar o conteúdo

| Editar… | Arquivo |
|---|---|
| Nome do site / WhatsApp / Instagram / cidade | `lib/site.ts` |
| Produtos (nome, preço, ficha, fotos) | `lib/products.ts` |
| Avaliações de clientes | `lib/reviews.ts` |
| Paleta de cores / tipografia | `app/globals.css` |

### Fotos dos produtos

Os campos `images` em `lib/products.ts` apontam para `placehold.co` apenas como placeholder. Substituir por URLs reais (Cloudinary, Imgur, S3, ou caminhos em `/public/`) antes de mostrar ao cliente final.

## Rodar local

```bash
npm install
npm run dev
# abre em http://localhost:3000
```

## Deploy no Vercel

1. Push do repo pro GitHub
2. Importar em [vercel.com/new](https://vercel.com/new)
3. Sem variáveis de ambiente — o preview é 100% estático
4. Deploy direto, ~30 segundos

## Stack

- Next.js 16.2.9 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- TypeScript estrito
- Sem dependências server-side
