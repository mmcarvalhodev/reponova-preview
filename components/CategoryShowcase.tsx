import Link from "next/link";
import { CATEGORIES } from "@/lib/site";
import { productsByCategory } from "@/lib/products";

const ICONS: Record<string, string> = {
  pingentes: "M12 2 L12 22 M12 22 a4 4 0 1 1 0.01 0",
  aneis:     "M12 4 a8 8 0 1 0 0.01 0",
  correntes: "M6 9 a3 3 0 1 1 0 6 M18 9 a3 3 0 1 0 0 6 M9 12 h6",
  brincos:   "M9 4 v6 a3 3 0 1 0 6 0 V4 M9 4 h6",
};

export default function CategoryShowcase() {
  return (
    <section className="border-b border-default">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-champagne mb-3">
            Por categoria
          </div>
          <h2 className="font-serif text-4xl text-silver-bright">
            Encontre a peça certa
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {CATEGORIES.map((c) => {
            const count = productsByCategory(c.slug).length;
            return (
              <Link
                key={c.slug}
                href={`/produtos?cat=${c.slug}`}
                className="card group rounded-xl p-6 flex flex-col items-center text-center"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-silver group-hover:text-champagne transition mb-4"
                >
                  <path d={ICONS[c.slug]} />
                </svg>
                <div className="font-serif text-xl text-silver-bright mb-1">
                  {c.label}
                </div>
                <div className="text-xs text-muted">
                  {count} {count === 1 ? "peça" : "peças"}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
