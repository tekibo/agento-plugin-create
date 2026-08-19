import type { TemplateFlavor, TemplateMetadata } from "./types";

export const TEMPLATE_METADATA: readonly TemplateMetadata[] = [
  {
    id: "standard",
    name: "Standard Starter",
    description: "Full TypeScript plugin with custom tools, subsystems, setup tasks, and approval gates",
    tags: ["recommended", "typescript", "tools", "subsystems"],
  },
  {
    id: "minimal",
    name: "Minimal Toolset",
    description: "Lightweight single-file plugin for quick deterministic tool distribution",
    tags: ["minimal", "fast-start", "tools-only"],
  },
  {
    id: "effect",
    name: "Effect Native",
    description: "Effect-first plugin leveraging Effect.gen, Schema, and typed fiber execution",
    tags: ["effect", "functional", "resilient"],
  },
  {
    id: "mcp-bridge",
    name: "MCP Server Bridge",
    description: "Connect Model Context Protocol (MCP) server tools to Agento with lifecycle management",
    tags: ["mcp", "bridge", "external"],
  },
] as const;

export function listAvailableFlavors(): readonly TemplateMetadata[] {
  return TEMPLATE_METADATA;
}

export function getFlavorMetadata(flavor: TemplateFlavor): TemplateMetadata | undefined {
  return TEMPLATE_METADATA.find((m) => m.id === flavor);
}
