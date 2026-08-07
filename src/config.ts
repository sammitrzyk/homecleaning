/**
 * ============================================================
 * CENTRAL SITE CONFIGURATION — Chinook Hydroseeding
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
  businessName: "Chinook Hydroseeding",

  phoneDisplay: "(360) 888-7301",
  phoneHref: "tel:+13608887301",

  primaryLocation: "Chinook, WA",
  serviceAreaLabel: "Chinook, WA and surrounding communities",

  rating: "4.9",
  reviewCount: "18+",
  licensedInsured: true,
  socialFollowerCount: "40k+",

  // Seasonal message — toggle off by setting seasonalMessageEnabled to false.
  seasonalMessage: "Now booking fall hydroseeding projects.",
  seasonalMessageEnabled: true,

  /* ---------- ASSETS ---------- */
  // Real logo supplied (public/logo.jpg). Includes readable business text.
  logoPath: "/logo.jpg",

  // Technician actively spraying hydroseed mulch.
  heroImagePath: "/hero-spraying.jpg",

  // Ground-level before/after — same property, bare dirt vs. established lawn.
  beforeImagePath: "/ba-before.jpg",
  afterImagePath: "/ba-after.jpg",

  // Full crew team photo.
  crewImagePath: "/team.jpg",

  // Truck / equipment credibility photo (shown beside the quote form).
  optionalProjectImage1: "/truck.jpg",

  // Project Types card photos — real photos only, left "" until supplied.
  projectTypeImages: {
    newConstruction: "/pt-new-construction.jpg",
    bareGround: "/ba-before.jpg",
    renovations: "/pt-renovation.jpg",
    erosionControl: "/drone-before.jpg",
    sloped: "/pt-sloped.jpg",
    commercial: "",
  },

  /* ---------- SERVICE AREA ---------- */
  // Do not invent cities. Add confirmed towns only.
  serviceAreas: ["Chinook", "Surrounding communities"],

  // Chinook, WA town center. Set to null to show the map placeholder instead.
  mapLatitude: 46.2715 as number | null,
  mapLongitude: -123.9466 as number | null,

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
};

export type SiteConfig = typeof siteConfig;
