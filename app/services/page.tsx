import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Commercial cleaning, housekeeping, hygiene supplies and specialist cleaning services in London.",
};

const services = [
  ["Daily office cleaning", "Customised cleaning for offices of all sizes, with schedules designed around your team, visitors and working day."],
  ["Housekeeping service", "Bespoke housekeeping and hospitality support to help maintain a professional workplace experience."],
  ["Cleaning & hygiene supplies", "Management of cleaning products and hygiene essentials across your premises, including eco-conscious options where suitable."],
  ["Specialist electronics cleaning", "Careful cleaning for environments with a high volume of electronic equipment, focused on reducing dust around sensitive technology."],
  ["Window cleaning", "Professional window care designed to keep glass clean, clear and presentable."],
  ["Deep cleaning", "More intensive cleaning for areas that need a thorough reset beyond the regular routine."],
  ["Carpet cleaning", "Focused carpet care that helps refresh appearance and maintain cleaner flooring in busy environments."],
  ["Sanitisation services", "Enhanced hygiene-focused cleaning for areas where additional attention to shared surfaces is required."],
];

const faqs = [
  ["What areas do you serve?", "We serve London and surrounding areas. Contact us to confirm coverage for your specific location."],
  ["Do you use eco-friendly products?", "Sustainability is a priority, and we use environmentally considered products and methods wherever suitable for the service."],
  ["Can services be tailored to our workplace?", "Yes. Cleaning plans are built around the size, type, schedule and requirements of each client."],
  ["How often can cleaning be scheduled?", "Scheduling is flexible, including daily and weekly routines depending on your needs."],
  ["Do we need to provide cleaning supplies?", "No. InnovClean can provide the necessary cleaning products and equipment, while accommodating specific preferences when agreed."],
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <p className="eyebrow eyebrow-on-dark">SERVICES</p>
            <h1>Commercial cleaning shaped around your workplace.</h1>
          </div>
          <p>
            From daily office care to specialist cleaning, we build practical service plans around the environment, the people using it and the standard you expect.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">WHAT WE DO</p>
            <h2>A flexible service, not a fixed package.</h2>
            <p className="section-lead">
              Choose the support your site needs. We can combine services and frequencies into one tailored plan.
            </p>
          </div>

          <div className="services-page-grid">
            {services.map(([title, text], index) => (
              <article className="service-detail-card" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell faq-grid">
          <div>
            <p className="eyebrow">QUESTIONS</p>
            <h2 style={{ margin: 0, fontSize: "clamp(2.5rem,4.5vw,4.8rem)", lineHeight: 1, letterSpacing: "-.06em" }}>
              A few useful answers before we start.
            </h2>
          </div>

          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
