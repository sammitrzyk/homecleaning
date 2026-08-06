import { siteConfig } from "../config";
import { DevPlaceholder } from "./DevPlaceholder";

export function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-media" aria-hidden={siteConfig.heroImagePath ? undefined : true}>
        {siteConfig.heroImagePath ? (
          <img
            src={siteConfig.heroImagePath}
            alt="Chinook Hydroseeding crew applying hydroseed to a local property"
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
            <p className="hero-eyebrow">HYDROSEEDING • NEW LAWNS • EROSION CONTROL</p>
            <h1>
              Hydroseeding in Chinook, WA
              <br /> For Bare, Patchy &amp; Newly Graded Lawns
            </h1>
          </div>
          <p className="hero-sub">
            Grow a fuller, more even lawn with professional hydroseeding in one efficient
            application.
          </p>
          <div className="hero-cta-row">
            <a
              href={siteConfig.phoneHref}
              id="call-button-hero"
              className="btn btn-primary hero-call-btn"
              data-event="hydroseeding_call_click"
            >
              <span className="hero-call-btn-main">Call Now for a Free Estimate</span>
              <span className="hero-call-btn-phone">{siteConfig.phoneDisplay}</span>
            </a>
          </div>

          <ul className="hero-badges">
            <li>★★★★★ {siteConfig.rating} Google Rating</li>
            <li>Licensed &amp; Insured</li>
            <li>{siteConfig.socialFollowerCount} Followers</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
