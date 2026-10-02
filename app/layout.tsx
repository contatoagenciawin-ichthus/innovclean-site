import type { Metadata } from "next";
import Link from "next/link";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://innovclean.co.uk"),
  title: {
    default: "InnovClean Services | Commercial Cleaning in London",
    template: "%s | InnovClean Services",
  },
  description:
    "Tailored, sustainable commercial cleaning services for offices and workplaces across London and surrounding areas.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "InnovClean Services",
    title: "InnovClean Services | Commercial Cleaning in London",
    description:
      "Professional commercial cleaning shaped around your workplace, your people and your standards.",
    url: "https://innovclean.co.uk",
  },
};

const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body className={manrope.variable}>
        <header className="site-header">
          <div className="shell header-inner">
            <Link href="/" className="header-brand" aria-label="InnovClean home">
              <img
                src="/brand/logo-250x100-para-fundo-claro.png"
                alt="InnovClean Services Ltd"
                className="header-logo"
                width="250"
                height="100"
              />
            </Link>

            <nav className="desktop-nav" aria-label="Primary navigation">
              {nav.map((item) => (
                <Link key={item.href} href={item.href}>{item.label}</Link>
              ))}
              <a className="header-cta" href="https://wa.me/447759055926" target="_blank" rel="noreferrer">
                Request a quote
              </a>
            </nav>

            <details className="mobile-nav">
              <summary aria-label="Open navigation">Menu</summary>
              <div className="mobile-nav-panel">
                {nav.map((item) => (
                  <Link key={item.href} href={item.href}>{item.label}</Link>
                ))}
                <a href="https://wa.me/447759055926" target="_blank" rel="noreferrer">Request a quote</a>
              </div>
            </details>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="shell footer-grid">
            <div>
              <Link href="/" className="footer-brand" aria-label="InnovClean home">
                <img
                  src="/brand/logo-250x100-para-fundo-escuro.png"
                  alt="InnovClean Services Ltd"
                  className="footer-logo"
                  width="250"
                  height="100"
                />
              </Link>
              <p className="footer-copy">
                Commercial cleaning built around quality, reliability, sustainability and the people who use each space.
              </p>
            </div>
            <div>
              <p className="footer-label">Explore</p>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
            </div>
            <div>
              <p className="footer-label">Contact</p>
              <a href="tel:+447759055926">+44 7759 055926</a>
              <a href="mailto:sales@innovclean.co.uk">sales@innovclean.co.uk</a>
              <p>London · United Kingdom</p>
            </div>
          </div>
          <div className="shell footer-bottom">
            <span>© {new Date().getFullYear()} InnovClean Services Ltd.</span>
            <span>London · United Kingdom</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
