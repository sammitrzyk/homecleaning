import { siteConfig } from "../config";
import { DevPlaceholder } from "./DevPlaceholder";

const DIFFERENTIATORS = [
  {
    title: "Licensed & Insured",
    text: "Protection and peace of mind while we’re in your home.",
  },
  {
    title: "Consistent, Thorough Cleaning",
    text: "A detailed checklist helps make sure nothing gets overlooked.",
  },
  {
    title: "We Bring Everything",
    text: "Our team arrives with the supplies and equipment needed to get the job done.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="why-us section" id="why-choose-us">
      <div className="container">
        <div className="why-intro">
          <span className="eyebrow">WHY HOMEOWNERS CHOOSE US</span>
          <h2>Cleaning You Can Feel Comfortable With</h2>
        </div>
        <div className="why-photo-banner">
          {siteConfig.crewImagePath ? (
            <img
              src={siteConfig.crewImagePath}
              alt="Carpet Guys cleaning team"
              loading="lazy"
            />
          ) : (
            // [CREW_OR_EQUIPMENT_IMAGE_PATH] not supplied
            <DevPlaceholder label="TEAM PHOTO" configKey="crewImagePath" />
          )}
        </div>
        <ul className="why-checklist">
          {DIFFERENTIATORS.map((d) => (
            <li key={d.title}>
              <span className="why-check" aria-hidden="true">
                ✓
              </span>
              <div className="why-checklist-copy">
                <strong>{d.title}</strong>
                <p>{d.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
