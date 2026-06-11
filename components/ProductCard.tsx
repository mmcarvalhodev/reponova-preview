import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/lib/products";
import { averageRating, reviewCount } from "@/lib/reviews";
import StarRating from "./StarRating";

type Props = {
  product: Product;
  onClick?: () => void;
};

export default function ProductCard({ product, onClick }: Props) {
  const avg = averageRating(product.slug);
  const count = reviewCount(product.slug);

  const inner = (
    <>
      <div className="relative aspect-square overflow-hidden bg-soft">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-bg/80 text-champagne border border-default">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="font-serif text-xl text-silver-bright leading-tight">
          {product.name}
        </h3>
        <p className="text-muted text-sm leading-snug line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <StarRating value={avg} size="sm" />
          <span className="text-muted text-xs">
            {count > 0 ? `${avg.toFixed(1)} (${count})` : "Sem avaliações"}
          </span>
        </div>
        <div className="mt-auto pt-3 flex items-baseline justify-between">
          <span className="font-serif text-2xl text-champagne">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs text-silver opacity-70 group-hover:opacity-100 transition">
            Ver peça →
          </span>
        </div>
      </div>
    </>
  );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="card group rounded-xl overflow-hidden flex flex-col text-left w-full cursor-pointer"
      >
        {inner}
      </button>
    );
  }

  return (
    <Link
      href={`/produtos/${product.slug}`}
      className="card group rounded-xl overflow-hidden flex flex-col"
    >
      {inner}
    </Link>
  );
}
