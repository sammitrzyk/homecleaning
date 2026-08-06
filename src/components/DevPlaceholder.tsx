/**
 * Neutral development placeholder shown wherever a real photo has not
 * been supplied yet. Intentionally plain — no decorative artwork.
 * Replace by setting the matching path in src/config.ts.
 */
export function DevPlaceholder({ label, configKey }: { label: string; configKey: string }) {
  return (
    <div className="dev-placeholder" role="img" aria-label={`Placeholder for ${label}`}>
      <strong>{label}</strong>
      <span>
        Real photo required — set <code>{configKey}</code> in src/config.ts
      </span>
    </div>
  );
}
