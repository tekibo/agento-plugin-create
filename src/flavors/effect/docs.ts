export function generateEffectReadme(pkgName: string, description: string): string {
  return `# ${pkgName}

${description}

Effect-native Agento plugin built with [@agento/sdk](https://www.npmjs.com/package/@agento/sdk).

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
- Effect tools guide: [https://agento.tekibo.in/sdk/custom-tools/](https://agento.tekibo.in/sdk/custom-tools/)
`;
}

export function generateEffectAgentsMd(pkgName: string): string {
  return `# AGENTS.md - Effect Agento Plugin Rules

## Overview
This repository defines the \`${pkgName}\` plugin using \`@agento/sdk\` and Effect.
Documentation: https://agento.tekibo.in/sdk/overview/

## Conventions
- Write tools using \`Effect.gen\` and typed Schemas from \`@agento/sdk\`.
- Use \`defineSubsystem()\` and \`defineSetupTask()\` with Effect-based run handlers.
- Run \`npm run typecheck\` and \`npm run build\` before committing.
`;
}
