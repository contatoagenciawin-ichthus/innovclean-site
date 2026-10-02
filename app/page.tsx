import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Daily office cleaning",
    text: "Customised routines for offices of every size, helping teams and visitors feel comfortable in a consistently well-kept space.",
  },
  {
    number: "02",
    title: "Housekeeping service",
    text: "Professional workplace support, from meeting-room readiness to the everyday details that keep an office running smoothly.",
  },
  {
    number: "03",
    title: "Cleaning & hygiene supplies",
    text: "Reliable management of cleaning products and essential hygiene supplies, including environmentally considered options.",
  },
  {
    number: "04",
    title: "Specialist electronics cleaning",
    text: "Careful cleaning for spaces with high volumes of electronic equipment, helping reduce dust around sensitive technology.",
  },
];

const strengths = [
  ["Tailored", "A cleaning plan built around your property, schedule and priorities."],
  ["Responsible", "Eco-conscious products and methods are prioritised wherever suitable."],
  ["Consistent", "Trained teams and local management support reliable day-to-day standards."],
  ["Responsive", "A customer-centred approach with clear communication and adaptable service."],
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
      "Commercial cleaning services focused on tailored solutions, sustainability, quality and customer care.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-on-dark">COMMERCIAL CLEANING · LONDON & UK</p>
            <h1>
              Cleaner spaces.<br />
              Better days.<br />
              <span>Less impact.</span>
            </h1>
            <p className="hero-lead">
              Tailored commercial cleaning that protects your workplace, supports your people and respects the planet.
            </p>
            <div className="hero-actions">
              <a className="button button-lime" href="https://wa.me/447759055926" target="_blank" rel="noreferrer">
                Get a free quote
              </a>
              <Link className="text-link text-link-light" href="/services">
                Explore services ↗
              </Link>
            </div>
          </div>

          <div className="hero-visual" aria-label="InnovClean service principles">
            <div className="visual-card">
              <span className="visual-kicker">INNOVCLEAN</span>
              <strong>
                Commercial<br />
                cleaning,<br />
                rethought.
              </strong>
              <span className="visual-note">Tailored · Sustainable · Reliable</span>
            </div>
            <div className="visual-pill">Space · Health · Planet</div>
          </div>
        </div>

        <div className="shell hero-proof">
          <span>Family-owned business</span>
          <span>Flexible scheduling</span>
          <span>Eco-conscious approach</span>
          <span>London & surrounding areas</span>
        </div>
      </section>

      <section className="section">
        <div className="shell intro-grid">
          <div>
            <p className="eyebrow">HOW WE WORK</p>
            <h2>Cleaning built around the way your space works.</h2>
          </div>
          <div className="intro-copy">
            <p>
              InnovClean is a family-owned commercial cleaning company focused on quality, environmental responsibility and the well-being of the people who use each space.
            </p>
            <p>
              Rather than forcing every workplace into the same routine, we shape the service around the client: the property, the schedule, the standards and the details that matter.
            </p>
            <Link className="text-link" href="/about">More about InnovClean ↗</Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">CORE SERVICES</p>
            <h2>Professional care for the spaces that keep business moving.</h2>
            <p className="section-lead">
              From everyday office cleaning to more specialised workplace support, every service can be adapted to the environment and level of care required.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>

          <div className="service-strip">
            <span>Window cleaning</span>
            <span>Deep cleaning</span>
            <span>Carpet cleaning</span>
            <span>Sanitisation services</span>
          </div>

          <div style={{ marginTop: 38 }}>
            <Link className="button button-dark" href="/services">View all services</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell philosophy-grid">
          <div className="philosophy-panel" aria-hidden="true">
            <div className="philosophy-ring">
              <span className="philosophy-leaf" />
            </div>
          </div>

          <div className="philosophy-copy">
            <p className="eyebrow">WHY INNOVCLEAN</p>
            <h2>More than a clean surface.</h2>
            <p className="section-lead">
              A well-maintained workplace should feel effortless. Behind that feeling is a service that is planned carefully, delivered consistently and adjusted when your needs change.
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

      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading section-heading-center">
            <p className="eyebrow">A SIMPLE PROCESS</p>
            <h2>Clear from the first conversation.</h2>
            <p className="section-lead">
              We start with your space and priorities, then build a service plan that can evolve with your business.
            </p>
          </div>

          <div className="process-grid">
            <div>
              <span>01</span>
              <h3>Tell us what you need</h3>
              <p>Share your location, type of workplace, schedule and priorities.</p>
            </div>
            <div>
              <span>02</span>
              <h3>We shape the plan</h3>
              <p>We define the right services and frequency for your environment.</p>
            </div>
            <div>
              <span>03</span>
              <h3>We keep standards visible</h3>
              <p>Ongoing communication helps the service stay aligned with your expectations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="shell">
          <div className="cta-card">
            <div>
              <p className="eyebrow eyebrow-on-dark">LET&apos;S TALK</p>
              <h2>A cleaner workplace starts with a plan that fits.</h2>
              <p>Tell us about your space, schedule and priorities. We&apos;ll shape the service around you.</p>
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
