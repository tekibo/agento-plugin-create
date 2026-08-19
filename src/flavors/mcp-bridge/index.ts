import { generateGitignore, generateTsConfig, toDisplayName } from "../../common";
import type { PluginTemplateOptions } from "../../types";
import { generateMcpBridgePackageJson } from "./config";
import { generateMcpBridgeAgentsMd, generateMcpBridgeReadme } from "./docs";
import { generateMcpBridgeSourceFiles } from "./source";

export function renderMcpBridgeFlavor(
  opts: PluginTemplateOptions,
  pkgName: string,
): Record<string, string> {
  const displayName = toDisplayName(pkgName);
  const description = opts.description ?? `MCP Bridge Agento plugin for ${displayName}`;

  return {
    "package.json": generateMcpBridgePackageJson(opts, pkgName, description),
    "tsconfig.json": generateTsConfig(),
    ".gitignore": generateGitignore(),
    "README.md": generateMcpBridgeReadme(pkgName, description),
    "AGENTS.md": generateMcpBridgeAgentsMd(pkgName),
    ...generateMcpBridgeSourceFiles(pkgName, displayName, description),
  };
}
