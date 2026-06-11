import Image from "next/image";
import Link from "next/link";
import { posts, formatPostDate } from "@/lib/posts";

export default function BlogStrip() {
  return (
    <section className="border-b border-default">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.3em] mb-2" style={{ color: "var(--champagne)" }}>
              Conteúdo
            </div>
            <h2 className="font-serif text-4xl" style={{ color: "var(--silver-bright)" }}>
              Do nosso blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm hidden sm:inline transition"
            style={{ color: "var(--silver)" }}
          >
            Ver todos os artigos →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card group rounded-xl overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-soft">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                  style={{ background: "rgba(7,9,15,0.75)", color: "var(--champagne)", border: "1px solid var(--border)" }}
                >
                  {post.category}
                </span>
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="font-serif text-xl leading-snug" style={{ color: "var(--silver-bright)" }}>
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "var(--text-muted)" }}>
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between pt-3 border-t" style={{ borderColor: "var(--border)" }}>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {formatPostDate(post.date)} · {post.readingMinutes} min
                  </span>
                  <span className="text-xs transition" style={{ color: "var(--champagne)" }}>
                    Ler →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
