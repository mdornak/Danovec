import { PublicPage } from "../components/site-chrome";

export const metadata = {
  title: "Časté otázky | Daňovec",
  description: "Odpovědi na časté otázky o Daňovci, jeho určení a vztahu k účetnímu a daňovému poradenství.",
};

export default function QuestionsPage() {
  return (
    <PublicPage>
      <section className="info-hero">
        <span className="section-eyebrow">ČASTÉ OTÁZKY</span>
        <h1>Na rovinu.<br /><span>Srozumitelně.</span></h1>
        <p>Daňové věci si zaslouží jasné odpovědi.</p>
      </section>
      <section className="faq-list info-faq">
        <details><summary>Pro koho je Daňovec určený? <span>＋</span></summary><p>Daňovce navrhujeme pro české OSVČ, které chtějí mít své podnikatelské finance a povinnosti přehledněji uspořádané.</p></details>
        <details><summary>Nahradí Daňovec účetní nebo daňového poradce? <span>＋</span></summary><p>Ne. Daňovec má pomoci s orientací a každodenním přehledem. Konkrétní daňové a účetní otázky vždy konzultujte s kvalifikovaným odborníkem.</p></details>
        <details><summary>Je aplikace už dostupná? <span>＋</span></summary><p>Veřejná stránka představuje Daňovce a jeho směr. Přihlášenou aplikaci zatím nespouštíme.</p></details>
      </section>
    </PublicPage>
  );
}
