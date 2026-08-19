export function generateMinimalReadme(pkgName: string, description: string): string {
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

## Documentation

Read the official documentation at [https://agento.tekibo.in/sdk/overview/](https://agento.tekibo.in/sdk/overview/).
`;
}

export function generateMinimalAgentsMd(pkgName: string): string {
  return `# AGENTS.md - Agento Plugin Rules

## Overview
This repository defines the \`${pkgName}\` plugin using \`@agento/sdk\`.
Documentation: https://agento.tekibo.in/sdk/overview/
`;
}
