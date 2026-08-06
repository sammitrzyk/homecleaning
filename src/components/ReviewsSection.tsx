import { useRef, useState } from "react";
import { siteConfig } from "../config";
import { trackEvent } from "../analytics";

// Real Google review screenshots, shown in this exact order.
const REVIEW_IMAGES = [
  { src: "/review2.jpg", alt: "Google review from Michael Gardner" },
  { src: "/review4.jpg", alt: "Google review from jasonkc82" },
  { src: "/review3.jpg", alt: "Google review from Tony Grant" },
  { src: "/review1.jpg", alt: "Google review from Marty Raphael" },
  { src: "/review5.jpg", alt: "Google review from Chris Dierick" },
];

export function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const go = (next: number) => {
    setIndex((next + REVIEW_IMAGES.length) % REVIEW_IMAGES.length);
    trackEvent("hydroseeding_review_navigation");
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 45) go(dx < 0 ? index + 1 : index - 1);
    touchStartX.current = null;
  };

  const review = REVIEW_IMAGES[index];

  return (
    <section className="reviews section" id="reviews">
      <div className="container">
        <h2>Hear What Local Customers Are Saying</h2>

        <div className="review-summary-pill">
          <span className="g-mark" aria-hidden="true">
            G
          </span>
          <span>{siteConfig.rating} Rating</span>
          <span className="stars" aria-hidden="true">
            ★★★★★
          </span>
          <span className="count">{siteConfig.reviewCount} Reviews</span>
        </div>

        <div
          className="review-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Google reviews"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") go(index - 1);
            if (e.key === "ArrowRight") go(index + 1);
          }}
        >
          <div className="review-card review-card-image" aria-live="polite">
            <img src={review.src} alt={review.alt} loading="lazy" />
          </div>

          <div className="review-controls">
            <button
              type="button"
              className="review-arrow"
              aria-label="Previous review"
              onClick={() => go(index - 1)}
            >
              ←
            </button>
            <div className="review-dots" role="tablist" aria-label="Select review">
              {REVIEW_IMAGES.map((r, i) => (
                <button
                  key={r.src}
                  type="button"
                  role="tab"
                  aria-current={i === index}
                  aria-label={`Review ${i + 1} of ${REVIEW_IMAGES.length}`}
                  onClick={() => go(i)}
                />
              ))}
            </div>
            <button
              type="button"
              className="review-arrow"
              aria-label="Next review"
              onClick={() => go(index + 1)}
            >
              →
            </button>
          </div>
          <p className="review-swipe-hint">Swipe to read what customers actually posted on Google.</p>
        </div>
      </div>
    </section>
  );
}
