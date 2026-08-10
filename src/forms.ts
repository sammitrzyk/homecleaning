import { siteConfig } from "./config";

/**
 * Submits lead data.
 *
 * If a custom formEndpoint is configured in src/config.ts, posts there
 * (e.g. a CRM webhook). Otherwise posts to Netlify Forms at "/" — the
 * `data.form` value (e.g. "short-estimate") is used as the form-name,
 * which must match one of the hidden static forms declared in
 * index.html so Netlify's build-time parser has registered the field
 * set in advance. No credentials belong in this file or anywhere
 * client-side.
 */
export async function submitLead(data: Record<string, string>, file?: File | null): Promise<void> {
  const body = new FormData();
  body.append("form-name", data.form ?? "estimate-form");
  Object.entries(data).forEach(([k, v]) => body.append(k, v));
  if (file) body.append("photo", file);

  const endpoint = siteConfig.formEndpoint || "/";
  const res = await fetch(endpoint, { method: "POST", body });
  if (!res.ok) throw new Error(`Form submission failed (${res.status})`);
}

export function redirectToThankYou() {
  if (siteConfig.thankYouUrl) {
    window.location.assign(siteConfig.thankYouUrl);
  }
}

export const AREA_OPTIONS = [
  "Studio / 1 bedroom",
  "2 bedrooms",
  "3 bedrooms",
  "4 bedrooms",
  "5+ bedrooms",
  "Not sure",
];

export const PROJECT_TYPE_OPTIONS = [
  "Recurring cleaning",
  "Deep cleaning",
  "Move-in cleaning",
  "Move-out cleaning",
  "One-time cleaning",
  "Other",
];

export const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within a week",
  "Within a month",
  "Just getting prices",
  "Not sure",
];

export const PROPERTY_TYPE_OPTIONS = [
  "House",
  "Apartment / condo",
  "Vacation rental",
  "Office / commercial",
  "Other",
];

export const BATHROOM_OPTIONS = ["1", "1.5", "2", "2.5", "3+", "Not sure"];

export const CONTACT_METHOD_OPTIONS = ["Call", "Text", "Email"];
