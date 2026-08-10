import { siteConfig } from "../config";
import { DevPlaceholder } from "./DevPlaceholder";

export function AwardSection() {
  return (
    <section className="award section" id="award">
      <div className="container">
        <div className="award-intro">
          <h2>Award-Winning Excellence</h2>
          <p className="section-lede">Recognized as Harrisburg&rsquo;s Best Home Cleaning Service</p>
        </div>

        <div className="award-frame">
          {siteConfig.awardImagePath ? (
            <img
              src={siteConfig.awardImagePath}
              alt="2023 Best of Harrisburg award certificate — The Carpet Guys"
              loading="lazy"
            />
          ) : (
            // [AWARD_IMAGE_PATH] not supplied
            <DevPlaceholder label="AWARD PHOTO" configKey="awardImagePath" />
          )}
        </div>
      </div>
    </section>
  );
}
