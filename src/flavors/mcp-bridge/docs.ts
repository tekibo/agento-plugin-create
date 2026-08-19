export function generateMcpBridgeReadme(pkgName: string, description: string): string {
  return `# ${pkgName}

${description}

Model Context Protocol (MCP) bridge plugin built with [@agento/sdk](https://www.npmjs.com/package/@agento/sdk).

## Installation

\`\`\`bash
# npm
npm install

# pnpm
pnpm install

# bun
bun install
\`\`\`

## Build and typecheck

\`\`\`bash
# npm
npm run build
npm run typecheck

# pnpm
pnpm build
pnpm typecheck

# bun
bun run build
bun run typecheck
\`\`\`

## Documentation

- Official documentation: [https://agento.tekibo.in/sdk/overview/](https://agento.tekibo.in/sdk/overview/)
- Custom tools and MCP guide: [https://agento.tekibo.in/sdk/custom-tools/](https://agento.tekibo.in/sdk/custom-tools/)
`;
}

export function generateMcpBridgeAgentsMd(pkgName: string): string {
  return `# AGENTS.md - MCP Bridge Plugin Rules

## Overview
This repository defines the \`${pkgName}\` MCP Bridge plugin using \`@agento/sdk\`.
Documentation: https://agento.tekibo.in/sdk/overview/

## Conventions
- Manage connection lifecycle and expose MCP tools inside the subsystem.
- Run \`npm run typecheck\` and \`npm run build\` before committing.
`;
}
