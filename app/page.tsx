import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryShowcase from "@/components/CategoryShowcase";
import ProductsGrid from "@/components/ProductsGrid";
import AboutStrip from "@/components/AboutStrip";
import BlogStrip from "@/components/BlogStrip";
import Footer from "@/components/Footer";
import { featuredProducts, products } from "@/lib/products";
import Link from "next/link";

export default function HomePage() {
  const featured = featuredProducts(4);
  const recent = products.slice(0, 8);

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <CategoryShowcase />

        <section id="colecao" className="border-b border-default">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-champagne mb-2">
                  Destaques
                </div>
                <h2 className="font-serif text-4xl text-silver-bright">
                  Mais procuradas
                </h2>
              </div>
              <Link
                href="/produtos"
                className="text-sm text-silver hover:text-champagne transition hidden sm:inline"
              >
                Ver coleção completa →
              </Link>
            </div>
            <ProductsGrid products={featured} />
          </div>
        </section>

        <AboutStrip />

        <section className="border-b border-default">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-champagne mb-2">
                  Recém-chegadas
                </div>
                <h2 className="font-serif text-4xl text-silver-bright">
                  Coleção atual
                </h2>
              </div>
              <Link
                href="/produtos"
                className="text-sm text-silver hover:text-champagne transition hidden sm:inline"
              >
                Ver tudo →
              </Link>
            </div>
            <ProductsGrid products={recent} />
          </div>
        </section>

        <BlogStrip />
      </main>
      <Footer />
    </>
  );
}
