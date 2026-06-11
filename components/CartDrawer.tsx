"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { formatPrice } from "@/lib/products";
import { useEffect } from "react";

export default function CartDrawer() {
  const { items, removeItem, updateQty, total, count, isCartOpen, closeCart } = useCart();

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isCartOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeCart(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeCart]);

  return (
    <>
      <div
        aria-hidden
        onClick={closeCart}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />
      <aside
        role="dialog"
        aria-modal
        aria-label="Carrinho"
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 flex flex-col border-l border-default bg-bg-card transition-transform duration-300 ease-in-out ${isCartOpen ? "translate-x-0 shadow-2xl" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-default">
          <div className="font-serif text-xl text-silver-bright">
            Carrinho {count > 0 && <span className="text-base text-muted">({count} {count === 1 ? "item" : "itens"})</span>}
          </div>
          <button onClick={closeCart} className="p-2 rounded-full text-muted hover:text-silver-bright hover:bg-soft transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-muted">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <p className="text-muted">Seu carrinho está vazio</p>
              <button onClick={closeCart} className="text-sm" style={{ color: "var(--champagne)" }}>
                Continuar comprando →
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.slug} className="flex gap-4 card rounded-xl p-3">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-soft">
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-silver-bright leading-tight mb-1 truncate">{item.name}</div>
                  <div className="text-champagne font-serif text-base mb-3">{formatPrice(item.price)}</div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 border border-default rounded-full px-2 py-1">
                      <button onClick={() => updateQty(item.slug, item.qty - 1)} className="w-5 h-5 flex items-center justify-center text-muted hover:text-silver-bright transition text-lg leading-none">−</button>
                      <span className="text-silver text-sm w-4 text-center">{item.qty}</span>
                      <button onClick={() => updateQty(item.slug, item.qty + 1)} className="w-5 h-5 flex items-center justify-center text-muted hover:text-silver-bright transition text-lg leading-none">+</button>
                    </div>
                    <button onClick={() => removeItem(item.slug)} className="text-xs text-muted hover:text-red-400 transition">Remover</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-default space-y-4">
            <div className="flex justify-between text-sm text-muted">
              <span>Subtotal</span>
              <span className="text-silver">{formatPrice(total)}</span>
            </div>
            <div className="flex justify-between text-base font-medium">
              <span className="text-silver-bright">Total (sem frete)</span>
              <span className="font-serif text-xl" style={{ color: "var(--champagne)" }}>{formatPrice(total)}</span>
            </div>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="btn-primary w-full inline-flex items-center justify-center px-6 py-4 rounded-full font-medium"
            >
              Finalizar compra
            </Link>
            <button onClick={closeCart} className="w-full text-sm text-center text-muted hover:text-silver transition">
              Continuar comprando
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
