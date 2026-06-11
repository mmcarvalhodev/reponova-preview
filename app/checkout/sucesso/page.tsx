import Link from "next/link";
import Header from "@/components/Header";
import { site } from "@/lib/site";

export default async function SucessoPage({
  searchParams,
}: {
  searchParams: Promise<{ frete?: string; total?: string; nome?: string }>;
}) {
  const { frete, total, nome } = await searchParams;
  const orderNum = Math.floor(10000 + Math.random() * 90000);
  const totalNum = parseFloat(total ?? "0");
  const freteLabel: Record<string, string> = { pac: "Correios PAC · 7-10 dias úteis", sedex: "Correios SEDEX · 2-3 dias úteis", jadlog: "Jadlog .com · 5-8 dias úteis" };

  return (
    <>
      <header className="border-b border-default px-6 py-4 flex items-center justify-between" style={{ background: "var(--bg-soft)" }}>
        <Link href="/" className="font-serif text-2xl silver-gradient">{site.name}</Link>
      </header>
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full text-center space-y-6">
          {/* Check animado */}
          <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center" style={{ background: "rgba(16,200,100,0.12)", border: "2px solid #10c864" }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#10c864" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <div>
            <h1 className="font-serif text-4xl text-silver-bright mb-2">Pedido confirmado!</h1>
            <p className="text-muted">
              Olá{nome ? `, ${nome}` : ""}! Seu pedido foi recebido com sucesso.
            </p>
          </div>

          <div className="card rounded-2xl p-6 text-left space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted">Número do pedido</span>
              <span className="font-mono text-silver-bright font-semibold">#{orderNum}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted">Total pago</span>
              <span className="font-serif text-xl" style={{ color: "var(--champagne)" }}>
                {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(totalNum)}
              </span>
            </div>
            {frete && (
              <div className="flex justify-between text-sm">
                <span className="text-muted">Entrega</span>
                <span className="text-silver">{freteLabel[frete] ?? frete}</span>
              </div>
            )}
            <div className="border-t border-default pt-4 text-xs text-muted">
              Um e-mail de confirmação com os detalhes do pedido será enviado em instantes.
            </div>
          </div>

          <Link
            href="/produtos"
            className="btn-primary w-full inline-flex items-center justify-center px-6 py-4 rounded-full font-medium"
          >
            Continuar comprando
          </Link>
          <Link href="/" className="block text-sm text-muted hover:text-silver transition">
            Voltar à página inicial
          </Link>
        </div>
      </main>
    </>
  );
}
