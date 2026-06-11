"use client";

import { useCart } from "./CartProvider";

export default function CartButton() {
  const { count, openCart } = useCart();

  return (
    <button
      onClick={openCart}
      aria-label={`Carrinho${count > 0 ? ` (${count} itens)` : ""}`}
      className="relative p-2 rounded-full text-muted hover:text-silver-bright transition"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
      {count > 0 && (
        <span
          className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full text-[10px] font-bold flex items-center justify-center"
          style={{ background: "var(--champagne)", color: "#07090f" }}
        >
          {count > 9 ? "9+" : count}
        </span>
      )}
    </button>
  );
}
