import type { PluginTemplateOptions } from "../../types";

export function generateMcpBridgePackageJson(
  _opts: PluginTemplateOptions,
  pkgName: string,
  description: string,
): string {
  return JSON.stringify(
    {
      name: pkgName,
      version: "0.1.0",
      description,
      type: "module",
      main: "./dist/index.js",
      types: "./dist/index.d.ts",
      files: ["dist", "README.md", "AGENTS.md"],
      scripts: { build: "tsc", typecheck: "tsc --noEmit" },
      peerDependencies: { "@agento/sdk": "^0.1.0" },
      devDependencies: {
        "@agento/sdk": "^0.1.0",
        "@types/node": "^22.0.0",
        typescript: "^5.7.0",
      },
    },
    null,
    2,
  ) + "\n";
}
