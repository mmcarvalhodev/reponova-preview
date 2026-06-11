import Image from "next/image";
import { site, whatsappLink } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero-grad border-b border-default relative overflow-hidden">
      {/* Logo marca d'água — levemente à esquerda do centro, bem suave */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{ left: "28%", transform: "translate(-50%, -50%)" }}
        >
          <Image
            src="/logo.jpeg"
            alt=""
            width={520}
            height={520}
            priority
            className="object-contain"
            style={{ opacity: 0.07, filter: "grayscale(100%) brightness(2)" }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
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
