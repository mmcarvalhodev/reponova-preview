"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/products";
import { site } from "@/lib/site";

/* ── tipos ───────────────────────────────────────────── */
type ShippingOption = { id: string; label: string; sub: string; price: number; days: string };
type PayTab = "pix" | "cartao" | "boleto";

const SHIPPING: ShippingOption[] = [
  { id: "pac",   label: "Correios PAC",  sub: "Entrega econômica",   price: 18.90, days: "7-10 dias úteis" },
  { id: "sedex", label: "Correios SEDEX", sub: "Entrega expressa",   price: 32.50, days: "2-3 dias úteis"  },
  { id: "jadlog",label: "Jadlog .com",   sub: "Transportadora",      price: 14.50, days: "5-8 dias úteis"  },
];

/* ── helpers ─────────────────────────────────────────── */
function maskCEP(v: string)  { return v.replace(/\D/g,"").slice(0,8).replace(/(\d{5})(\d)/,"$1-$2"); }
function maskCPF(v: string)  { return v.replace(/\D/g,"").slice(0,11).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4"); }
function maskCard(v: string) { return v.replace(/\D/g,"").slice(0,16).replace(/(\d{4})(?=\d)/g,"$1 ").trim(); }
function maskExpiry(v: string){ return v.replace(/\D/g,"").slice(0,4).replace(/(\d{2})(\d)/,"$1/$2"); }

const FAKE_ADDRESSES: Record<string, { street: string; neighborhood: string; city: string; state: string }> = {
  "01": { street: "Rua das Palmeiras", neighborhood: "Jardim América",    city: "São Paulo",    state: "SP" },
  "04": { street: "Av. Paulista",      neighborhood: "Bela Vista",        city: "São Paulo",    state: "SP" },
  "20": { street: "Rua da Glória",     neighborhood: "Glória",            city: "Rio de Janeiro",state:"RJ" },
  "22": { street: "Av. Atlântica",     neighborhood: "Copacabana",        city: "Rio de Janeiro",state:"RJ" },
  "30": { street: "Rua da Bahia",      neighborhood: "Centro",            city: "Belo Horizonte",state:"MG" },
  "40": { street: "Av. Sete de Setembro",neighborhood:"Centro",           city: "Salvador",     state: "BA" },
  "60": { street: "Av. Beira Mar",     neighborhood: "Meireles",          city: "Fortaleza",    state: "CE" },
  "80": { street: "Rua XV de Novembro",neighborhood: "Centro",            city: "Curitiba",     state: "PR" },
};
function fakeAddress(cep: string) {
  const prefix = cep.slice(0,2);
  return FAKE_ADDRESSES[prefix] ?? { street: "Rua das Flores", neighborhood: "Centro", city: "São Paulo", state: "SP" };
}

const FAKE_PIX = "00020126330014BR.GOV.BCB.PIX0111999999999995204000053039865802BR5913Tutupratas6009SAO PAULO62140510TUTU00001236304A1B2";
const FAKE_BOLETO = "23791.23456 00000.000000 00000.000000 1 99990000018900";

/* ── componente principal ────────────────────────────── */
export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState(1);

  // Step 1 – endereço
  const [nome,       setNome]       = useState("");
  const [cpf,        setCpf]        = useState("");
  const [email,      setEmail]      = useState("");
  const [cep,        setCep]        = useState("");
  const [cepOk,      setCepOk]      = useState(false);
  const [cepLoading, setCepLoading] = useState(false);
  const [street,     setStreet]     = useState("");
  const [numero,     setNumero]     = useState("");
  const [complemento,setComplemento]= useState("");
  const [neighborhood,setNeighborhood]=useState("");
  const [city,       setCity]       = useState("");
  const [state,      setState]      = useState("");

  // Step 2 – frete
  const [shipping, setShipping] = useState<ShippingOption | null>(null);

  // Step 3 – pagamento
  const [payTab, setPayTab]   = useState<PayTab>("pix");
  const [cardNum, setCardNum] = useState("");
  const [cardName,setCardName]= useState("");
  const [expiry,  setExpiry]  = useState("");
  const [cvv,     setCvv]     = useState("");
  const [parcelas,setParcelas]= useState(1);
  const [copied,  setCopied]  = useState(false);
  const [paying,  setPaying]  = useState(false);

  // Simula busca de CEP
  useEffect(() => {
    const raw = cep.replace(/\D/g,"");
    if (raw.length === 8) {
      setCepLoading(true);
      setCepOk(false);
      const t = setTimeout(() => {
        const addr = fakeAddress(raw);
        setStreet(addr.street);
        setNeighborhood(addr.neighborhood);
        setCity(addr.city);
        setState(addr.state);
        setCepLoading(false);
        setCepOk(true);
      }, 1200);
      return () => clearTimeout(t);
    } else {
      setCepOk(false);
    }
  }, [cep]);

  const selectedShipping = shipping ?? SHIPPING[0];
  const orderTotal = total + selectedShipping.price;

  function handlePagar() {
    setPaying(true);
    setTimeout(() => {
      clearCart();
      router.push(`/checkout/sucesso?frete=${selectedShipping.id}&total=${orderTotal.toFixed(2)}&nome=${encodeURIComponent(nome || "Cliente")}`);
    }, 1800);
  }

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  if (items.length === 0 && step < 4) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6" style={{ background: "var(--bg)" }}>
        <p className="text-muted">Seu carrinho está vazio.</p>
        <Link href="/produtos" className="btn-primary px-6 py-3 rounded-full">Ver produtos</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--bg)" }}>
      {/* Header mínimo */}
      <header className="border-b border-default px-6 py-4 flex items-center justify-between" style={{ background: "var(--bg-soft)" }}>
        <Link href="/" className="font-serif text-2xl silver-gradient">{site.name}</Link>
        <div className="flex items-center gap-2 text-sm text-muted">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Compra 100% segura
        </div>
      </header>

      {/* Step indicator */}
      <div className="border-b border-default px-6 py-4" style={{ background: "var(--bg-soft)" }}>
        <div className="max-w-3xl mx-auto flex items-center gap-0">
          {["Endereço", "Entrega", "Pagamento"].map((label, i) => {
            const n = i + 1;
            const active = step === n;
            const done   = step > n;
            return (
              <div key={label} className="flex items-center flex-1 last:flex-none">
                <div className={`flex items-center gap-2 text-sm font-medium ${active ? "" : done ? "opacity-80" : "opacity-40"}`}>
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{
                      background: done ? "var(--champagne)" : active ? "var(--champagne)" : "var(--bg-card)",
                      color: done || active ? "#07090f" : "var(--text-muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {done ? "✓" : n}
                  </span>
                  <span className="hidden sm:inline" style={{ color: active ? "var(--silver-bright)" : "var(--text-muted)" }}>{label}</span>
                </div>
                {i < 2 && <div className="flex-1 h-px mx-3" style={{ background: "var(--border)" }} />}
              </div>
            );
          })}
        </div>
      </div>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8 grid md:grid-cols-[1fr_340px] gap-8">
        {/* ── Formulário ── */}
        <div>
          {/* STEP 1 – Endereço */}
          {step === 1 && (
            <div className="card rounded-2xl p-6 space-y-5">
              <h2 className="font-serif text-2xl text-silver-bright">Endereço de entrega</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-xs text-muted mb-1">Nome completo *</label>
                  <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Maria Silva" className="input-field w-full" />
                </div>
                <div>
                  <label className="block text-xs text-muted mb-1">CPF *</label>
                  <input value={cpf} onChange={e => setCpf(maskCPF(e.target.value))} placeholder="000.000.000-00" className="input-field w-full" />
                </div>
                <div>
                  <label className="block text-xs text-muted mb-1">E-mail *</label>
                  <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="seu@email.com" className="input-field w-full" />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs text-muted mb-1">CEP *</label>
                  <div className="relative">
                    <input value={cep} onChange={e => setCep(maskCEP(e.target.value))} placeholder="00000-000" className="input-field w-full pr-10" />
                    {cepLoading && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2">
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 11-6.219-8.56"/></svg>
                      </span>
                    )}
                    {cepOk && !cepLoading && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-400 text-sm">✓</span>
                    )}
                  </div>
                </div>
                {cepOk && (
                  <>
                    <div className="col-span-2">
                      <label className="block text-xs text-muted mb-1">Logradouro</label>
                      <input value={street} onChange={e => setStreet(e.target.value)} className="input-field w-full" />
                    </div>
                    <div>
                      <label className="block text-xs text-muted mb-1">Número *</label>
                      <input value={numero} onChange={e => setNumero(e.target.value)} placeholder="123" className="input-field w-full" />
                    </div>
                    <div>
                      <label className="block text-xs text-muted mb-1">Complemento</label>
                      <input value={complemento} onChange={e => setComplemento(e.target.value)} placeholder="Apto 4B" className="input-field w-full" />
                    </div>
                    <div>
                      <label className="block text-xs text-muted mb-1">Bairro</label>
                      <input value={neighborhood} onChange={e => setNeighborhood(e.target.value)} className="input-field w-full" />
                    </div>
                    <div>
                      <label className="block text-xs text-muted mb-1">Cidade / UF</label>
                      <input value={`${city} / ${state}`} disabled className="input-field w-full opacity-60" />
                    </div>
                  </>
                )}
              </div>
              <button
                onClick={() => setStep(2)}
                disabled={!nome || !cpf || !email || !cepOk || !numero}
                className="btn-primary w-full py-4 rounded-full font-medium disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continuar para entrega →
              </button>
            </div>
          )}

          {/* STEP 2 – Frete */}
          {step === 2 && (
            <div className="card rounded-2xl p-6 space-y-5">
              <div>
                <h2 className="font-serif text-2xl text-silver-bright">Opções de entrega</h2>
                <p className="text-sm text-muted mt-1">Entregar em: {cep} — {city}/{state}</p>
              </div>
              <div className="space-y-3">
                {SHIPPING.map((opt) => (
                  <label
                    key={opt.id}
                    className={`flex items-center gap-4 rounded-xl p-4 cursor-pointer border transition ${shipping?.id === opt.id ? "border-champagne bg-champagne/5" : "border-default hover:border-champagne/40"}`}
                  >
                    <input type="radio" name="shipping" className="accent-champagne" checked={shipping?.id === opt.id} onChange={() => setShipping(opt)} />
                    <div className="flex-1">
                      <div className="font-medium text-silver-bright">{opt.label}</div>
                      <div className="text-xs text-muted">{opt.sub} · {opt.days}</div>
                    </div>
                    <div className="font-serif text-lg" style={{ color: "var(--champagne)" }}>
                      {formatPrice(opt.price)}
                    </div>
                  </label>
                ))}
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(1)} className="flex-1 py-3 rounded-full border border-default text-silver hover:text-silver-bright transition text-sm">← Voltar</button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!shipping}
                  className="flex-1 btn-primary py-3 rounded-full font-medium disabled:opacity-40"
                >
                  Ir para pagamento →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 – Pagamento */}
          {step === 3 && (
            <div className="rounded-2xl overflow-hidden border border-default">
              {/* MP header */}
              <div className="px-6 py-4 flex items-center gap-3" style={{ background: "#009ee3" }}>
                <div className="font-bold text-white text-xl tracking-tight">mercado pago</div>
                <div className="ml-auto flex items-center gap-1 text-white/80 text-xs">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Ambiente de teste
                </div>
              </div>

              <div className="p-6 space-y-5" style={{ background: "var(--bg-card)" }}>
                <div>
                  <div className="text-sm text-muted mb-1">Cobrança de</div>
                  <div className="font-serif text-3xl text-silver-bright">{formatPrice(orderTotal)}</div>
                  <div className="text-xs text-muted mt-0.5">para Tutupratas</div>
                </div>

                {/* Tabs */}
                <div className="flex gap-1 p-1 rounded-xl border border-default" style={{ background: "var(--bg-soft)" }}>
                  {([["pix","PIX"],["cartao","Cartão"],["boleto","Boleto"]] as [PayTab,string][]).map(([id,label]) => (
                    <button
                      key={id}
                      onClick={() => setPayTab(id)}
                      className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition ${payTab === id ? "text-white" : "text-muted hover:text-silver"}`}
                      style={{ background: payTab === id ? "#009ee3" : "transparent" }}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* PIX */}
                {payTab === "pix" && (
                  <div className="flex flex-col items-center gap-5">
                    <FakeQR />
                    <div className="w-full">
                      <div className="text-xs text-muted mb-1">Código Copia e Cola</div>
                      <div className="flex gap-2">
                        <div className="flex-1 px-3 py-2 rounded-lg border border-default text-xs text-muted font-mono truncate" style={{ background: "var(--bg-soft)" }}>
                          {FAKE_PIX.slice(0,40)}...
                        </div>
                        <button
                          onClick={() => copyToClipboard(FAKE_PIX)}
                          className="px-3 py-2 rounded-lg text-xs font-medium transition border"
                          style={{ borderColor: "var(--champagne)", color: "var(--champagne)", background: copied ? "var(--champagne)" : "transparent", ...(copied ? { color: "#07090f" } : {}) }}
                        >
                          {copied ? "Copiado!" : "Copiar"}
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-muted text-center">O QR Code expira em <strong className="text-silver">30 minutos</strong>. Após o pagamento, o pedido é confirmado automaticamente.</p>
                    <button onClick={handlePagar} disabled={paying} className="w-full py-4 rounded-full font-bold text-white transition" style={{ background: paying ? "#007ab8" : "#009ee3" }}>
                      {paying ? "Confirmando pagamento..." : "Simular pagamento PIX ✓"}
                    </button>
                  </div>
                )}

                {/* Cartão */}
                {payTab === "cartao" && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs text-muted block mb-1">Número do cartão</label>
                      <input value={cardNum} onChange={e => setCardNum(maskCard(e.target.value))} placeholder="0000 0000 0000 0000" className="input-field w-full font-mono tracking-widest" />
                    </div>
                    <div>
                      <label className="text-xs text-muted block mb-1">Nome no cartão</label>
                      <input value={cardName} onChange={e => setCardName(e.target.value.toUpperCase())} placeholder="MARIA SILVA" className="input-field w-full uppercase" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-muted block mb-1">Validade</label>
                        <input value={expiry} onChange={e => setExpiry(maskExpiry(e.target.value))} placeholder="MM/AA" className="input-field w-full" />
                      </div>
                      <div>
                        <label className="text-xs text-muted block mb-1">CVV</label>
                        <input value={cvv} onChange={e => setCvv(e.target.value.replace(/\D/g,"").slice(0,4))} placeholder="123" className="input-field w-full" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-muted block mb-1">Parcelas</label>
                      <select value={parcelas} onChange={e => setParcelas(Number(e.target.value))} className="input-field w-full">
                        {[1,2,3,6,12].map(n => (
                          <option key={n} value={n}>
                            {n}x de {formatPrice(orderTotal / n)}{n === 1 ? " (sem juros)" : n <= 3 ? " sem juros" : " com juros"}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button onClick={handlePagar} disabled={paying || !cardNum || !cardName || !expiry || !cvv} className="w-full py-4 rounded-full font-bold text-white transition disabled:opacity-40" style={{ background: paying ? "#007ab8" : "#009ee3" }}>
                      {paying ? "Processando..." : `Pagar ${formatPrice(orderTotal)}`}
                    </button>
                  </div>
                )}

                {/* Boleto */}
                {payTab === "boleto" && (
                  <div className="space-y-5">
                    <FakeBarcode />
                    <div>
                      <div className="text-xs text-muted mb-1">Linha digitável</div>
                      <div className="flex gap-2">
                        <div className="flex-1 px-3 py-2 rounded-lg border border-default text-xs text-muted font-mono" style={{ background: "var(--bg-soft)" }}>
                          {FAKE_BOLETO}
                        </div>
                        <button onClick={() => copyToClipboard(FAKE_BOLETO)} className="px-3 py-2 rounded-lg text-xs font-medium border transition" style={{ borderColor: "var(--champagne)", color: "var(--champagne)" }}>
                          Copiar
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-muted">Vencimento em <strong className="text-silver">2 dias úteis</strong>. O pedido é confirmado após a compensação bancária.</p>
                    <button onClick={handlePagar} disabled={paying} className="w-full py-4 rounded-full font-bold text-white" style={{ background: paying ? "#007ab8" : "#009ee3" }}>
                      {paying ? "Processando..." : "Simular pagamento via Boleto ✓"}
                    </button>
                  </div>
                )}

                <div className="flex items-center justify-center gap-2 text-xs text-muted pt-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Pagamento 100% seguro · Dados criptografados
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Resumo do pedido ── */}
        <aside className="space-y-4">
          <div className="card rounded-2xl p-5 space-y-4">
            <h3 className="font-medium text-silver-bright">Resumo do pedido</h3>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.slug} className="flex gap-3 items-center">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-soft">
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="56px" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center" style={{ background: "var(--champagne)", color: "#07090f" }}>{item.qty}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-silver leading-tight truncate">{item.name}</div>
                    <div className="text-xs text-muted">{formatPrice(item.price)} / un.</div>
                  </div>
                  <div className="text-sm text-silver-bright">{formatPrice(item.price * item.qty)}</div>
                </div>
              ))}
            </div>
            <div className="border-t border-default pt-4 space-y-2 text-sm">
              <div className="flex justify-between text-muted">
                <span>Subtotal</span><span className="text-silver">{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between text-muted">
                <span>Frete</span>
                <span className="text-silver">
                  {step >= 2 && shipping ? formatPrice(shipping.price) : "—"}
                </span>
              </div>
              <div className="flex justify-between font-semibold text-base pt-2 border-t border-default">
                <span className="text-silver-bright">Total</span>
                <span className="font-serif text-xl" style={{ color: "var(--champagne)" }}>
                  {step >= 2 && shipping ? formatPrice(orderTotal) : formatPrice(total)}
                </span>
              </div>
            </div>
          </div>
          <div className="card rounded-xl p-4 flex items-start gap-3 text-xs text-muted">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0 text-green-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Estoque reservado por 15 min. Frete calculado pelo Melhor Envio para todo o Brasil.
          </div>
        </aside>
      </main>
    </div>
  );
}

/* ── QR Code falso ───────────────────────────────────── */
function FakeQR() {
  const pattern = [
    [1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0],
    [1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0],
    [0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0],
    [1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1],
    [0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0],
    [1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1],
    [0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0],
    [1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0],
    [1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1],
    [1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0],
    [1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0],
    [1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1],
    [1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0],
    [1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1],
  ];
  return (
    <div className="rounded-xl p-3 bg-white" style={{ width: 160, height: 160 }}>
      <svg viewBox="0 0 21 21" width="136" height="136" shapeRendering="crispEdges">
        {pattern.map((row, y) =>
          row.map((cell, x) =>
            cell ? <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill="#000" /> : null
          )
        )}
      </svg>
    </div>
  );
}

/* ── Código de barras falso ───────────────────────────── */
function FakeBarcode() {
  const bars = Array.from({ length: 80 }, (_, i) => ({ w: [1,2,3][i % 3], gap: [1,2][i % 2] }));
  return (
    <div className="rounded-xl bg-white p-4 flex items-center justify-center overflow-hidden" style={{ height: 80 }}>
      <svg viewBox="0 0 200 50" width="100%" height="50">
        {bars.reduce<{ x: number; els: React.ReactNode[] }>(({ x, els }, bar, i) => {
          const el = <rect key={i} x={x} y={0} width={bar.w} height={50} fill="#000" />;
          return { x: x + bar.w + bar.gap, els: [...els, el] };
        }, { x: 0, els: [] }).els}
      </svg>
    </div>
  );
}
