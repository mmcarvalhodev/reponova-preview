import Image from "next/image";
import { site, whatsappLink } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero-grad border-b border-default relative overflow-hidden">
      {/* Logo marca d'água — à esquerda, mais acesa */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute"
        style={{
          top: "50%",
          left: "16%",
          transform: "translate(-50%, -50%)",
          opacity: 0.18,
          filter: "grayscale(100%) brightness(3.5)",
        }}
      >
        <Image
          src="/logo.jpeg"
          alt=""
          width={480}
          height={480}
          priority
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
        <div
          className="text-[11px] font-semibold uppercase tracking-[0.35em] mb-6"
          style={{ color: "var(--champagne)" }}
        >
          Prata 925 · Feita à mão
        </div>

        <h1
          className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6 silver-gradient"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.9), 0 0 60px rgba(126,200,227,0.15)" }}
        >
          {site.tagline}
        </h1>

        <p
          className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{
            color: "var(--silver-bright)",
            textShadow: "0 1px 8px rgba(0,0,0,0.8)",
          }}
        >
          {site.description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#colecao"
            className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-full"
            style={{ borderColor: "rgba(218,234,245,0.5)", color: "var(--silver-bright)" }}
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
