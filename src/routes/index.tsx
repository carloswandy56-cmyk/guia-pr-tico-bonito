import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

// Substitua pelo link real do checkout EscalePay
const CHECKOUT = "https://escalepay.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meta Ads para Iniciantes | E-book 197 MT" },
      { name: "description", content: "Aprenda a criar anúncios no Facebook e Instagram, mesmo sem experiência. E-book por 197 MT." },
      { property: "og:title", content: "Meta Ads para Iniciantes" },
      { property: "og:description", content: "Aprenda a criar anúncios no Facebook e Instagram, mesmo sem experiência." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const Buy = ({ label }: { label: string }) => (
  <a className="lp-btn" href={CHECKOUT} target="_blank" rel="noopener noreferrer">
    <i className="fa-solid fa-cart-shopping" /> {label}
  </a>
);

const dores = ["Nunca criou anúncios.", "Tem medo de perder dinheiro.", "Não sabe utilizar o Gestor de Anúncios.", "Tem poucos clientes.", "Quer divulgar melhor o seu negócio."];
const aprende: [string, string][] = [["fa-bullhorn", "Criar campanhas"], ["fa-users", "Escolher público"], ["fa-wallet", "Definir orçamento"], ["fa-image", "Criar anúncios"], ["fa-chart-line", "Melhorar resultados"], ["fa-shield-halved", "Evitar erros"]];
const recebe: [string, string][] = [["fa-book", "E-book PDF"], ["fa-mobile-screen", "Compatível com telemóvel"], ["fa-list-ol", "Passo a passo"], ["fa-square-check", "Checklist"], ["fa-bullseye", "Estratégias práticas"]];
const faq: [string, string][] = [
  ["Como recebo o e-book?", "Após o pagamento, recebe o acesso ao PDF pela plataforma de compra."],
  ["Preciso de experiência?", "Não. O guia foi feito para quem está a começar do zero."],
  ["Posso ler no telemóvel?", "Sim. O PDF abre em qualquer telemóvel, tablet ou computador."],
  ["Tenho resultados garantidos?", "Não. Os resultados dependem do produto, do público, do anúncio e da otimização."],
];

function Index() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="lp">
      <main>
        <section className="lp-hero lp-fade">
          <div className="lp-book">
            <i className="fa-brands fa-meta" />
            <b>Meta Ads para Iniciantes</b>
            <small>Facebook • Instagram</small>
          </div>
          <h1>Aprenda <span>Meta Ads</span> e Comece a Atrair Clientes</h1>
          <p>Crie anúncios no Facebook e Instagram para atrair clientes e aumentar as vendas, mesmo sem experiência.</p>
          <div className="lp-price"><del>497 MT</del><strong>197 MT</strong></div>
          <Buy label="QUERO O MEU E-BOOK" />
        </section>

        <section className="lp-fade">
          <h2>Este e-book é para si se...</h2>
          <div className="lp-grid">
            {dores.map((d, i) => (
              <div key={d} className={`lp-card${i === 4 ? " full" : ""}`}><i className="fa-solid fa-check" />{d}</div>
            ))}
          </div>
        </section>

        <section className="lp-fade">
          <h2>O que vai aprender</h2>
          <div className="lp-grid">
            {aprende.map(([ic, t]) => <div key={t} className="lp-card"><i className={`fa-solid ${ic}`} />{t}</div>)}
          </div>
        </section>

        <section className="lp-fade">
          <h2>O que recebe</h2>
          <div className="lp-grid">
            {recebe.map(([ic, t], i) => <div key={t} className={`lp-card${i === 4 ? " full" : ""}`}><i className={`fa-solid ${ic}`} />{t}</div>)}
          </div>
        </section>

        <section className="lp-box lp-fade">
          <p>De: <del>497 MT</del></p>
          <p style={{ marginTop: 6 }}>Hoje:</p>
          <div className="lp-price" style={{ margin: 0 }}><strong>197 MT</strong></div>
          <Buy label="COMPRAR AGORA" />
        </section>

        <section className="lp-faq lp-fade">
          <h2>Perguntas frequentes</h2>
          {faq.map(([q, a], i) => (
            <div key={q}>
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                {q} <i className={`fa-solid ${open === i ? "fa-minus" : "fa-plus"}`} />
              </button>
              <div className={`ans${open === i ? " open" : ""}`}><p>{a}</p></div>
            </div>
          ))}
        </section>
      </main>
      <footer>
        <div><a href="#">Política de Privacidade</a>|<a href="#">Termos</a>|<a href="#">Contacto</a></div>
        <p style={{ marginTop: 10 }}>Produto educativo. Os resultados dependem do produto, público, anúncio e otimização.</p>
      </footer>
    </div>
  );
}
