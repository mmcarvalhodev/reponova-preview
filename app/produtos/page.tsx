import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { CATEGORIES, type CategorySlug } from "@/lib/site";
import Link from "next/link";

type SearchParams = Promise<{ cat?: string }>;

export default async function ProdutosPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { cat } = await searchParams;
  const activeCat = CATEGORIES.find((c) => c.slug === cat)?.slug as
    | CategorySlug
    | undefined;
  const list = activeCat
    ? products.filter((p) => p.category === activeCat)
    : products;
  const activeLabel = CATEGORIES.find((c) => c.slug === activeCat)?.label;

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="hero-grad border-b border-default">
          <div className="max-w-6xl mx-auto px-6 py-14 text-center">
            <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-champagne mb-4">
              Coleção
            </div>
            <h1 className="font-serif text-5xl silver-gradient mb-3">
              {activeLabel || "Todas as peças"}
            </h1>
            <p className="text-muted max-w-xl mx-auto">
              Cada peça é fabricada em prata 925 com acabamento polido à mão.
            </p>
          </div>
        </section>

        <section className="border-b border-default">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="flex flex-wrap items-center gap-2 mb-10 justify-center">
              <FilterPill href="/produtos" active={!activeCat} label="Todas" />
              {CATEGORIES.map((c) => (
                <FilterPill
                  key={c.slug}
                  href={`/produtos?cat=${c.slug}`}
                  active={activeCat === c.slug}
                  label={c.label}
                />
              ))}
            </div>

            {list.length === 0 ? (
              <p className="text-center text-muted py-16">
                Nenhuma peça nessa categoria por enquanto.
              </p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {list.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function FilterPill({
  href,
  active,
  label,
}: {
  href: string;
  active: boolean;
  label: string;
}) {
  return (
    <Link
      href={href}
      className={`px-5 py-2 rounded-full text-sm border transition ${
        active
          ? "bg-champagne text-bg border-transparent font-semibold"
          : "border-default text-silver hover:border-champagne hover:text-champagne"
      }`}
    >
      {label}
    </Link>
  );
}
