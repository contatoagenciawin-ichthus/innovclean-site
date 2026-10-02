import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for the InnovClean Services website.",
};

export default function PrivacyPage() {
  return (
    <section className="legal-page">
      <div className="shell legal-shell">
        <p className="eyebrow">PRIVACY</p>
        <h1>Privacy notice</h1>
        <p className="legal-intro">
          This notice explains the basic way information is handled when you contact InnovClean through this website.
        </p>

        <h2>Information you choose to share</h2>
        <p>
          If you contact us by email, telephone or WhatsApp, we may receive the contact details and information you choose to include in your enquiry. We use that information to respond to you and discuss the services you have asked about.
        </p>

        <h2>Website operation</h2>
        <p>
          This website is designed to minimise unnecessary data collection. Technical hosting providers may process limited connection and security information required to deliver and protect the site.
        </p>

        <h2>Third-party services</h2>
        <p>
          Links to services such as WhatsApp or your email provider take you to third-party platforms. Their own privacy terms apply once you use those services.
        </p>

        <h2>How long information is kept</h2>
        <p>
          Enquiry information may be retained for as long as reasonably necessary to respond, maintain business records and meet applicable legal obligations.
        </p>

        <h2>Your questions</h2>
        <p>
          For privacy-related questions about this website or an enquiry you have sent us, contact <a href="mailto:sales@innovclean.co.uk">sales@innovclean.co.uk</a>.
        </p>
      </div>
    </section>
  );
}
