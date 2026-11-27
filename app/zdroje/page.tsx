import { PublicPage } from "../components/site-chrome";

export const metadata = {
  title: "Zdroje pro OSVČ | Daňovec",
  description: "Odkazy na oficiální informace o daních a povinnostech českých OSVČ.",
};

const resources = [
  {
    title: "Daně a podnikání",
    label: "FINANČNÍ SPRÁVA",
    text: "Oficiální informace k dani z příjmů a povinnostem podnikatelů.",
    href: "https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/fyzicke-osoby/podnikatel-osvc",
  },
  {
    title: "Sociální pojištění",
    label: "ČSSZ",
    text: "Informace a služby České správy sociálního zabezpečení pro OSVČ.",
    href: "https://eportal.cssz.cz/web/portal/o-eportalu",
  },
  {
    title: "Zdravotní pojištění",
    label: "VZP ČR",
    text: "Přehled informací o zdravotním pojištění pro osoby samostatně výdělečně činné.",
    href: "https://www.vzp.cz/platci/informace/osvc",
  },
];

export default function ResourcesPage() {
  return (
    <PublicPage>
      <section className="info-hero">
        <span className="section-eyebrow">UŽITEČNÉ ODKAZY</span>
        <h1>Ověřené informace.<br /><span>Přímo od zdroje.</span></h1>
        <p>Výběr oficiálních webů, kde najdete aktuální informace k podnikání a povinnostem OSVČ.</p>
      </section>
      <section className="info-cards">
        {resources.map((resource) => (
          <article className="feature-card" key={resource.title}>
            <div className="feature-top"><span>{resource.label}</span></div>
            <h2>{resource.title}</h2>
            <p>{resource.text}</p>
            <a href={resource.href} target="_blank" rel="noreferrer" aria-label={`Otevřít: ${resource.title}`}><span className="arrow" aria-hidden="true">↗</span></a>
          </article>
        ))}
      </section>
      <p className="info-note">Daňové předpisy se mění. Pro konkrétní situaci si vždy ověřte aktuální informace u příslušného úřadu nebo odborníka.</p>
    </PublicPage>
  );
}
