import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet InnovClean Services, a family-owned commercial cleaning company serving London and surrounding areas.",
};

const values = [
  ["Quality", "High standards, attention to detail and a consistent approach to every workplace."],
  ["Sustainability", "Environmentally considered products and methods that help reduce unnecessary impact."],
  ["Integrity", "Clear, honest relationships built around trust and responsible service."],
  ["Innovation", "Practical improvements and new methods that make cleaning more effective and efficient."],
  ["Customer focus", "Listening carefully and adapting the service to the real needs of each client."],
  ["Teamwork", "A supportive approach that recognises great service depends on people working well together."],
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <p className="eyebrow eyebrow-on-dark">ABOUT INNOVCLEAN</p>
            <h1>A family business with a professional standard.</h1>
          </div>
          <p>
            InnovClean Services is a family-owned commercial cleaning company dedicated to creating cleaner, healthier and more welcoming workplaces.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell story-grid">
          <div>
            <p className="eyebrow">OUR APPROACH</p>
            <h2 style={{ margin: 0, fontSize: "clamp(2.5rem,4.5vw,4.8rem)", lineHeight: 1, letterSpacing: "-.06em" }}>
              Care for the space. Respect for the people in it.
            </h2>
          </div>
          <div className="story-copy">
            <p>
              Our culture is built around the well-being of both clients and employees. We combine dependable cleaning standards with a responsive, personalised approach, so the service fits the environment rather than the other way around.
            </p>
            <p>
              Sustainability is part of that responsibility. We prioritise eco-friendly products and thoughtful working methods while keeping the practical needs of each site at the centre of the plan.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell purpose-grid">
          <article className="purpose-card purpose-card-dark">
            <span>MISSION</span>
            <h2>Exceptional cleaning that supports healthier spaces and lasting relationships.</h2>
            <p>We aim to deliver services centred on sustainability, innovation and customer satisfaction.</p>
          </article>

          <article className="purpose-card">
            <span>VISION</span>
            <h2>To help raise the standard of responsible commercial cleaning.</h2>
            <p>By combining quality, eco-conscious practices and a service model that remains personal.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading section-heading-center">
            <p className="eyebrow">OUR VALUES</p>
            <h2>Principles that show up in the work.</h2>
          </div>

          <div className="values-grid">
            {values.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
