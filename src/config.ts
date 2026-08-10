/**
 * ============================================================
 * CENTRAL SITE CONFIGURATION — Carpet Guys
 * ============================================================
 * All business information, asset paths, and integration
 * endpoints live here. Do not hard-code these values inside
 * components.
 *
 * ASSET NOTES:
 * - Paths that are empty strings ("") mean the real asset has
 *   not been supplied yet. Components render a clearly labeled
 *   neutral development placeholder until a real path is set.
 * - Drop real images into /public and set the path here,
 *   e.g. heroImagePath: "/hero.jpg"
 */

export interface GoogleReview {
  name: string; // Real customer name from the actual Google review
  date: string; // Real review date, e.g. "March 2026"
  rating: number; // 1–5
  text: string; // Verbatim review text
}

export const siteConfig = {
  businessName: "Carpet Guys",

  phoneDisplay: "(717) 701-2797",
  phoneHref: "tel:+17177012797",

  primaryLocation: "Mechanicsburg, PA",
  serviceAreaLabel: "Mechanicsburg, PA and surrounding communities",

  rating: "5.0",
  reviewCount: "285+",
  licensedInsured: true,

  // Seasonal message — toggle off by setting seasonalMessageEnabled to false.
  seasonalMessage: "Now booking fall move-out cleanings.",
  seasonalMessageEnabled: true,

  /* ---------- ASSETS ---------- */
  // Real Carpet Guys logo.
  logoPath: "/logo.jpeg",

  // Bright, freshly cleaned kitchen.
  heroImagePath: "/homecleaninghero.jpg",

  // Before/after — single combined image, cluttered/dirty vs. freshly cleaned.
  beforeAfterImagePath: "/befafter.jpg",

  // 2023 Best of Harrisburg award photo.
  awardImagePath: "/cutoff2.png",

  // Full cleaning crew team photo.
  crewImagePath: "/carb.jpg",

  /* ---------- SERVICE AREA ---------- */
  // Do not invent cities. Add confirmed towns only.
  serviceAreas: ["Mechanicsburg", "Surrounding communities"],

  // Mechanicsburg, PA town center. Set to null to show the map placeholder instead.
  mapLatitude: 40.2131 as number | null,
  mapLongitude: -77.0072 as number | null,

  /* ---------- INTEGRATIONS ---------- */
  // [FORM_ENDPOINT_OR_CRM_WEBHOOK] — leave "" until a real endpoint exists.
  // With no endpoint, forms show the success state locally without posting.
  formEndpoint: "",

  // Optional redirect after successful submission, e.g. "/thank-you".
  // Leave "" to show the inline success message instead.
  thankYouUrl: "",

  privacyPolicyUrl: "/privacy-policy",
  termsUrl: "/terms",

  // Container / pixel IDs, injected by your tag manager setup.
  trackingIds: {
    gtmId: "", // e.g. "GTM-XXXXXXX"
    ga4Id: "", // e.g. "G-XXXXXXXXXX"
    googleAdsId: "", // e.g. "AW-XXXXXXXXX"
    metaPixelId: "",
    // Google Ads conversion "send_to" label for the mid-page short-form
    // submission (the "mini form" lead event), e.g. "AW-XXXXXXXXX/AbC-D_efG-h123".
    // Leave "" until the conversion action is created in Google Ads.
    miniLeadAdsSendTo: "",
  },

  /* ---------- REVIEWS ---------- */
  // REAL Google reviews only. Leave empty until actual review content is
  // supplied — the carousel shows a restrained placeholder message when empty.
  googleReviews: [] as GoogleReview[],

  // REAL Google review screenshots, shown in this exact order.
  reviewImages: [
    { src: "/meg.jpeg", alt: "Google review from Meg Humes" },
    { src: "/paige.jpeg", alt: "Google review from Paige Fletcher" },
    { src: "/hunter.jpeg", alt: "Google review from Hunter Rooney" },
    { src: "/lois.jpeg", alt: "Google review from Lois Tait" },
    { src: "/devon.jpeg", alt: "Google review from Devon Manto" },
    { src: "/george.jpeg", alt: "Google review from George Ramos" },
  ] as { src: string; alt: string }[],
};

export type SiteConfig = typeof siteConfig;
