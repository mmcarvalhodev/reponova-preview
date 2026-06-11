import { reviewsForProduct, averageRating, reviewCount } from "@/lib/reviews";
import StarRating from "./StarRating";

export default function ReviewsBlock({ productSlug }: { productSlug: string }) {
  const list = reviewsForProduct(productSlug);
  const avg = averageRating(productSlug);
  const count = reviewCount(productSlug);

  const distribution = [5, 4, 3, 2, 1].map((star) => {
    const n = list.filter((r) => r.rating === star).length;
    return { star, n, pct: count ? (n / count) * 100 : 0 };
  });

  if (count === 0) {
    return (
      <div className="border-t border-default pt-12 mt-12">
        <h2 className="font-serif text-3xl text-silver-bright mb-2">
          Avaliações
        </h2>
        <p className="text-muted">Seja o primeiro a avaliar esta peça.</p>
      </div>
    );
  }

  return (
    <div className="border-t border-default pt-12 mt-12">
      <h2 className="font-serif text-3xl text-silver-bright mb-8">
        O que os clientes dizem
      </h2>

      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <div className="md:col-span-1 text-center md:text-left">
          <div className="font-serif text-6xl text-champagne mb-2">
            {avg.toFixed(1)}
          </div>
          <StarRating value={avg} size="lg" />
          <div className="text-muted text-sm mt-2">
            {count} {count === 1 ? "avaliação" : "avaliações"}
          </div>
        </div>

        <div className="md:col-span-2 space-y-2">
          {distribution.map((d) => (
            <div key={d.star} className="flex items-center gap-3 text-sm">
              <span className="text-silver w-8 text-right">{d.star}★</span>
              <div className="flex-1 h-2 rounded-full overflow-hidden bg-soft border border-soft">
                <div
                  className="h-full bg-champagne"
                  style={{ width: `${d.pct}%` }}
                />
              </div>
              <span className="text-muted w-8">{d.n}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {list.map((r) => (
          <article
            key={r.id}
            className="border border-default rounded-xl p-5 bg-card"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-silver-bright">
                    {r.customerName}
                  </span>
                  {r.verified && (
                    <span className="text-[10px] uppercase tracking-wider text-champagne border border-champagne/40 rounded-full px-2 py-0.5">
                      Compra verificada
                    </span>
                  )}
                </div>
                <StarRating value={r.rating} size="sm" />
              </div>
              <time className="text-xs text-muted" dateTime={r.date}>
                {formatDate(r.date)}
              </time>
            </div>
            <p className="text-silver leading-relaxed">{r.comment}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
