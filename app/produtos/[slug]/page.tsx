import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/ProductGallery";
import ReviewsBlock from "@/components/ReviewsBlock";
import ProductCard from "@/components/ProductCard";
import StarRating from "@/components/StarRating";
import { getProduct, products, formatPrice } from "@/lib/products";
import { averageRating, reviewCount } from "@/lib/reviews";
import { CATEGORIES, whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Reponova`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const avg = averageRating(product.slug);
  const count = reviewCount(product.slug);
  const categoryLabel =
    CATEGORIES.find((c) => c.slug === product.category)?.label ?? "";

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  const whatsappMsg = `Olá! Tenho interesse na peça "${product.name}" (${formatPrice(product.price)}). Poderia me dar mais informações?`;

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6 pt-8">
          <nav className="text-sm text-muted flex items-center gap-2">
            <Link href="/" className="hover:text-silver-bright transition">Início</Link>
            <span>/</span>
            <Link href="/produtos" className="hover:text-silver-bright transition">Coleção</Link>
            <span>/</span>
            <Link
              href={`/produtos?cat=${product.category}`}
              className="hover:text-silver-bright transition"
            >
              {categoryLabel}
            </Link>
            <span>/</span>
            <span className="text-silver">{product.name}</span>
          </nav>
        </div>

        <section>
          <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-12">
            <ProductGallery images={product.images} alt={product.name} />

            <div className="flex flex-col">
              {product.badge && (
                <span className="self-start mb-4 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-champagne border border-champagne/40">
                  {product.badge}
                </span>
              )}
              <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted mb-3">
                {categoryLabel}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-silver-bright leading-tight mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mb-6">
                <StarRating value={avg} size="md" />
                <span className="text-muted text-sm">
                  {count > 0
                    ? `${avg.toFixed(1)} · ${count} ${count === 1 ? "avaliação" : "avaliações"}`
                    : "Sem avaliações ainda"}
                </span>
              </div>

              <div className="font-serif text-4xl text-champagne mb-8">
                {formatPrice(product.price)}
              </div>

              <p className="text-silver leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="card rounded-xl p-5 mb-8">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-champagne mb-3">
                  Ficha técnica
                </div>
                <ul className="space-y-2 text-sm text-silver">
                  {product.details.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="text-champagne mt-1">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={whatsappLink(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.52 3.48A12 12 0 003.45 20.42L2 22l1.66-1.42a12 12 0 0016.86-17.1zM12 20a8 8 0 01-4.07-1.11l-.29-.17-3 .8.8-2.92-.18-.3A8 8 0 1112 20z" />
                </svg>
                Comprar pelo WhatsApp
              </a>
              <p className="text-xs text-muted text-center mt-3">
                Atendimento direto · resposta no mesmo dia
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-12">
          <ReviewsBlock productSlug={product.slug} />
        </section>

        {related.length > 0 && (
          <section className="border-t border-default">
            <div className="max-w-6xl mx-auto px-6 py-16">
              <h2 className="font-serif text-3xl text-silver-bright mb-8">
                Você também pode gostar
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {related.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
