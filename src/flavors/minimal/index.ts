import { generateGitignore, generateTsConfig, toDisplayName } from "../../common";
import type { PluginTemplateOptions } from "../../types";
import { generateMinimalPackageJson } from "./config";
import { generateMinimalAgentsMd, generateMinimalReadme } from "./docs";
import { generateMinimalSourceFiles } from "./source";

export function renderMinimalFlavor(
  opts: PluginTemplateOptions,
  pkgName: string,
): Record<string, string> {
  const displayName = toDisplayName(pkgName);
  const description = opts.description ?? `Minimal Agento plugin for ${displayName}`;

  return {
    "package.json": generateMinimalPackageJson(opts, pkgName, description),
    "tsconfig.json": generateTsConfig(),
    ".gitignore": generateGitignore(),
    "README.md": generateMinimalReadme(pkgName, description),
    "AGENTS.md": generateMinimalAgentsMd(pkgName),
    ...generateMinimalSourceFiles(pkgName, displayName, description),
  };
}
