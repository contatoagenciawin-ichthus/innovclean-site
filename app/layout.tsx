import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

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
      "Tailored commercial cleaning that protects your workplace, supports your people and respects the planet.",
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
      <body className={inter.className}>
        <header className="site-header">
          <div className="shell header-inner">
            <Link className="brand" href="/" aria-label="InnovClean home">
              <span className="brand-mark" aria-hidden="true" />
              <span>InnovClean</span>
            </Link>

            <nav className="desktop-nav" aria-label="Primary navigation">
              {nav.map((item) => (
                <Link key={item.href} href={item.href}>{item.label}</Link>
              ))}
              <a className="button button-small" href="https://wa.me/447759055926" target="_blank" rel="noreferrer">
                Get a quote
              </a>
            </nav>

            <details className="mobile-nav">
              <summary aria-label="Open navigation">Menu</summary>
              <div className="mobile-nav-panel">
                {nav.map((item) => (
                  <Link key={item.href} href={item.href}>{item.label}</Link>
                ))}
                <a href="https://wa.me/447759055926" target="_blank" rel="noreferrer">Get a quote</a>
              </div>
            </details>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="shell footer-grid">
            <div>
              <Link className="brand brand-light" href="/">
                <span className="brand-mark" aria-hidden="true" />
                <span>InnovClean</span>
              </Link>
              <p className="footer-copy">
                Tailored commercial cleaning with a focus on quality, people and environmental responsibility.
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
            <span>Commercial cleaning across London and surrounding areas.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
