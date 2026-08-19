export type TemplateFlavor = "standard" | "minimal" | "effect" | "mcp-bridge";

export interface TemplateMetadata {
  readonly id: TemplateFlavor;
  readonly name: string;
  readonly description: string;
  readonly tags: readonly string[];
}

export interface PluginTemplateOptions {
  readonly name: string;
  readonly description?: string;
  readonly flavor?: TemplateFlavor;
  readonly author?: string;
}

export interface GeneratedPluginFile {
  readonly path: string;
  readonly content: string;
}

export interface RenderedPlugin {
  readonly pluginName: string;
  readonly files: Record<string, string>;
}
