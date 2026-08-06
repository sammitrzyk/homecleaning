import { siteConfig } from "../config";

export function ClosingCta() {
  return (
    <section className="final-cta" id="final-cta">
      <div className="container">
        <h2>Ready to Give Your Property a Better Start?</h2>
        <p>
          Request a free hydroseeding estimate from {siteConfig.businessName} and learn what
          approach makes sense for your property.
        </p>
        <div className="final-cta-buttons">
          <a
            href="#final-estimate-form"
            className="btn btn-primary"
            data-event="hydroseeding_quote_click"
          >
            Get a Free Hydroseeding Estimate
          </a>
          <a
            href={siteConfig.phoneHref}
            className="btn btn-outline-light"
            data-event="hydroseeding_call_click"
          >
            Call Now
          </a>
        </div>
        {siteConfig.seasonalMessageEnabled && (
          <p className="final-cta-seasonal">
            Planning a fall hydroseeding project? Start with a free estimate.
          </p>
        )}
      </div>
    </section>
  );
}
