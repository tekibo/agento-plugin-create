export function normalizePluginName(input: string): string {
  const trimmed = input.trim();
  if (trimmed.startsWith("@") || trimmed.startsWith("agento-plugin-")) {
    return trimmed;
  }
  return `agento-plugin-${trimmed}`;
}

export function toDisplayName(name: string): string {
  const base = name.startsWith("@") ? name.split("/")[1] ?? name : name;
  const stripped = base.replace(/^agento-plugin-/, "");
  return stripped
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function derivePluginId(name: string): string {
  const clean = name.replace(/^@/, "").replace(/[\/@]/g, ".");
  return `com.agento.plugin.${clean}`;
}
