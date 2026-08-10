import { useEffect, useState } from "react";

/**
 * Mobile-only sticky bottom CTA. Appears once the visitor scrolls
 * past most of the hero, and hides while the estimate form itself
 * is in view (so it doesn't sit on top of the form/submit button).
 * Reappears as soon as the form's bottom edge scrolls up past the
 * middle of the viewport, rather than waiting for the whole form
 * to clear the screen.
 */
export function StickyMobileCta() {
  const [pastHero, setPastHero] = useState(false);
  const [formInView, setFormInView] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(entry.intersectionRatio < 0.25),
      { threshold: [0, 0.25, 0.5] }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const form = document.getElementById("quote-form");
    if (!form) return;

    const onScroll = () => {
      const rect = form.getBoundingClientRect();
      const midpoint = window.innerHeight / 2;
      setFormInView(rect.top < window.innerHeight && rect.bottom > midpoint);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const visible = pastHero && !formInView;

  return (
    <a
      href="#quote-form"
      id="sticky-quote-button"
      className={`sticky-mobile-cta${visible ? " visible" : ""}`}
      data-event="cleaning_quote_click"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      Get a Free Quote
    </a>
  );
}
