import Image from "next/image";
import { site, whatsappLink } from "@/lib/site";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b"
      style={{ background: "#faf6f1", borderColor: "#e0d8cc" }}
    >
      {/* Logo marca d'água — mix-blend-mode:multiply: fundo branco some, só o traço preto fica */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute"
        style={{
          top: "50%",
          left: "16%",
          transform: "translate(-50%, -50%)",
          opacity: 0.13,
          filter: "grayscale(100%)",
          mixBlendMode: "multiply",
        }}
      >
        <Image
          src="/logo.jpeg"
          alt=""
          width={500}
          height={500}
          priority
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
        {/* Eyebrow */}
        <div
          className="text-[11px] font-semibold uppercase tracking-[0.35em] mb-6"
          style={{ color: "#9a7020" }}
        >
          Prata 925 · Feita à mão
        </div>

        {/* Título com gradiente dourado */}
        <h1
          className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6"
          style={{
            background: "linear-gradient(135deg, #a86c10 0%, #d4a017 35%, #f0c840 55%, #c8973a 75%, #a86c10 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {site.tagline}
        </h1>

        {/* Subtítulo */}
        <p
          className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#3a2c14" }}
        >
          {site.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#colecao"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border transition hover:bg-black/5"
            style={{ borderColor: "#1a1407", color: "#1a1407" }}
          >
            Explorar coleção
          </a>
          <a
            href={whatsappLink("Olá! Gostaria de tirar dúvidas sobre uma peça.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition"
            style={{
              background: "linear-gradient(135deg, #b8770a 0%, #d4a017 50%, #c8973a 100%)",
              color: "#fff",
              boxShadow: "0 4px 20px rgba(180,130,20,0.35)",
            }}
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
