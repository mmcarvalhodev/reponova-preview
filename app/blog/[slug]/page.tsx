import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPost, posts, formatPostDate } from "@/lib/posts";
import { whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} — Tutupratas`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Cover */}
        <div className="relative h-72 md:h-96 overflow-hidden border-b border-default">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,9,15,0.9) 30%, rgba(7,9,15,0.3) 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-6 pb-10">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-4"
              style={{ background: "rgba(7,9,15,0.75)", color: "var(--champagne)", border: "1px solid var(--border)" }}>
              {post.category}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl leading-tight" style={{ color: "var(--silver-bright)", textShadow: "0 2px 16px rgba(0,0,0,0.9)" }}>
              {post.title}
            </h1>
          </div>
        </div>

        {/* Meta */}
        <div className="max-w-3xl mx-auto px-6 pt-8 pb-2 flex items-center gap-4 text-sm border-b border-default mb-2" style={{ borderColor: "var(--border-soft)" }}>
          <nav className="flex items-center gap-2 text-sm flex-1" style={{ color: "var(--text-muted)" }}>
            <Link href="/" className="hover:text-silver-bright transition">Início</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-silver-bright transition">Blog</Link>
            <span>/</span>
            <span style={{ color: "var(--silver)" }}>{post.title}</span>
          </nav>
          <span style={{ color: "var(--text-muted)" }} className="whitespace-nowrap">
            {formatPostDate(post.date)} · {post.readingMinutes} min de leitura
          </span>
        </div>

        {/* Content */}
        <article className="max-w-3xl mx-auto px-6 py-10">
          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--silver)" }}>
            {post.excerpt}
          </p>
          <div className="prose-tutu">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-serif text-2xl md:text-3xl mt-10 mb-4" style={{ color: "var(--silver-bright)" }}>
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("- ")) {
                const items = block.split("\n").filter(l => l.startsWith("- "));
                return (
                  <ul key={i} className="space-y-2 mb-6 pl-4">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-base leading-relaxed" style={{ color: "var(--silver)" }}>
                        <span className="mt-1 flex-shrink-0" style={{ color: "var(--champagne)" }}>•</span>
                        <span dangerouslySetInnerHTML={{ __html: formatInline(item.replace("- ", "")) }} />
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-base leading-relaxed mb-5" style={{ color: "var(--silver)" }}
                  dangerouslySetInnerHTML={{ __html: formatInline(block) }}
                />
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-14 p-7 rounded-2xl border text-center" style={{ background: "var(--bg-card)", borderColor: "var(--champagne)" }}>
            <div className="font-serif text-2xl mb-2" style={{ color: "var(--silver-bright)" }}>
              Gostou? Veja nossa coleção
            </div>
            <p className="text-sm mb-5" style={{ color: "var(--text-muted)" }}>
              Todas as peças citadas neste artigo estão disponíveis na Tutupratas.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/produtos" className="btn-primary inline-flex px-5 py-2.5 rounded-full text-sm">
                Ver coleção
              </Link>
              <a
                href={whatsappLink("Olá! Li o blog da Tutupratas e gostaria de mais informações.")}
                target="_blank" rel="noopener noreferrer"
                className="btn-outline inline-flex px-5 py-2.5 rounded-full text-sm"
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="border-t border-default">
            <div className="max-w-3xl mx-auto px-6 py-12">
              <h3 className="font-serif text-2xl mb-7" style={{ color: "var(--silver-bright)" }}>Outros artigos</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {related.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="card group rounded-xl overflow-hidden flex flex-col">
                    <div className="relative aspect-[16/9] overflow-hidden bg-soft">
                      <Image src={p.coverImage} alt={p.title} fill sizes="400px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-4">
                      <div className="font-serif text-lg leading-snug mb-1" style={{ color: "var(--silver-bright)" }}>{p.title}</div>
                      <div className="text-xs" style={{ color: "var(--champagne)" }}>Ler →</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

function formatInline(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, `<strong style="color:var(--silver-bright)">$1</strong>`);
}
