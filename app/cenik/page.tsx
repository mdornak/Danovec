import { PublicPage } from "../components/site-chrome";

export const metadata = {
  title: "Ceník | Daňovec",
  description: "Informace o cenách Daňovce zveřejníme před spuštěním aplikace.",
};

export default function PricingPage() {
  return (
    <PublicPage>
      <section className="info-hero pricing-hero">
        <span className="section-eyebrow">CENÍK</span>
        <h1>Férově a přehledně.<br /><span>Ceny připravujeme.</span></h1>
        <p>Ceník zveřejníme před spuštěním aplikace. Daňovec zatím připravujeme pro české OSVČ.</p>
        <a href="/funkce" className="button-primary pricing-button">Prohlédnout funkce <span className="arrow" aria-hidden="true">↗</span></a>
      </section>
    </PublicPage>
  );
}
