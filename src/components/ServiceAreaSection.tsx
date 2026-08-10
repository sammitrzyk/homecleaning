import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../config";
import { DevPlaceholder } from "./DevPlaceholder";

/**
 * Compact service-area map, lazy-loaded when near the viewport.
 * Uses a keyless OpenStreetMap embed centered on the configured
 * coordinates (town center — never a private address).
 */
export function ServiceAreaSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loadMap, setLoadMap] = useState(false);

  const hasCoords = siteConfig.mapLatitude !== null && siteConfig.mapLongitude !== null;

  useEffect(() => {
    if (!hasCoords || !mapRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, [hasCoords]);

  const lat = siteConfig.mapLatitude ?? 0;
  const lon = siteConfig.mapLongitude ?? 0;
  const d = 0.12; // bounding-box half-size in degrees
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lon - d}%2C${lat - d}%2C${
    lon + d
  }%2C${lat + d}&layer=mapnik&marker=${lat}%2C${lon}`;

  return (
    <section className="service-area section" id="service-area">
      <div className="container">
        <div className="sa-grid">
          <div>
            <span className="eyebrow">SERVICE AREA</span>
            <h2>House Cleaning in Mechanicsburg, PA and Surrounding Communities</h2>
          </div>

          <div className="sa-map" ref={mapRef}>
            {hasCoords ? (
              loadMap ? (
                <iframe
                  src={mapSrc}
                  title={`Map of the ${siteConfig.businessName} service area around ${siteConfig.primaryLocation}`}
                  loading="lazy"
                />
              ) : (
                <div className="dev-placeholder" aria-hidden="true">
                  <span>Map loading…</span>
                </div>
              )
            ) : (
              // Coordinates missing — show a labeled placeholder, not an inaccurate map.
              <DevPlaceholder label="SERVICE AREA MAP" configKey="mapLatitude / mapLongitude" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
