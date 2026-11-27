import { PublicPage } from "../components/site-chrome";

export const metadata = {
  title: "Co umí Daňovec | Přehled pro OSVČ",
  description: "Zjistěte, jak Daňovec pomáhá OSVČ udělat si pořádek v příjmech, výdajích a důležitých termínech.",
};

const features = [
  { number: "01", title: "Přehled příjmů", text: "Mějte na jednom místě přehled o tom, co jste v podnikání vydělali." },
  { number: "02", title: "Evidence výdajů", text: "Udržujte si pořádek v podnikatelských nákladech a snadno se vraťte k tomu podstatnému." },
  { number: "03", title: "Důležité termíny", text: "Sledujte své povinnosti v průběhu roku a připravte se na ně s předstihem." },
];

export default function FeaturesPage() {
  return (
    <PublicPage>
      <section className="info-hero">
        <span className="section-eyebrow">PŘEHLED PRO ČESKÉ OSVČ</span>
        <h1>Vaše podnikání.<br /><span>Jasně v číslech.</span></h1>
        <p>Daňovec pomáhá dát příjmům, výdajům a důležitým termínům srozumitelné místo.</p>
      </section>
      <section className="info-cards">
        {features.map((feature) => <article className="feature-card" key={feature.number}><div className="feature-top"><span>{feature.number} / 03</span></div><h2>{feature.title}</h2><p>{feature.text}</p></article>)}
      </section>
      <p className="info-note">Daňovec nenahrazuje účetní ani daňové poradenství. Konkrétní otázky vždy konzultujte s kvalifikovaným odborníkem.</p>
    </PublicPage>
  );
}
