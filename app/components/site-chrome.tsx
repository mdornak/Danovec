import type { ReactNode } from "react";

export function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>;
}

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <a href="/" className="brand" aria-label="Daňovec, domů"><BrandMark /><span>daňovec</span></a>
      <nav aria-label="Hlavní navigace">
        <a href="/co-umi">Co umí</a>
        <a href="/jak-to-funguje">Jak to funguje</a>
        <a href="/otazky">Časté otázky</a>
      </nav>
      <a className="header-cta" href="/jak-to-funguje">Seznámit se <Arrow /></a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a href="/" className="brand footer-brand"><BrandMark /><span>daňovec</span></a>
      <div className="footer-links"><a href="/co-umi">Co umí</a><a href="/otazky">Časté otázky</a></div>
      <span className="copyright">© 2026 Daňovec</span>
    </footer>
  );
}

export function PublicPage({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main className="info-page">{children}</main><SiteFooter /></>;
}
