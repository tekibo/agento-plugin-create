export function generateMinimalSourceFiles(
  pkgName: string,
  displayName: string,
  description: string,
): Record<string, string> {
  const indexTs = `import { definePlugin, defineTool, z } from "@agento/sdk";

export const helloTool = defineTool({
  description: "Greet a user with a message",
  parameters: z.object({
    name: z.string().default("world"),
  }),
  execute: ({ name }) => ({ message: \`Hello, \${name}!\` }),
});

export const plugin = definePlugin({
  id: "${pkgName}",
  name: "${displayName}",
  version: "0.1.0",
  description: "${description}",
  registerTools() {
    return { hello: helloTool };
  },
});

export default plugin;
`;

  return {
    "src/index.ts": indexTs,
  };
}
