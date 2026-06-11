import Link from "next/link";
import Image from "next/image";
import { site, whatsappLink, CATEGORIES } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-default bg-bg/85 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.jpeg"
            alt={site.name}
            width={64}
            height={64}
            className="rounded-full object-cover"
            priority
          />
          <span className="font-serif text-2xl tracking-wide silver-gradient">
            {site.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          <Link href="/" className="text-silver hover:text-silver-bright transition">
            Início
          </Link>
          <Link href="/produtos" className="text-silver hover:text-silver-bright transition">
            Coleção
          </Link>
          <Link href="/blog" className="text-silver hover:text-silver-bright transition">
            Blog
          </Link>
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/produtos?cat=${c.slug}`}
              className="text-silver hover:text-silver-bright transition"
            >
              {c.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappLink(`Olá! Vim pelo site da ${site.name} e gostaria de mais informações.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
        >
          <WhatsappIcon />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

function WhatsappIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.52 3.48A12 12 0 003.45 20.42L2 22l1.66-1.42a12 12 0 0016.86-17.1zM12 20a8 8 0 01-4.07-1.11l-.29-.17-3 .8.8-2.92-.18-.3A8 8 0 1112 20z" />
    </svg>
  );
}
