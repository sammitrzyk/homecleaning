import { siteConfig } from "./config";

/**
 * Submits lead data to the configured endpoint.
 * If no endpoint is configured yet ([FORM_ENDPOINT_OR_CRM_WEBHOOK]),
 * resolves locally so the success state can be exercised in development.
 * No credentials belong in this file or anywhere client-side.
 */
export async function submitLead(data: Record<string, string>, file?: File | null): Promise<void> {
  if (!siteConfig.formEndpoint) {
    console.info("[forms] No formEndpoint configured — lead not posted:", data);
    return;
  }
  const body = new FormData();
  Object.entries(data).forEach(([k, v]) => body.append(k, v));
  if (file) body.append("photo", file);
  const res = await fetch(siteConfig.formEndpoint, { method: "POST", body });
  if (!res.ok) throw new Error(`Form submission failed (${res.status})`);
}

export function redirectToThankYou() {
  if (siteConfig.thankYouUrl) {
    window.location.assign(siteConfig.thankYouUrl);
  }
}

export const AREA_OPTIONS = [
  "Under 2,500 sq. ft.",
  "2,500–5,000 sq. ft.",
  "5,000–10,000 sq. ft.",
  "10,000+ sq. ft.",
  "Not sure",
];

export const PROJECT_TYPE_OPTIONS = [
  "New lawn",
  "Bare or patchy lawn",
  "New construction",
  "Erosion control",
  "Commercial property",
  "Other",
];

export const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 30 days",
  "Within 1–3 months",
  "Planning ahead",
  "Not sure",
];

export const PROPERTY_TYPE_OPTIONS = [
  "Residential",
  "Commercial",
  "New construction",
  "Managed property",
  "Other",
];

export const SITE_CONDITION_OPTIONS = [
  "Bare soil",
  "Patchy lawn",
  "Newly graded",
  "Sloped or erosion-prone",
  "Recently excavated",
  "Not sure",
];

export const CONTACT_METHOD_OPTIONS = ["Call", "Text", "Email"];
