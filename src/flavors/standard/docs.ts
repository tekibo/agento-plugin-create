export function generateStandardReadme(pkgName: string, description: string): string {
  return `# ${pkgName}

${description}

Built with [@agento/sdk](https://www.npmjs.com/package/@agento/sdk).

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

## Local testing with Agento

1. Link your plugin locally:
   \`\`\`bash
   npm link
   \`\`\`

2. In your Agento workspace, register the plugin in \`.agento/config.json\`:
   \`\`\`json
   {
     "plugins": ["${pkgName}"]
   }
   \`\`\`

## Documentation

Read the official documentation at [https://agento.tekibo.in/sdk/overview/](https://agento.tekibo.in/sdk/overview/).
`;
}

export function generateStandardAgentsMd(pkgName: string): string {
  return `# AGENTS.md - Agento Plugin Development Rules

## Overview
This repository defines the \`${pkgName}\` plugin using \`@agento/sdk\`.
Documentation: https://agento.tekibo.in/sdk/overview/

## Conventions
- Export \`definePlugin()\` as default from \`src/index.ts\`.
- Use \`defineTool()\` with \`z\` from \`@agento/sdk\` for deterministic tools.
- Implement \`Subsystem\` via \`defineSubsystem()\` for pre-flight tasks and approvals.
- Run \`npm run build\` and \`npm run typecheck\` to verify changes.
`;
}
