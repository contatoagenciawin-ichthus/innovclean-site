import Link from "next/link";

const services = [
  ["01", "Daily office cleaning", "Flexible office-cleaning routines built around your workplace, team and schedule."],
  ["02", "Housekeeping service", "Professional workplace support that keeps shared spaces ready, orderly and welcoming."],
  ["03", "Cleaning & hygiene supplies", "Reliable management of cleaning and hygiene essentials, including environmentally considered options."],
  ["04", "Specialist electronics cleaning", "Careful cleaning for environments with a high volume of sensitive electronic equipment."],
];

const strengths = [
  ["Quality", "Consistent standards and close attention to detail."],
  ["Reliability", "A service planned around your schedule and workplace."],
  ["Sustainability", "Responsible products and methods wherever suitable."],
  ["Personal service", "Clear communication from a family-owned business."],
];

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "InnovClean Services Ltd",
    url: "https://innovclean.co.uk",
    telephone: "+44 7759 055926",
    email: "sales@innovclean.co.uk",
    areaServed: ["London", "United Kingdom"],
    description:
      "Commercial cleaning services focused on quality, reliability, sustainability and customer care.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="hero-v2">
        <div className="hero-architecture" aria-hidden="true">
          <span className="tower tower-a" />
          <span className="tower tower-b" />
          <span className="tower tower-c" />
          <span className="tower tower-d" />
          <span className="hero-lines" />
        </div>

        <div className="shell hero-v2-grid">
          <div className="hero-v2-copy">
            <p className="eyebrow">COMMERCIAL CLEANING · LONDON</p>
            <h1>
              Commercial cleaning,
              <em> shaped around your space.</em>
            </h1>
            <p className="hero-v2-lead">
              Professional cleaning for workplaces that value quality, reliability and environmental responsibility.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="https://wa.me/447759055926" target="_blank" rel="noreferrer">
                Request a free quote
              </a>
              <Link className="text-link" href="/services">Explore services ↗</Link>
            </div>
          </div>

          <div className="hero-side">
            <div className="hero-side-label">INNOVCLEAN / 2026</div>
            <div className="hero-side-message">
              <span>01</span>
              <p>Clean spaces should support the people who use them, not interrupt the way they work.</p>
            </div>
            <div className="hero-side-footer">
              <span>Family-owned</span>
              <span>London & surrounding areas</span>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-band">
        <div className="shell brand-band-grid">
          <p>QUALITY</p>
          <p>RELIABILITY</p>
          <p>SUSTAINABILITY</p>
          <p>PERSONAL SERVICE</p>
        </div>
      </section>

      <section className="section intro-section">
        <div className="shell editorial-grid">
          <div>
            <p className="eyebrow">ABOUT INNOVCLEAN</p>
            <h2>Built for modern workplaces. Delivered with a personal touch.</h2>
          </div>
          <div className="editorial-copy">
            <p className="editorial-lead">
              InnovClean Services is a family-owned commercial cleaning company serving London and surrounding areas.
            </p>
            <p>
              Our approach combines dependable service, environmental responsibility and close attention to the practical needs of each client. Every plan is shaped around the property, frequency and standards required.
            </p>
            <Link className="text-link" href="/about">Discover our approach ↗</Link>
          </div>
        </div>
      </section>

      <section className="section services-editorial">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow eyebrow-on-dark">SERVICES</p>
              <h2>Care for the spaces that keep business moving.</h2>
            </div>
            <p>
              From daily office routines to specialist support, our services can be combined into one practical cleaning plan.
            </p>
          </div>

          <div className="service-list">
            {services.map(([number, title, text]) => (
              <article className="service-row" key={number}>
                <span className="service-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>

          <div className="services-foot">
            <span>Window cleaning</span>
            <span>Deep cleaning</span>
            <span>Carpet cleaning</span>
            <span>Sanitisation</span>
            <Link href="/services">View all services ↗</Link>
          </div>
        </div>
      </section>

      <section className="section architecture-section">
        <div className="shell architecture-grid">
          <div className="architecture-art" aria-hidden="true">
            <div className="arch-block arch-1" />
            <div className="arch-block arch-2" />
            <div className="arch-block arch-3" />
            <div className="arch-block arch-4" />
            <div className="arch-caption">LONDON · ORDER · DETAIL · CLARITY</div>
          </div>

          <div className="architecture-copy">
            <p className="eyebrow">WHY INNOVCLEAN</p>
            <h2>Professional standards, without losing the human side of service.</h2>
            <p className="section-lead">
              Our identity is rooted in the precision, structure and contemporary urban character of London. The same principles guide how we work: organised, considered and attentive to detail.
            </p>

            <div className="strength-list">
              {strengths.map(([title, text]) => (
                <div className="strength-item" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="shell">
          <div className="section-heading section-heading-center">
            <p className="eyebrow">HOW IT STARTS</p>
            <h2>A clear plan from the first conversation.</h2>
          </div>

          <div className="process-grid">
            <div>
              <span>01</span>
              <h3>Understand the space</h3>
              <p>We start with your location, type of workplace, schedule and priorities.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Shape the service</h3>
              <p>We define the right combination of services and cleaning frequency.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Keep standards aligned</h3>
              <p>Clear communication helps the service adapt as your needs change.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="shell">
          <div className="cta-card">
            <div>
              <p className="eyebrow eyebrow-on-dark">GET IN TOUCH</p>
              <h2>A cleaner workplace starts with the right plan.</h2>
              <p>Tell us about your space and what you need. We&apos;ll take it from there.</p>
            </div>
            <div className="cta-actions">
              <a className="button button-lime" href="https://wa.me/447759055926" target="_blank" rel="noreferrer">
                Request a quote
              </a>
              <a className="text-link text-link-light" href="mailto:sales@innovclean.co.uk">
                sales@innovclean.co.uk ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
