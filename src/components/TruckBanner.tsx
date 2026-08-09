import { siteConfig } from "../config";
import { DevPlaceholder } from "./DevPlaceholder";

/**
 * Full-bleed branded divider between the dark navy estimate section
 * and Project Types — image only, no copy. Flows edge-to-edge with
 * the sections directly above and below it.
 */
export function TruckBanner() {
  return (
    <div className="truck-banner">
      {siteConfig.optionalProjectImage1 ? (
        <img
          src={siteConfig.optionalProjectImage1}
          alt="Chinook Hydroseeding branded truck"
          loading="lazy"
        />
      ) : (
        // [OPTIONAL_PROJECT_IMAGE_1] not supplied
        <DevPlaceholder label="TRUCK PHOTO" configKey="optionalProjectImage1" />
      )}
    </div>
  );
}
