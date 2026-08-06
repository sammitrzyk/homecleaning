import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../config";
import { trackEvent } from "../analytics";
import {
  AREA_OPTIONS,
  PROJECT_TYPE_OPTIONS,
  TIMELINE_OPTIONS,
  submitLead,
  redirectToThankYou,
} from "../forms";

type Step = 1 | 2 | "done";

export function ShortEstimateForm() {
  const [step, setStep] = useState<Step>(1);
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const startedRef = useRef(false);
  const step2ViewedRef = useRef(false);
  const photoRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (step === 2 && !step2ViewedRef.current) {
      step2ViewedRef.current = true;
      trackEvent("short_form_step_2_viewed");
    }
  }, [step]);

  const set = (name: string, value: string) => {
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent("short_form_started");
    }
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((e) => ({ ...e, [name]: "" }));
  };

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!values.name?.trim()) errs.name = "Please enter your name.";
    if (!values.phone?.trim()) errs.phone = "Please enter your phone number.";
    if (!values.zip?.trim()) errs.zip = "Please enter your ZIP code.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onContinue = () => {
    if (!validateStep1()) return;
    trackEvent("short_form_step_1_completed");
    setStep(2);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      onContinue();
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      await submitLead(
        { form: "short-estimate", ...values },
        photoRef.current?.files?.[0] ?? null
      );
      trackEvent("short_form_submitted");
      setStep("done");
      redirectToThankYou();
    } catch {
      setSubmitError("Something went wrong sending your request. Please call us instead.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="quote-section" id="quote-form">
      <div className="container">
        <div className="quote-intro">
          <span className="eyebrow quote-eyebrow">FREE ESTIMATE</span>
          <h2 className="quote-headline">Request Your Free Hydroseeding Estimate</h2>
          <p className="quote-subhead">
            Takes under 30 seconds. Tell us about your property and we&rsquo;ll follow up with
            pricing and next steps.
          </p>
        </div>

        <div className="estimate-card">
          {step === "done" ? (
            <div className="form-success" role="status" aria-live="polite">
              <h3>Thanks — your request was received.</h3>
              <p>
                {siteConfig.businessName} will follow up about your property and estimate.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              {step === 1 && (
                <>
                  <div className="field">
                    <label htmlFor="sf-name">Name</label>
                    <input
                      id="sf-name"
                      type="text"
                      autoComplete="name"
                      value={values.name ?? ""}
                      aria-invalid={errors.name ? true : undefined}
                      aria-describedby={errors.name ? "sf-name-err" : undefined}
                      onChange={(e) => set("name", e.target.value)}
                    />
                    {errors.name && (
                      <p className="field-error" id="sf-name-err" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="field">
                    <label htmlFor="sf-phone">Phone Number</label>
                    <input
                      id="sf-phone"
                      type="tel"
                      autoComplete="tel"
                      value={values.phone ?? ""}
                      aria-invalid={errors.phone ? true : undefined}
                      aria-describedby={errors.phone ? "sf-phone-err" : undefined}
                      onChange={(e) => set("phone", e.target.value)}
                    />
                    {errors.phone && (
                      <p className="field-error" id="sf-phone-err" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div className="field">
                    <label htmlFor="sf-zip">ZIP Code</label>
                    <input
                      id="sf-zip"
                      type="text"
                      inputMode="numeric"
                      autoComplete="postal-code"
                      value={values.zip ?? ""}
                      aria-invalid={errors.zip ? true : undefined}
                      aria-describedby={errors.zip ? "sf-zip-err" : undefined}
                      onChange={(e) => set("zip", e.target.value)}
                    />
                    {errors.zip && (
                      <p className="field-error" id="sf-zip-err" role="alert">
                        {errors.zip}
                      </p>
                    )}
                  </div>
                  <button type="button" className="btn estimate-cta" onClick={onContinue}>
                    Continue to Project Details
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <p className="form-step-indicator">Step 2 of 2</p>
                  <h3>Tell Us About the Property</h3>
                  <div className="field">
                    <label htmlFor="sf-address">Property Address</label>
                    <input
                      id="sf-address"
                      type="text"
                      autoComplete="street-address"
                      value={values.address ?? ""}
                      onChange={(e) => set("address", e.target.value)}
                    />
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="sf-area">Approximate Area</label>
                      <select
                        id="sf-area"
                        value={values.area ?? ""}
                        onChange={(e) => set("area", e.target.value)}
                      >
                        <option value="">Select…</option>
                        {AREA_OPTIONS.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="sf-type">Project Type</label>
                      <select
                        id="sf-type"
                        value={values.projectType ?? ""}
                        onChange={(e) => set("projectType", e.target.value)}
                      >
                        <option value="">Select…</option>
                        {PROJECT_TYPE_OPTIONS.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="sf-timeline">Desired Timeline</label>
                    <select
                      id="sf-timeline"
                      value={values.timeline ?? ""}
                      onChange={(e) => set("timeline", e.target.value)}
                    >
                      <option value="">Select…</option>
                      {TIMELINE_OPTIONS.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="sf-photo">
                      Photo Upload <span className="optional-tag">(optional)</span>
                    </label>
                    <input id="sf-photo" type="file" accept="image/*" ref={photoRef} />
                  </div>
                  <div className="field">
                    <label htmlFor="sf-details">
                      Additional Details <span className="optional-tag">(optional)</span>
                    </label>
                    <textarea
                      id="sf-details"
                      value={values.details ?? ""}
                      onChange={(e) => set("details", e.target.value)}
                    />
                  </div>
                  {submitError && (
                    <p className="field-error" role="alert">
                      {submitError}
                    </p>
                  )}
                  <button type="submit" className="btn estimate-cta" disabled={submitting}>
                    {submitting ? "Sending…" : "Submit My Project Details"}
                  </button>
                </>
              )}

              <p className="estimate-trustline">
                <span className="trust-gold">
                  {siteConfig.rating} ★★★★★
                </span>{" "}
                Google Rating {siteConfig.licensedInsured && <>• Licensed &amp; Insured</>}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
