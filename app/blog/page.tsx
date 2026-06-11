import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts, formatPostDate } from "@/lib/posts";

export const metadata = {
  title: "Blog — Tutupratas",
  description: "Dicas de estilo, cuidados com joias em prata 925 e como usar cada peça na ocasião certa.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="hero-grad border-b border-default">
          <div className="max-w-6xl mx-auto px-6 py-14 text-center">
            <div className="text-[11px] font-semibold uppercase tracking-[0.35em] mb-4" style={{ color: "var(--champagne)" }}>
              Conteúdo
            </div>
            <h1 className="font-serif text-5xl silver-gradient mb-3">Blog</h1>
            <p style={{ color: "var(--silver)" }} className="max-w-xl mx-auto">
              Dicas de estilo, cuidados com joias e como usar cada peça na ocasião certa.
            </p>
          </div>
        </section>

        <section>
          <div className="max-w-6xl mx-auto px-6 py-14">
            <div className="grid md:grid-cols-3 gap-7">
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
                    <h2 className="font-serif text-xl leading-snug" style={{ color: "var(--silver-bright)" }}>
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-3 border-t" style={{ borderColor: "var(--border)" }}>
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                        {formatPostDate(post.date)} · {post.readingMinutes} min
                      </span>
                      <span className="text-xs" style={{ color: "var(--champagne)" }}>Ler →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
