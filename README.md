<div align="center">
  <h1>@agento/plugin-create</h1>
  <p><strong>Official project generator and template scaffolding engine for Agento plugins.</strong></p>

  <p>
    <a href="https://www.npmjs.com/package/@agento/plugin-create"><img src="https://img.shields.io/npm/v/@agento/plugin-create?color=black&label=npm" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/@agento/plugin-create"><img src="https://img.shields.io/npm/dm/@agento/plugin-create?color=black&label=downloads" alt="npm downloads" /></a>
    <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue?color=black" alt="license" /></a>
    <a href="https://agento.tekibo.in/sdk/creating-plugins/#available-template-flavors"><img src="https://img.shields.io/badge/docs-agento.tekibo.in-blue" alt="docs" /></a>
  </p>

  <p>
    <a href="#installation">Installation</a> &nbsp;&bull;&nbsp;
    <a href="#template-flavors">Template Flavors</a> &nbsp;&bull;&nbsp;
    <a href="#programmatic-usage">Programmatic Usage</a> &nbsp;&bull;&nbsp;
    <a href="#cli-usage">CLI Usage</a> &nbsp;&bull;&nbsp;
    <a href="#documentation">Documentation</a>
  </p>
</div>

---

## Overview

`@agento/plugin-create` is the scaffolding engine used by the Agento CLI to generate type-safe TypeScript plugins. It produces a complete virtual file map containing source code, strict TypeScript configuration, human documentation (`README.md`), and AI coding assistant rules (`AGENTS.md`).

## Installation

```bash
# npm
npm install -D @agento/plugin-create

# pnpm
pnpm add -D @agento/plugin-create

# bun
bun add -d @agento/plugin-create
```

## Template flavors

For a detailed comparison and guide on every flavor, see the [Template Flavors Documentation](https://agento.tekibo.in/sdk/creating-plugins/#available-template-flavors).

| Flavor | Best for | Description | Documentation |
| :--- | :--- | :--- | :--- |
| `standard` | Full Plugins (Default) | Includes custom tools, subsystems, boot tasks, approval gates, and `AGENTS.md`. | [Standard Guide](https://agento.tekibo.in/sdk/creating-plugins/#available-template-flavors) |
| `minimal` | Fast Tool Distribution | Single-file TypeScript entrypoint with zero boilerplate. | [Minimal Guide](https://agento.tekibo.in/sdk/creating-plugins/#available-template-flavors) |
| `effect` | Functional Runtimes | Effect-first architecture leveraging `Effect.gen` and typed Schemas. | [Effect Guide](https://agento.tekibo.in/sdk/creating-plugins/#available-template-flavors) |
| `mcp-bridge` | External Integrations | Bridges Model Context Protocol (MCP) tool servers to Agento. | [MCP Guide](https://agento.tekibo.in/sdk/creating-plugins/#available-template-flavors) |

## Programmatic usage

```typescript
import {
  renderPluginTemplate,
  getAvailableTemplates,
  listAvailableFlavors,
} from "@agento/plugin-create";

// 1. List available template flavors
const flavors = getAvailableTemplates();
// => ["standard", "minimal", "effect", "mcp-bridge"]

// 2. Render virtual file map for a new plugin
const { pluginName, files } = renderPluginTemplate({
  name: "redis",
  flavor: "standard",
  description: "Redis caching tools and health checks",
});

console.log(pluginName); // "agento-plugin-redis"
console.log(Object.keys(files));
// [
//   "package.json",
//   "tsconfig.json",
//   ".gitignore",
//   "README.md",
//   "AGENTS.md",
//   "src/index.ts",
//   "src/tools/example.ts",
//   "src/subsystems/example.ts"
// ]
```

## CLI usage

The easiest way to scaffold a plugin is using the Agento CLI:

```bash
# Standard starter
agento plugin init postgres

# Minimal single-file plugin
agento plugin init quick-tools --flavor minimal

# Effect-native plugin
agento plugin init worker --flavor effect

# MCP server bridge
agento plugin init postgres-mcp --flavor mcp-bridge
```

## Documentation

- [Template Flavors & Scaffolding Guide](https://agento.tekibo.in/sdk/creating-plugins/#available-template-flavors)
- [Step-by-Step Plugin Creation Tutorial](https://agento.tekibo.in/sdk/creating-plugins/)
- [SDK Public API Overview](https://agento.tekibo.in/sdk/overview/)
- [CLI Plugin Init Command Reference](https://agento.tekibo.in/getting-started/commands/#agento-plugin-init-name-targetdir---flavor-standardminimal--effectmcp-bridge)

## License

[MIT](./LICENSE)
