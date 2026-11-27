import { PublicPage } from "../components/site-chrome";

export const metadata = {
  title: "Jak Daňovec funguje | Daňovec",
  description: "Zjistěte, jaký je záměr Daňovce a jak má OSVČ pomáhat s přehledem podnikatelských financí.",
};

const steps = [
  { number: "01", title: "Zapište si důležité údaje", text: "Příjmy a výdaje patří k základním informacím o vašem podnikání. Daňovec je navržen tak, aby byly přehledně pohromadě." },
  { number: "02", title: "Sledujte svůj přehled", text: "V jednom pohledu se zorientujete v tom, jak se vašemu podnikání průběžně daří." },
  { number: "03", title: "Mějte na paměti termíny", text: "Přehled důležitých povinností vám pomůže lépe plánovat, co vás v průběhu roku čeká." },
];

export default function HowItWorksPage() {
  return (
    <PublicPage>
      <section className="info-hero">
        <span className="section-eyebrow">JEDNODUŠE A SROZUMITELNĚ</span>
        <h1>Méně hledání.<br /><span>Více přehledu.</span></h1>
        <p>Daňovec navrhujeme tak, aby se OSVČ mohly snadněji zorientovat ve svých podnikatelských financích.</p>
      </section>
      <section className="steps-list">
        {steps.map((step) => <article className="step-card" key={step.number}><span>{step.number}</span><div><h2>{step.title}</h2><p>{step.text}</p></div></article>)}
      </section>
      <p className="info-note">Veřejná stránka představuje směr produktu. Přihlášená aplikace zatím není spuštěná.</p>
    </PublicPage>
  );
}
