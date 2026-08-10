import { siteConfig } from "../config";

export function ClosingCta() {
  return (
    <section className="final-cta" id="final-cta">
      <div className="container">
        <h2>Ready for a Cleaner Home?</h2>
        <p>
          Request a free cleaning quote from {siteConfig.businessName} and find out what a
          spotless home feels like.
        </p>
        <div className="final-cta-buttons">
          <a
            href="#final-estimate-form"
            className="btn btn-primary"
            data-event="cleaning_quote_click"
          >
            Get a Free Cleaning Quote
          </a>
          <a
            href={siteConfig.phoneHref}
            className="btn btn-outline-light"
            data-event="cleaning_call_click"
          >
            Call Now
          </a>
        </div>
        {siteConfig.seasonalMessageEnabled && (
          <p className="final-cta-seasonal">
            Planning a move-out cleaning? Start with a free quote.
          </p>
        )}
      </div>
    </section>
  );
}
