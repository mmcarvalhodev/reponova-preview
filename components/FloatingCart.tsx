"use client";

import { useCart } from "./CartProvider";
import { formatPrice } from "@/lib/products";

export default function FloatingCart() {
  const { count, total, openCart } = useCart();
  if (count === 0) return null;

  return (
    <button
      onClick={openCart}
      aria-label={`Ver carrinho — ${count} ${count === 1 ? "item" : "itens"}`}
      className="fixed bottom-6 right-4 z-30 flex items-center gap-3 pl-4 pr-5 py-3 rounded-full shadow-2xl transition-all"
      style={{
        background: "linear-gradient(135deg, var(--champagne) 0%, var(--champagne-soft) 100%)",
        color: "#07090f",
        boxShadow: "0 8px 32px rgba(126,200,227,0.40)",
      }}
    >
      {/* ícone carrinho */}
      <div className="relative">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <span
          className="absolute -top-2 -right-2 min-w-[18px] h-[18px] rounded-full text-[10px] font-bold flex items-center justify-center bg-white"
          style={{ color: "var(--champagne-soft)" }}
        >
          {count > 9 ? "9+" : count}
        </span>
      </div>

      <div className="text-left leading-tight">
        <div className="text-[10px] font-semibold uppercase tracking-wider opacity-70">Carrinho</div>
        <div className="text-sm font-bold">{formatPrice(total)}</div>
      </div>
    </button>
  );
}
