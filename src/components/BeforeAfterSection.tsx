import { siteConfig } from "../config";
import { DevPlaceholder } from "./DevPlaceholder";

export function BeforeAfterSection() {
  const hasImage = Boolean(siteConfig.beforeAfterImagePath);

  return (
    <section className="before-after section" id="before-after">
      <div className="container">
        <div className="ba-grid">
          <div className="ba-copy">
            <span className="eyebrow">REAL RESULTS</span>
            <h2>See the Difference</h2>
            <p className="ba-subhead">
              Cluttered and dusty.
              <br /> Spotless by the time we leave.
            </p>
          </div>

          <div className="ba-slider">
            {hasImage ? (
              <img
                src={siteConfig.beforeAfterImagePath}
                alt="Kitchen before and after a professional cleaning, cluttered and dusty vs. spotless and organized"
                loading="lazy"
              />
            ) : (
              // [BEFORE_AFTER_IMAGE_PATH] not supplied
              <DevPlaceholder label="BEFORE/AFTER PHOTO" configKey="beforeAfterImagePath" />
            )}
          </div>
        </div>

        <p className="ba-location">
          <span aria-hidden="true">📍</span> Completed in {siteConfig.primaryLocation}
        </p>

        <hr className="ba-section-divider" />

        <div className="ba-cta-block">
          <p className="ba-cta-prompt">Ready for a home like this?</p>
          <a
            href="#quote-form"
            className="btn btn-primary"
            data-event="cleaning_quote_click"
          >
            Get My Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
