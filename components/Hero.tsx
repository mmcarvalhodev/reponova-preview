import { site, whatsappLink } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero-grad border-b border-default">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
        <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-champagne mb-6">
          Prata 925 · Feita à mão
        </div>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6 silver-gradient">
          {site.tagline}
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          {site.description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#colecao"
            className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-full"
          >
            Explorar coleção
          </a>
          <a
            href={whatsappLink("Olá! Gostaria de tirar dúvidas sobre uma peça.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
