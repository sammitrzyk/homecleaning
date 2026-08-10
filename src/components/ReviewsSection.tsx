import { useRef, useState } from "react";
import { siteConfig } from "../config";
import { trackEvent } from "../analytics";
import { DevPlaceholder } from "./DevPlaceholder";

export function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const reviewImages = siteConfig.reviewImages;
  const hasReviews = reviewImages.length > 0;

  const go = (next: number) => {
    if (!hasReviews) return;
    setIndex((next + reviewImages.length) % reviewImages.length);
    trackEvent("cleaning_review_navigation");
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

  const review = hasReviews ? reviewImages[index] : null;

  return (
    <section className="reviews section" id="reviews">
      <div className="container">
        <h2>Hear What Local Customers Are Saying</h2>

        <div className="review-summary-pill">
          <span className="stars" aria-hidden="true">
            ★★★★★
          </span>
          <span>{siteConfig.rating} Rating</span>
          <span aria-hidden="true">•</span>
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
            {review ? (
              <img src={review.src} alt={review.alt} loading="lazy" />
            ) : (
              // [REVIEW_IMAGES] not supplied — labeled development placeholder
              <DevPlaceholder label="GOOGLE REVIEW SCREENSHOTS" configKey="reviewImages" />
            )}
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
              {reviewImages.map((r, i) => (
                <button
                  key={r.src}
                  type="button"
                  role="tab"
                  aria-current={i === index}
                  aria-label={`Review ${i + 1} of ${reviewImages.length}`}
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
