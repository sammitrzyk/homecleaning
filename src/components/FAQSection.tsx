import { useState } from "react";
import { trackEvent } from "../analytics";

const FAQS = [
  {
    q: "How much does hydroseeding cost?",
    a: "Pricing depends on area size, site access, soil condition, preparation needs, seed selection, and project type. Request an estimate so the property can be reviewed accurately.",
  },
  {
    q: "How long does hydroseed take to grow?",
    a: "Germination timing varies by seed type, weather, soil conditions, temperature, and watering. Customers receive care instructions based on the project and season.",
  },
  {
    q: "How often does new hydroseed need to be watered?",
    a: "New hydroseed normally requires consistent moisture during establishment. The recommended watering schedule depends on the project, weather, and season.",
  },
  {
    q: "Can hydroseeding be applied over an existing lawn?",
    a: "Hydroseeding may be suitable for some thin or damaged lawns, but successful establishment depends on preparation and proper seed-to-soil contact. The property should be reviewed first.",
  },
  {
    q: "Do you hydroseed newly graded properties?",
    a: "Yes. Newly graded residential and commercial properties are common hydroseeding applications when the site and soil preparation are suitable.",
  },
  {
    q: "Do you provide erosion-control hydroseeding?",
    a: "Yes, for qualifying slopes, disturbed areas, construction sites, and erosion-prone properties.",
  },
  {
    q: "What happens after I request an estimate?",
    a: "The team reviews the information, follows up with questions if necessary, and explains the recommended scope, pricing, scheduling, and next steps.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Chinook Hydroseeding is licensed and insured.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => {
    const next = open === i ? null : i;
    setOpen(next);
    if (next !== null) trackEvent("hydroseeding_faq_opened", { question: FAQS[i].q });
  };

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <span className="eyebrow">COMMON QUESTIONS</span>
        <h2>Hydroseeding Questions</h2>
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
