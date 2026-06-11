import Link from "next/link";
import { site, whatsappLink, CATEGORIES } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-default bg-soft">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl silver-gradient mb-3">{site.name}</div>
          <p className="text-muted text-sm leading-relaxed max-w-md">
            {site.description}
          </p>
        </div>

        <div>
          <div className="text-silver-bright font-semibold text-sm mb-4 uppercase tracking-wider">
            Coleção
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/produtos" className="text-muted hover:text-silver-bright transition">
                Ver tudo
              </Link>
            </li>
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/produtos?cat=${c.slug}`}
                  className="text-muted hover:text-silver-bright transition"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-silver-bright font-semibold text-sm mb-4 uppercase tracking-wider">
            Contato
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={whatsappLink("Olá! Vim pelo site.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-champagne transition"
              >
                {site.whatsappLabel}
              </a>
            </li>
            <li className="text-muted">{site.email}</li>
            <li className="text-muted">{site.instagram}</li>
            <li className="text-muted">{site.city}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-soft">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
          <span>© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</span>
          <span>Joias em prata 925 · Feitas à mão no Brasil</span>
        </div>
      </div>
    </footer>
  );
}
