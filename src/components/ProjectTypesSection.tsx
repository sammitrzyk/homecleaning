import { siteConfig } from "../config";
import { DevPlaceholder } from "./DevPlaceholder";

const PROJECT_TYPES = [
  {
    title: "New Construction Lawns",
    text: "For freshly graded residential properties.",
    image: siteConfig.projectTypeImages.newConstruction,
    configKey: "projectTypeImages.newConstruction",
    alt: "New construction property being prepped for hydroseeding",
  },
  {
    title: "Bare Ground",
    text: "Establish grass across exposed soil.",
    image: siteConfig.projectTypeImages.bareGround,
    configKey: "projectTypeImages.bareGround",
    alt: "Bare soil ready for hydroseeding",
  },
  {
    title: "Lawn Renovations",
    text: "Restore thin, patchy, or heavily damaged areas.",
    image: siteConfig.projectTypeImages.renovations,
    configKey: "projectTypeImages.renovations",
    alt: "Property with renovated, established lawn areas",
  },
  {
    title: "Erosion Control",
    text: "Help stabilize exposed and erosion-prone soil.",
    image: siteConfig.projectTypeImages.erosionControl,
    configKey: "projectTypeImages.erosionControl",
    alt: "Hydroseed mulch applied for erosion control",
  },
];

export function ProjectTypesSection() {
  return (
    <section className="project-types section" id="project-types">
      <div className="container">
        <span className="eyebrow">PROJECT TYPES</span>
        <h2>Hydroseeding for Every Type of Property</h2>
        <p className="section-lede">
          From newly graded lots to damaged lawns and erosion-prone slopes, we&rsquo;ll recommend
          the right approach for your property.
        </p>
        <ul className="pt-grid">
          {PROJECT_TYPES.map((pt) => (
            <li className="pt-card" key={pt.title}>
              <div className="pt-card-photo">
                {pt.image ? (
                  <img src={pt.image} alt={pt.alt} loading="lazy" />
                ) : (
                  <DevPlaceholder label={`${pt.title.toUpperCase()} PHOTO`} configKey={pt.configKey} />
                )}
              </div>
              <div className="pt-card-body">
                <h3>{pt.title}</h3>
                <p>{pt.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
