import { siteConfig } from "../config";
import { DevPlaceholder } from "./DevPlaceholder";

const STATEMENTS = [
  "Family owned company treating your property like its our very own.",
  "Seed mix selected for your property’s soil and sunlight.",
  "Professional hydroseeding equipment for consistent application.",
];

export function WhyChooseUsSection() {
  return (
    <section className="why-us section" id="why-choose-us">
      <div className="container">
        <div className="why-intro">
          <span className="eyebrow">WHY CHOOSE CHINOOK</span>
          <h2>What Makes Chinook Different</h2>
        </div>
        <div className="why-photo-banner">
          {siteConfig.crewImagePath ? (
            <img
              src={siteConfig.crewImagePath}
              alt="Chinook Hydroseeding team"
              loading="lazy"
            />
          ) : (
            // [CREW_OR_EQUIPMENT_IMAGE_PATH] not supplied
            <DevPlaceholder label="TEAM PHOTO" configKey="crewImagePath" />
          )}
        </div>
        <ul className="why-checklist">
          {STATEMENTS.map((s) => (
            <li key={s}>
              <span className="why-check" aria-hidden="true">
                ✓
              </span>
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
