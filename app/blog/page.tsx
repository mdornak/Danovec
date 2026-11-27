import { PublicPage } from "../components/site-chrome";

export const metadata = {
  title: "Blog | Daňovec",
  description: "Praktické články a novinky pro české OSVČ. Blog Daňovce připravujeme.",
};

const upcoming = ["Daňový kalendář pro OSVČ", "Jak si udržet pořádek v dokladech", "Příjmy a výdaje v podnikání"];

export default function BlogPage() {
  return (
    <PublicPage>
      <section className="info-hero">
        <span className="section-eyebrow">BLOG DAŇOVCE</span>
        <h1>Prakticky o podnikání.<br /><span>Bez zbytečné složitosti.</span></h1>
        <p>Připravujeme články, které pomohou OSVČ lépe se vyznat v každodenních financích a povinnostech.</p>
      </section>
      <section className="info-cards">
        {upcoming.map((title, index) => (
          <article className="feature-card upcoming-card" key={title}>
            <div className="feature-top"><span>ČLÁNEK {String(index + 1).padStart(2, "0")}</span><i>✳</i></div>
            <h2>{title}</h2>
            <p>Článek připravujeme.</p>
          </article>
        ))}
      </section>
    </PublicPage>
  );
}
