import { generateGitignore, generateTsConfig, toDisplayName } from "../../common";
import type { PluginTemplateOptions } from "../../types";
import { generateStandardPackageJson } from "./config";
import { generateStandardAgentsMd, generateStandardReadme } from "./docs";
import { generateStandardSourceFiles } from "./source";

export function renderStandardFlavor(
  opts: PluginTemplateOptions,
  pkgName: string,
): Record<string, string> {
  const displayName = toDisplayName(pkgName);
  const description = opts.description ?? `Custom Agento plugin for ${displayName}`;

  return {
    "package.json": generateStandardPackageJson(opts, pkgName, description),
    "tsconfig.json": generateTsConfig(),
    ".gitignore": generateGitignore(),
    "README.md": generateStandardReadme(pkgName, description),
    "AGENTS.md": generateStandardAgentsMd(pkgName),
    ...generateStandardSourceFiles(pkgName, displayName, description),
  };
}
