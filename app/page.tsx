import { BrandMark, SiteFooter, SiteHeader } from "./components/site-chrome";

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>
);

function DashboardPreview() {
  return (
    <div className="dashboard" aria-label="Ukázka přehledu Daňovec">
      <div className="dash-topline"><span className="dash-window"><i /><i /><i /></span><span>danovec.cz <span className="lock">◆</span></span><span className="dash-menu">•••</span></div>
      <div className="dash-body">
        <aside className="dash-sidebar">
          <div className="dash-brand"><BrandMark /><span>daňovec</span></div>
          <div className="side-label">PRACOVNÍ PROSTOR</div>
          <div className="side-link selected"><span>▦</span> Přehled</div>
          <div className="side-link"><span>↗</span> Příjmy</div>
          <div className="side-link"><span>↙</span> Výdaje</div>
          <div className="side-link"><span>▤</span> Doklady</div>
          <div className="side-label side-label-later">MŮJ ROK</div>
          <div className="side-link"><span>◷</span> Povinnosti</div>
          <div className="side-user"><span className="user-avatar">J</span><span>Jan Novák<small>OSVČ</small></span><span className="user-dots">···</span></div>
        </aside>
        <div className="dash-main">
          <div className="dash-heading"><div><span className="eyebrow">ÚTERÝ, 12. KVĚTNA</span><h3>Dobrý den, Jane <span>✳</span></h3><p>Tady je váš finanční přehled.</p></div><button className="year-select">Rok 2026 <span>⌄</span></button></div>
          <div className="metric-grid">
            <div className="metric"><span>CELKOVÉ PŘÍJMY <b>↗</b></span><strong>684 200 <small>Kč</small></strong><em>za aktuální rok</em></div>
            <div className="metric"><span>EVIDOVANÉ VÝDAJE <b>↗</b></span><strong>128 450 <small>Kč</small></strong><em>za aktuální rok</em></div>
            <div className="metric metric-highlight"><span>PŘEHLED ZA ROK <b>↗</b></span><strong>Na dobré cestě</strong><em><i className="status-dot" /> Vše průběžně evidováno</em></div>
          </div>
          <div className="chart-card"><div className="chart-head"><div><b>Příjmy a výdaje</b><span>Váš přehled v čase</span></div><div className="chart-legend"><i /> Příjmy <i className="legend-out" /> Výdaje</div></div><div className="chart-area"><div className="chart-y"><span>80 tis.</span><span>60 tis.</span><span>40 tis.</span><span>20 tis.</span><span>0 Kč</span></div><div className="chart-plot"><div className="grid-line line-1" /><div className="grid-line line-2" /><div className="grid-line line-3" /><div className="grid-line line-4" /><svg viewBox="0 0 600 150" preserveAspectRatio="none" role="img" aria-label="Ukázkový graf příjmů a výdajů po měsících"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#b7ec72" stopOpacity=".28"/><stop offset="100%" stopColor="#b7ec72" stopOpacity="0"/></linearGradient></defs><path d="M0 117 C35 105 45 110 75 95 S130 102 150 74 S210 88 225 62 S280 80 300 47 S355 65 375 50 S425 56 450 27 S510 49 525 25 S565 38 600 9 L600 150 L0 150Z" fill="url(#chartFill)"/><path d="M0 117 C35 105 45 110 75 95 S130 102 150 74 S210 88 225 62 S280 80 300 47 S355 65 375 50 S425 56 450 27 S510 49 525 25 S565 38 600 9" fill="none" stroke="#83c949" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinecap="round"/><path d="M0 139 C35 136 45 130 75 133 S125 124 150 128 S205 113 225 121 S275 110 300 115 S350 98 375 109 S430 90 450 102 S505 84 525 93 S570 78 600 81" fill="none" stroke="#d4d8ce" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeDasharray="4 5" strokeLinecap="round"/></svg><div className="chart-x"><span>LED</span><span>ÚNO</span><span>BŘE</span><span>DUB</span><span>KVĚ</span><span>ČVN</span><span>ČVC</span><span>SRP</span><span>ZÁŘ</span><span>ŘÍJ</span><span>LIST</span><span>PRO</span></div></div></div></div>
          <div className="dash-bottom"><div className="activity"><div className="bottom-title"><b>Poslední aktivita</b><span>Zobrazit vše <Arrow /></span></div><div className="activity-row"><i className="activity-icon income">↙</i><span>Faktura od Studio Forma<small>Dnes, 10:42 · Příjem</small></span><strong>+ 24 000 Kč</strong></div><div className="activity-row"><i className="activity-icon expense">↗</i><span>Adobe Creative Cloud<small>Včera · Výdaj</small></span><strong className="expense-amount">− 529 Kč</strong></div></div><div className="next-step"><span className="step-icon">✳</span><div><small>DALŠÍ KROK</small><b>Blíží se důležitý termín</b><p>Mějte své povinnosti pod kontrolou.</p></div><Arrow diagonal /></div></div>
        </div>
      </div>
      <div className="floating-note"><span className="note-spark">✳</span><span>Čísla na jednom místě.<br /><b>Klidnější hlava.</b></span><span className="note-check">✓</span></div>
    </div>
  );
}

const features = [
  { number: "01", icon: "↗", title: "Příjmy bez hledání", text: "Mějte přehled o tom, co jste vydělali. Všechny důležité částky najdete na jednom místě." },
  { number: "02", icon: "⌑", title: "Výdaje pod kontrolou", text: "Získejte lepší přehled o nákladech svého podnikání a udržujte si v nich pořádek." },
  { number: "03", icon: "◷", title: "Termíny, které nepřekvapí", text: "Důležité daňové povinnosti a termíny přehledně během celého roku." },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero" id="domu"><div className="hero-copy"><div className="hero-kicker"><span className="kicker-star">✳</span> FINANCE PRO OSVČ, SROZUMITELNĚ</div><h1>V podnikání<br />jasno. <span>V daních taky.</span></h1><p className="hero-description">Příjmy, výdaje i důležité termíny. Daňovec vám pomůže udělat si v podnikatelských financích pořádek — srozumitelně a bez zbytečného stresu.</p><div className="hero-actions"><a href="/co-umi" className="button-primary">Prozkoumat Daňovce <Arrow diagonal /></a><a href="/jak-to-funguje" className="text-link">Jak to funguje <Arrow /></a></div><div className="hero-footnote"><span className="mini-check">✓</span> Přehledně česky <span className="foot-sep">·</span> Navrženo pro OSVČ</div></div><div className="hero-visual"><div className="visual-glow" /><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><DashboardPreview /><span className="visual-caption"><i /> UKÁZKA ROZHRANÍ <span>01 / 03</span></span><span className="visual-stamp">MÉNĚ<br />PAPÍROVÁNÍ<br /><b>VÍC PODNIKÁNÍ</b></span></div></section>
      <section className="trust-strip" aria-label="Pro koho je Daňovec"><span>POSTAVENO PRO LIDI, KTEŘÍ</span><div><span className="trust-icon">↗</span> Podnikají na sebe</div><div><span className="trust-icon">⌘</span> Chtějí mít přehled</div><div><span className="trust-icon">✳</span> Raději tvoří než počítají</div></section>
      <section className="features section-wrap" id="funkce"><div className="section-heading"><div><span className="section-eyebrow">PODNIKÁNÍ MÁ DOST VÝZEV</span><h2>Čísla dávají smysl,<br /><span>když jsou na jednom místě.</span></h2></div><p>Daňovec vám pomůže zorientovat se v tom podstatném. Méně hledání v tabulkách, více prostoru na vlastní práci.</p></div><div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.number}><div className="feature-top"><span>{feature.number} / 03</span><i>{feature.icon}</i></div><h3>{feature.title}</h3><p>{feature.text}</p><a href="#jak-to-funguje" aria-label={`Více o: ${feature.title}`}><Arrow diagonal /></a></article>)}</div></section>
      <section className="faq section-wrap" id="otazky"><div><span className="section-eyebrow">ČASTÉ OTÁZKY</span><h2>Na rovinu.</h2><p>Daňové věci si zaslouží jasné odpovědi.</p></div><div className="faq-list"><details><summary>Pro koho je Daňovec určený? <span>＋</span></summary><p>Daňovec navrhujeme pro české OSVČ, které chtějí mít své podnikatelské finance a povinnosti přehledněji uspořádané.</p></details><details><summary>Nahradí Daňovec účetní nebo daňového poradce? <span>＋</span></summary><p>Ne. Daňovec má pomoci s orientací a každodenním přehledem. Konkrétní daňové a účetní otázky vždy konzultujte s kvalifikovaným odborníkem.</p></details><details><summary>Je aplikace už dostupná? <span>＋</span></summary><p>Teď představujeme Daňovce a jeho směr. Veřejná stránka je první krok; přihlášenou aplikaci zatím nespouštíme.</p></details></div></section>
      <SiteFooter />
    </main>
  );
}
