const PILLARS = [
  {
    title: "Prata 925 certificada",
    text: "Cada peça é fabricada com prata esterlina 925 e recebe selo de garantia.",
  },
  {
    title: "Feito à mão",
    text: "Trabalho artesanal sem produção em massa — pequenas variações tornam cada peça única.",
  },
  {
    title: "Embalagem para presente",
    text: "Toda compra acompanha embalagem caprichada — pronta pra presentear.",
  },
  {
    title: "Atendimento direto",
    text: "Dúvidas, encomendas sob medida e ajustes pelo WhatsApp com resposta no mesmo dia.",
  },
];

export default function AboutStrip() {
  return (
    <section className="border-b border-default bg-soft">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {PILLARS.map((p) => (
            <div key={p.title}>
              <div className="font-serif text-xl text-silver-bright mb-2">{p.title}</div>
              <p className="text-muted text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
