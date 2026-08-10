import { siteConfig } from "../config";
import { DevPlaceholder } from "./DevPlaceholder";

export function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-media" aria-hidden={siteConfig.heroImagePath ? undefined : true}>
        {siteConfig.heroImagePath ? (
          <img
            src={siteConfig.heroImagePath}
            alt="Bright, freshly cleaned kitchen with granite countertops"
            fetchPriority="high"
          />
        ) : (
          // [HERO_IMAGE_PATH] not supplied — labeled development placeholder
          <DevPlaceholder label="HERO PHOTO" configKey="heroImagePath" />
        )}
        <div className="hero-overlay" aria-hidden="true" />
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-heading-block">
            <p className="hero-eyebrow">HOUSE CLEANING • RECURRING &amp; DEEP CLEANS</p>
            <h1>
              House Cleaning in Mechanicsburg, PA
              <br /> Come Home to a Spotless House
            </h1>
          </div>
          <p className="hero-sub">Enjoy a spotless home without lifting a finger.</p>
          <div className="hero-cta-row">
            <a
              href={siteConfig.phoneHref}
              id="call-button-hero"
              className="btn btn-primary hero-call-btn"
              data-event="cleaning_call_click"
            >
              <span className="hero-call-btn-main">Call Now for a Free Quote</span>
              <span className="hero-call-btn-phone">{siteConfig.phoneDisplay}</span>
            </a>
          </div>

          <ul className="hero-badges">
            <li>
              <span className="badge-stars">★★★★★</span> {siteConfig.rating} Rating •{" "}
              {siteConfig.reviewCount} Reviews
            </li>
            <li>Licensed &amp; Insured</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
