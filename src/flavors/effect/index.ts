import { generateGitignore, generateTsConfig, toDisplayName } from "../../common";
import type { PluginTemplateOptions } from "../../types";
import { generateEffectPackageJson } from "./config";
import { generateEffectAgentsMd, generateEffectReadme } from "./docs";
import { generateEffectSourceFiles } from "./source";

export function renderEffectFlavor(
  opts: PluginTemplateOptions,
  pkgName: string,
): Record<string, string> {
  const displayName = toDisplayName(pkgName);
  const description = opts.description ?? `Effect-native Agento plugin for ${displayName}`;

  return {
    "package.json": generateEffectPackageJson(opts, pkgName, description),
    "tsconfig.json": generateTsConfig(),
    ".gitignore": generateGitignore(),
    "README.md": generateEffectReadme(pkgName, description),
    "AGENTS.md": generateEffectAgentsMd(pkgName),
    ...generateEffectSourceFiles(pkgName, displayName, description),
  };
}
