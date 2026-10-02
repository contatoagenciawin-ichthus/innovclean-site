import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact InnovClean Services for a tailored commercial cleaning quote in London and surrounding areas.",
};

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="shell contact-grid">
        <div className="contact-copy">
          <p className="eyebrow eyebrow-on-dark">CONTACT</p>
          <h1>Tell us about your space.</h1>
          <p>
            Whether you need an ongoing office-cleaning plan, specialist support or a one-off conversation about your workplace, we&apos;d be happy to hear from you.
          </p>

          <div className="contact-actions">
            <a className="button button-lime" href="https://wa.me/447759055926" target="_blank" rel="noreferrer">
              Message us on WhatsApp
            </a>
            <a className="button button-ghost-light" href="mailto:sales@innovclean.co.uk">
              Send an email
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div>
            <span>PHONE</span>
            <a href="tel:+447759055926">+44 7759 055926</a>
          </div>
          <div>
            <span>EMAIL</span>
            <a href="mailto:sales@innovclean.co.uk">sales@innovclean.co.uk</a>
          </div>
          <div>
            <span>AREA</span>
            <p>London and surrounding areas<br />United Kingdom</p>
          </div>
          <div className="contact-card-note">
            <span>NEED A QUOTE?</span>
            <p>Send us your location, type of space and preferred cleaning frequency. We can take it from there.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
