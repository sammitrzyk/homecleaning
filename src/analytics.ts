/**
 * Lightweight conversion-event helper.
 *
 * Every tracked element carries a data-event attribute (e.g.
 * data-event="cleaning_quote_click"). Events are pushed to
 * window.dataLayer so GTM can forward them to GA4, Google Ads,
 * and Meta Pixel. No credentials live in client code.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, extra?: Record<string, unknown>) {
  if (!eventName) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...extra });
}

/**
 * Fires the "lead_mini_submit" conversion for the mid-page short
 * estimate form ("mini form"): dataLayer push, GA4 event via gtag
 * (if loaded), and a Google Ads conversion using the send_to label
 * from siteConfig.trackingIds.miniLeadAdsSendTo. Each step is
 * independently guarded so this is a no-op until gtag/GTM and the
 * conversion label are actually configured.
 */
export function fireMiniLeadTracking(sendTo: string) {
  trackEvent("lead_mini_submit");

  if (typeof window.gtag === "function") {
    window.gtag("event", "lead_mini_submit");

    if (sendTo) {
      window.gtag("event", "conversion", { send_to: sendTo });
    }
  }
}

/** Global click delegation for any element with data-event. */
export function initClickTracking() {
  document.addEventListener("click", (e) => {
    const target = (e.target as HTMLElement).closest<HTMLElement>("[data-event]");
    if (target?.dataset.event) {
      trackEvent(target.dataset.event);
    }
  });
}

/** Fires cleaning_scroll_50 / cleaning_scroll_75 once each. */
export function initScrollTracking() {
  const fired = new Set<number>();
  const onScroll = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    if (max <= 0) return;
    const pct = (window.scrollY / max) * 100;
    for (const mark of [50, 75]) {
      if (pct >= mark && !fired.has(mark)) {
        fired.add(mark);
        trackEvent(`cleaning_scroll_${mark}`);
      }
    }
    if (fired.size === 2) window.removeEventListener("scroll", onScroll);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
}
