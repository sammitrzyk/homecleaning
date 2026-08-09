import { useRef, useState } from "react";
import { siteConfig } from "../config";
import { trackEvent } from "../analytics";
import { PROJECT_TYPE_OPTIONS, TIMELINE_OPTIONS, submitLead } from "../forms";

export function FinalEstimateForm() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const startedRef = useRef(false);

  const set = (name: string, value: string) => {
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent("hydroseeding_final_form_start");
    }
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((e) => ({ ...e, [name]: "" }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!values.name?.trim()) errs.name = "Please enter your name.";
    if (!values.phone?.trim()) errs.phone = "Please enter your phone number.";
    if (!values.zip?.trim()) errs.zip = "Please enter your ZIP code.";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    setSubmitError("");
    try {
      await submitLead({ form: "final-estimate", ...values }, null);
      trackEvent("hydroseeding_final_form_submit");
      setDone(true);
      window.location.assign("/thank-you.html");
    } catch {
      setSubmitError("Something went wrong sending your request. Please call us instead.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="final-form-section section" id="final-estimate-form">
      <div className="container">
        <div className="final-card">
          {done ? (
            <div className="form-success" role="status" aria-live="polite">
              <h3>Thank You — Your Quote Request Was Received</h3>
              <p>Our team will review your property and follow up with pricing and next steps.</p>
              <a href={siteConfig.phoneHref} data-event="hydroseeding_call_click">
                {siteConfig.phoneDisplay}
              </a>
            </div>
          ) : (
            <>
              <div className="final-card-head">
                <h2>Get Your Free Hydroseeding Quote</h2>
                <p>Fill out the form below for a fast, no-obligation quote.</p>
              </div>

              <form onSubmit={onSubmit} noValidate>
                <div className="field">
                  <label htmlFor="ff-name">Full Name</label>
                  <input
                    id="ff-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    value={values.name ?? ""}
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? "ff-name-err" : undefined}
                    onChange={(e) => set("name", e.target.value)}
                  />
                  {errors.name && (
                    <p className="field-error" id="ff-name-err" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="ff-phone">Phone Number</label>
                  <input
                    id="ff-phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(123) 456-7890"
                    value={values.phone ?? ""}
                    aria-invalid={errors.phone ? true : undefined}
                    aria-describedby={errors.phone ? "ff-phone-err" : undefined}
                    onChange={(e) => set("phone", e.target.value)}
                  />
                  {errors.phone && (
                    <p className="field-error" id="ff-phone-err" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="ff-project-type">Project Type</label>
                  <select
                    id="ff-project-type"
                    value={values.projectType ?? ""}
                    onChange={(e) => set("projectType", e.target.value)}
                  >
                    <option value="">Select an option</option>
                    {PROJECT_TYPE_OPTIONS.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="ff-zip">ZIP Code</label>
                  <input
                    id="ff-zip"
                    type="text"
                    inputMode="numeric"
                    autoComplete="postal-code"
                    placeholder="Your ZIP code"
                    value={values.zip ?? ""}
                    aria-invalid={errors.zip ? true : undefined}
                    aria-describedby={errors.zip ? "ff-zip-err" : undefined}
                    onChange={(e) => set("zip", e.target.value)}
                  />
                  {errors.zip && (
                    <p className="field-error" id="ff-zip-err" role="alert">
                      {errors.zip}
                    </p>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="ff-timeline">Timeline</label>
                  <select
                    id="ff-timeline"
                    value={values.timeline ?? ""}
                    onChange={(e) => set("timeline", e.target.value)}
                  >
                    <option value="">Select timeline</option>
                    {TIMELINE_OPTIONS.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="ff-details">
                    Details <span className="optional-tag">(Optional)</span>
                  </label>
                  <textarea
                    id="ff-details"
                    placeholder="Anything specific we should know? Examples: bare patches, slope, drainage, etc."
                    value={values.details ?? ""}
                    onChange={(e) => set("details", e.target.value)}
                  />
                </div>

                {submitError && (
                  <p className="field-error" role="alert">
                    {submitError}
                  </p>
                )}

                <button type="submit" className="btn final-form-cta" disabled={submitting}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 2 11 13" />
                    <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
                  </svg>
                  {submitting ? "Sending…" : "Get My Free Quote"}
                </button>

                <p className="final-microcopy">
                  We&rsquo;ll follow up with pricing and next steps. Your information is kept
                  private.
                </p>
                <p className="final-call-line">
                  Or call now:{" "}
                  <a href={siteConfig.phoneHref} data-event="hydroseeding_call_click">
                    {siteConfig.phoneDisplay}
                  </a>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
