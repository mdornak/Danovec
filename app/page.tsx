import { SiteFooter, SiteHeader } from "./components/site-chrome";

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>
);

const features = [
  { number: "01", icon: "↗", title: "Příjmy bez hledání", text: "Mějte přehled o tom, co jste vydělali. Všechny důležité částky najdete na jednom místě." },
  { number: "02", icon: "⌑", title: "Výdaje pod kontrolou", text: "Získejte lepší přehled o nákladech svého podnikání a udržujte si v nich pořádek." },
  { number: "03", icon: "◷", title: "Termíny, které nepřekvapí", text: "Důležité daňové povinnosti a termíny přehledně během celého roku." },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero" id="domu">
        <div className="hero-copy">
          <h1>V podnikání<br />jasno. <span>V daních taky.</span></h1>
          <p className="hero-description">Příjmy, výdaje i důležité termíny. Daňovec vám pomůže udělat si v podnikatelských financích pořádek — srozumitelně a bez zbytečného stresu.</p>
          <div className="hero-actions">
            <a href="/funkce" className="button-primary">Prozkoumat Daňovce <Arrow diagonal /></a>
            <a href="/jak-to-funguje" className="button-secondary">Jak to funguje</a>
          </div>
        </div>
        <div className="hero-panel" aria-hidden="true" />
        <div className="hero-divider" aria-hidden="true" />
      </section>
      
      <section className="features section-wrap" id="funkce"><div className="section-heading"><div><span className="section-eyebrow">PODNIKÁNÍ MÁ DOST VÝZEV</span><h2>Čísla dávají smysl,<br /><span>když jsou na jednom místě.</span></h2></div><p>Daňovec vám pomůže zorientovat se v tom podstatném. Méně hledání v tabulkách, více prostoru na vlastní práci.</p></div><div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.number}><div className="feature-top"><span>{feature.number} / 03</span><i>{feature.icon}</i></div><h3>{feature.title}</h3><p>{feature.text}</p><a href="/jak-to-funguje" aria-label={`Více o: ${feature.title}`}><Arrow diagonal /></a></article>)}</div></section>
      <section className="faq section-wrap" id="otazky"><div><span className="section-eyebrow">ČASTÉ OTÁZKY</span><h2>Na rovinu.</h2><p>Daňové věci si zaslouží jasné odpovědi.</p></div><div className="faq-list"><details><summary>Pro koho je Daňovec určený? <span>＋</span></summary><p>Daňovec navrhujeme pro české OSVČ, které chtějí mít své podnikatelské finance a povinnosti přehledněji uspořádané.</p></details><details><summary>Nahradí Daňovec účetní nebo daňového poradce? <span>＋</span></summary><p>Ne. Daňovec má pomoci s orientací a každodenním přehledem. Konkrétní daňové a účetní otázky vždy konzultujte s kvalifikovaným odborníkem.</p></details><details><summary>Je aplikace už dostupná? <span>＋</span></summary><p>Teď představujeme Daňovce a jeho směr. Veřejná stránka je první krok; přihlášenou aplikaci zatím nespouštíme.</p></details></div></section>
      <SiteFooter />
    </main>
  );
}
