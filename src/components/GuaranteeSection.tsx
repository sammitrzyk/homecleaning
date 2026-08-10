export function GuaranteeSection() {
  return (
    <div className="guarantee-banner">
      <div className="container">
        <div className="guarantee-card">
          <div className="guarantee-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2 4 5v6c0 5.25 3.5 9.74 8 11 4.5-1.26 8-5.75 8-11V5l-8-3Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>

          <span className="eyebrow guarantee-eyebrow">PEACE OF MIND</span>
          <h2 className="guarantee-headline">100% Satisfaction Guarantee</h2>
          <p className="guarantee-body">
            If you&rsquo;re not completely satisfied with your cleaning, let us know and we&rsquo;ll come back to make
            it right at no additional cost.
          </p>
        </div>
      </div>
    </div>
  );
}
