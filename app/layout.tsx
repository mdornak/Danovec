import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daňovec — Daňový přehled bez zbytečného chaosu",
  description:
    "Mějte příjmy, výdaje a daňové povinnosti přehledně na jednom místě. Daňovec pomůže OSVČ lépe se zorientovat ve vlastních číslech.",
  applicationName: "Daňovec",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
