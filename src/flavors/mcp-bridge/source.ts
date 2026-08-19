export function generateMcpBridgeSourceFiles(
  pkgName: string,
  displayName: string,
  description: string,
): Record<string, string> {
  const indexTs = `import { definePlugin } from "@agento/sdk";
import { mcpSubsystem } from "./subsystems/mcp";

export const plugin = definePlugin({
  id: "${pkgName}",
  name: "${displayName}",
  version: "0.1.0",
  description: "${description}",
  registerSubsystems() {
    return [mcpSubsystem];
  },
});

export default plugin;
`;

  const subsystemTs = `import { defineSubsystem, defineSetupTask } from "@agento/sdk";

export const mcpSubsystem = defineSubsystem({
  id: "${pkgName}.mcp",
  name: "${displayName} MCP Bridge",
  setupTasks: [
    defineSetupTask({
      id: "mcp:connect",
      name: "Connect to MCP Server",
      run: (ctx) => {
        ctx.emitProgress("Connecting to MCP server transport...");
        ctx.emitProgress("MCP server connected.");
      },
    }),
  ],
  dispose: async () => {
    // Teardown MCP transport connections
  },
});
`;

  return {
    "src/index.ts": indexTs,
    "src/subsystems/mcp.ts": subsystemTs,
  };
}
