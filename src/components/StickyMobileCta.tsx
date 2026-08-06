import { useEffect, useState } from "react";

/**
 * Mobile-only sticky bottom CTA. Appears once the visitor scrolls
 * past most of the hero.
 */
export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.intersectionRatio < 0.25),
      { threshold: [0, 0.25, 0.5] }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="#quote-form"
      id="sticky-quote-button"
      className={`sticky-mobile-cta${visible ? " visible" : ""}`}
      data-event="hydroseeding_quote_click"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      Get a Free Quote
    </a>
  );
}
