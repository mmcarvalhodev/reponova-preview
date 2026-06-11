"use client";

import { useState, useCallback } from "react";
import type { Product } from "@/lib/products";
import ProductCard from "./ProductCard";
import ProductDrawer from "./ProductDrawer";

type Props = {
  products: Product[];
  cols?: string;
};

export default function ProductsGrid({
  products,
  cols = "grid-cols-2 md:grid-cols-4",
}: Props) {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const close = useCallback(() => setSelectedSlug(null), []);

  return (
    <>
      <div className={`grid ${cols} gap-5`}>
        {products.map((p) => (
          <ProductCard
            key={p.slug}
            product={p}
            onClick={() => setSelectedSlug(p.slug)}
          />
        ))}
      </div>
      <ProductDrawer slug={selectedSlug} onClose={close} />
    </>
  );
}
