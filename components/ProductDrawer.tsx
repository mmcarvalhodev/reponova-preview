"use client";

import { useEffect, useState } from "react";
import { getProduct, formatPrice } from "@/lib/products";
import { whatsappLink, CATEGORIES } from "@/lib/site";
import { averageRating, reviewCount } from "@/lib/reviews";
import { useCart } from "./CartProvider";
import StarRating from "./StarRating";
import ReviewsBlock from "./ReviewsBlock";
import ProductGallery from "./ProductGallery";

type Props = {
  slug: string | null;
  onClose: () => void;
};

export default function ProductDrawer({ slug, onClose }: Props) {
  const product = slug ? getProduct(slug) : null;
  const open = !!slug && !!product;
  const { addItem, openCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    if (!product) return;
    addItem({ slug: product.slug, name: product.name, price: product.price, image: product.images[0] });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      openCart();
    }, 800);
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const avg = product ? averageRating(product.slug) : 0;
  const count = product ? reviewCount(product.slug) : 0;
  const categoryLabel = product
    ? CATEGORIES.find((c) => c.slug === product.category)?.label ?? ""
    : "";
  const whatsappMsg = product
    ? `Olá! Tenho interesse na peça "${product.name}" (${formatPrice(product.price)}). Poderia me dar mais informações?`
    : "";

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={product?.name ?? "Detalhes do produto"}
        className={`fixed top-0 right-0 h-full w-full max-w-xl z-50 border-l border-default bg-bg-card overflow-y-auto transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0 shadow-2xl" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 z-10 p-2 rounded-full text-muted hover:text-silver-bright hover:bg-soft transition"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {product && (
          <div className="p-6 md:p-8 pb-16">
            {/* Gallery */}
            <ProductGallery
              key={product.slug}
              images={product.images}
              alt={product.name}
            />

            {/* Info */}
            <div className="mt-7">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted">
                  {categoryLabel}
                </span>
                {product.badge && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider text-champagne border border-champagne/40">
                    {product.badge}
                  </span>
                )}
              </div>

              <h2 className="font-serif text-3xl text-silver-bright leading-tight mb-3">
                {product.name}
              </h2>

              <div className="flex items-center gap-3 mb-5">
                <StarRating value={avg} size="md" />
                <span className="text-muted text-sm">
                  {count > 0
                    ? `${avg.toFixed(1)} · ${count} ${count === 1 ? "avaliação" : "avaliações"}`
                    : "Sem avaliações ainda"}
                </span>
              </div>

              <div className="font-serif text-4xl text-champagne mb-5">
                {formatPrice(product.price)}
              </div>

              <p className="text-silver leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Ficha técnica */}
              <div className="card rounded-xl p-5 mb-6">
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

              {/* CTAs */}
              <button
                onClick={handleAddToCart}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold transition"
                style={{
                  background: added ? "rgba(16,200,100,0.15)" : "var(--bg-soft)",
                  border: `1px solid ${added ? "#10c864" : "var(--champagne)"}`,
                  color: added ? "#10c864" : "var(--champagne)",
                }}
              >
                {added ? (
                  <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Adicionado ao carrinho!</>
                ) : (
                  <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> Adicionar ao carrinho</>
                )}
              </button>

              <a
                href={whatsappLink(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full mt-3"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.52 3.48A12 12 0 003.45 20.42L2 22l1.66-1.42a12 12 0 0016.86-17.1zM12 20a8 8 0 01-4.07-1.11l-.29-.17-3 .8.8-2.92-.18-.3A8 8 0 1112 20z" />
                </svg>
                Comprar pelo WhatsApp
              </a>
              <p className="text-xs text-muted text-center mt-3">
                Atendimento direto · resposta no mesmo dia
              </p>

              {/* Reviews */}
              <ReviewsBlock productSlug={product.slug} />
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
