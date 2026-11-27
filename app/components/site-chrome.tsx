import type { ReactNode } from "react";

export function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="80 140 320 200" aria-hidden="true" focusable="false">
      <path fill="#080808" d="M186 152 236 188 262 152 312 188 338 152 391 191 294 328 244 292 219 328 168 292 142 328 89 290Z" />
    </svg>
  );
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
