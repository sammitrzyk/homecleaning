import { useRef, useState } from "react";
import { siteConfig } from "../config";
import { trackEvent } from "../analytics";
import { DevPlaceholder } from "./DevPlaceholder";

export function BeforeAfterSection() {
  const [position, setPosition] = useState(50);
  const trackedRef = useRef(false);

  const onInteract = (value: number) => {
    setPosition(value);
    if (!trackedRef.current) {
      trackedRef.current = true;
      trackEvent("hydroseeding_before_after_interaction");
    }
  };

  const hasImages = Boolean(siteConfig.beforeImagePath && siteConfig.afterImagePath);

  return (
    <section className="before-after section" id="before-after">
      <div className="container">
        <div className="ba-grid">
          <div className="ba-copy">
            <span className="eyebrow">REAL RESULTS</span>
            <h2>See the Transformation</h2>
            <p className="ba-subhead">
              Hydroseeded in the fall.
              <br /> Healthy lawn by spring.
            </p>
          </div>

          <div className="ba-slider">
            <div className="ba-after-wrap">
              {hasImages ? (
                <img src={siteConfig.afterImagePath} alt="Property after hydroseeding, with an established lawn" loading="lazy" />
              ) : (
                // [AFTER_IMAGE_PATH] not supplied
                <DevPlaceholder label="AFTER PHOTO" configKey="afterImagePath" />
              )}
            </div>
            <div className="ba-before-wrap" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
              {hasImages ? (
                <img src={siteConfig.beforeImagePath} alt="Property before hydroseeding, with bare ground" loading="lazy" />
              ) : (
                // [BEFORE_IMAGE_PATH] not supplied
                <DevPlaceholder label="BEFORE PHOTO" configKey="beforeImagePath" />
              )}
            </div>

            <span className="ba-label before">BEFORE</span>
            <span className="ba-label after">AFTER</span>

            <div className="ba-divider" style={{ left: `${position}%` }} aria-hidden="true" />
            <div className="ba-handle" style={{ left: `${position}%` }} aria-hidden="true">
              ⟷
            </div>

            <input
              type="range"
              className="ba-range"
              min={0}
              max={100}
              value={position}
              aria-label="Before and after comparison slider"
              onChange={(e) => onInteract(Number(e.target.value))}
            />
          </div>
        </div>

        <p className="ba-location">
          <span aria-hidden="true">📍</span> Completed in {siteConfig.primaryLocation}
        </p>

        <hr className="ba-section-divider" />

        <div className="ba-cta-block">
          <p className="ba-cta-prompt">Ready for a lawn like this?</p>
          <a
            href="#quote-form"
            className="btn btn-primary"
            data-event="hydroseeding_quote_click"
          >
            Get My Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
