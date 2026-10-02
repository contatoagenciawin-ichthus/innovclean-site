import Link from "next/link";

export default function NotFound() {
  return (
    <section className="legal-page">
      <div className="shell legal-shell">
        <p className="eyebrow">404</p>
        <h1>This page is spotless. A little too spotless.</h1>
        <p className="legal-intro">The page you&apos;re looking for isn&apos;t here.</p>
        <Link className="button button-dark" href="/">Back to home</Link>
      </div>
    </section>
  );
}
