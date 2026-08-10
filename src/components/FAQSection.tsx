import { useState } from "react";
import { trackEvent } from "../analytics";

const FAQS = [
  {
    q: "How much does home cleaning cost?",
    a: "Pricing depends on home size, number of bedrooms and bathrooms, cleaning type, and how often you'd like service. Request a quote so we can give you an accurate number.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "No. Many customers give us entry instructions and go about their day. If you'd rather be home, that's fine too — whatever's easiest for you.",
  },
  {
    q: "Do you bring your own cleaning supplies?",
    a: "Yes, our team brings all supplies and equipment. If you'd like us to use a specific product on certain surfaces, just let us know when you book.",
  },
  {
    q: "How long does a cleaning take?",
    a: "It depends on the size of the home and the type of cleaning. A recurring cleaning is usually quicker than a first-time deep clean. We'll give you a time estimate when we quote your home.",
  },
  {
    q: "Do you offer recurring cleaning?",
    a: "Yes. Weekly, biweekly, and monthly plans are available, and the schedule can be adjusted anytime.",
  },
  {
    q: "Can I customize my cleaning?",
    a: "Yes. Tell us which rooms or areas to focus on and anything to skip, and we'll build the visit around what matters most to you.",
  },
  {
    q: "Do you clean move-in or move-out properties?",
    a: "Yes, for tenants, owners, and landlords who need the home cleaned before or after a move.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Carpet Guys is licensed and insured.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => {
    const next = open === i ? null : i;
    setOpen(next);
    if (next !== null) trackEvent("cleaning_faq_opened", { question: FAQS[i].q });
  };

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <span className="eyebrow">COMMON QUESTIONS</span>
        <h2>Cleaning Questions</h2>
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div className="faq-item" key={item.q}>
              <h3 style={{ margin: 0 }}>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={open === i}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                  onClick={() => toggle(i)}
                >
                  {item.q}
                  <span className="faq-icon" aria-hidden="true">
                    +
                  </span>
                </button>
              </h3>
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-button-${i}`}
                className="faq-answer"
                hidden={open !== i}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
