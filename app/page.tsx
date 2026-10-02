import Image from "next/image";
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
        <div className="shell hero-v2-grid">
          <div className="hero-v2-copy" data-reveal>
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

          <div className="hero-media" data-reveal>
            <Image
              src="/brand/london-aerial.jpg"
              alt="London commercial district skyline"
              fill
              priority
              sizes="(max-width: 980px) 100vw, 43vw"
              className="hero-city-image"
              quality={92}
            />
            <div className="hero-media-grid" aria-hidden="true" />
            <Image
              src="/brand/mark-construction-light.png"
              alt=""
              width={1920}
              height={1080}
              className="hero-construction"
              aria-hidden="true"
            />
            <div className="hero-media-card">
              <span>01 / LONDON</span>
              <p>Precision, order and attention to detail — built into every service.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-band" data-reveal>
        <div className="shell brand-band-grid">
          <p>QUALITY</p>
          <p>RELIABILITY</p>
          <p>SUSTAINABILITY</p>
          <p>PERSONAL SERVICE</p>
        </div>
      </section>

      <section className="section intro-section">
        <div className="shell editorial-grid" data-reveal>
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
          <div className="section-heading split-heading" data-reveal>
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
              <article className="service-row" key={number} data-reveal>
                <span className="service-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>

          <div className="services-foot" data-reveal>
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
          <div className="architecture-art" data-reveal>
            <Image
              src="/brand/london-skyline.jpg"
              alt="Contemporary London office skyline"
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
              className="architecture-photo"
              quality={90}
            />
            <div className="architecture-wash" aria-hidden="true" />
            <Image
              src="/brand/mark-construction-light.png"
              alt=""
              width={1920}
              height={1080}
              className="construction-overlay"
              aria-hidden="true"
            />
            <div className="arch-caption">LONDON · ORDER · DETAIL · CLARITY</div>
          </div>

          <div className="architecture-copy" data-reveal>
            <p className="eyebrow">WHY INNOVCLEAN</p>
            <h2>Professional standards, without losing the human side of service.</h2>
            <p className="section-lead">
              The InnovClean identity draws on the precision, structure and contemporary urban character of London. The same principles guide how we work: organised, considered and attentive to detail.
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

      <section className="sustainability-band">
        <Image
          src="/brand/sustainability-forest.jpg"
          alt="Green forest representing InnovClean's environmental responsibility"
          fill
          sizes="100vw"
          className="sustainability-image"
          quality={90}
        />
        <div className="sustainability-shade" aria-hidden="true" />
        <div className="shell sustainability-content" data-reveal>
          <p className="eyebrow eyebrow-on-dark">RESPONSIBILITY</p>
          <h2>Cleaner spaces, with less unnecessary impact.</h2>
          <p>
            We prioritise environmentally considered products and methods where they are appropriate, while keeping service quality and the needs of each workplace at the centre.
          </p>
        </div>
      </section>

      <section className="section process-section">
        <div className="shell">
          <div className="section-heading section-heading-center" data-reveal>
            <p className="eyebrow">HOW IT STARTS</p>
            <h2>A clear plan from the first conversation.</h2>
          </div>

          <div className="process-grid" data-reveal>
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
          <div className="cta-card" data-reveal>
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
