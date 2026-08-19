import { normalizePluginName } from "./common/normalize";
import { renderEffectFlavor } from "./flavors/effect";
import { renderMcpBridgeFlavor } from "./flavors/mcp-bridge";
import { renderMinimalFlavor } from "./flavors/minimal";
import { renderStandardFlavor } from "./flavors/standard";
import { TEMPLATE_METADATA } from "./registry";
import type { PluginTemplateOptions, RenderedPlugin, TemplateFlavor } from "./types";

export const AVAILABLE_TEMPLATE_FLAVORS: readonly TemplateFlavor[] = TEMPLATE_METADATA.map(
  (m) => m.id,
);

export function getAvailableTemplates(): readonly TemplateFlavor[] {
  return AVAILABLE_TEMPLATE_FLAVORS;
}

export function renderPluginTemplate(opts: PluginTemplateOptions): RenderedPlugin {
  const pluginName = normalizePluginName(opts.name);
  const flavor = opts.flavor ?? "standard";

  let files: Record<string, string>;
  switch (flavor) {
    case "minimal":
      files = renderMinimalFlavor(opts, pluginName);
      break;
    case "effect":
      files = renderEffectFlavor(opts, pluginName);
      break;
    case "mcp-bridge":
      files = renderMcpBridgeFlavor(opts, pluginName);
      break;
    case "standard":
    default:
      files = renderStandardFlavor(opts, pluginName);
      break;
  }

  return { pluginName, files };
}
