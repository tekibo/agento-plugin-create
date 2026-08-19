export function generateStandardSourceFiles(
  pkgName: string,
  displayName: string,
  description: string,
): Record<string, string> {
  const indexTs = `import { definePlugin } from "@agento/sdk";
import { exampleSubsystem } from "./subsystems/example";
import { exampleTool } from "./tools/example";

export const plugin = definePlugin({
  id: "${pkgName}",
  name: "${displayName}",
  version: "0.1.0",
  description: "${description}",
  registerTools() {
    return { example_tool: exampleTool };
  },
  registerSubsystems() {
    return [exampleSubsystem];
  },
});

export default plugin;
`;

  const toolTs = `import { defineTool, z } from "@agento/sdk";

export const exampleTool = defineTool({
  description: "An example deterministic tool provided by ${displayName}",
  parameters: z.object({
    message: z.string().describe("Input message to process"),
    uppercase: z.boolean().optional().default(false).describe("Transform message to uppercase"),
  }),
  execute: ({ message, uppercase }) => {
    const output = uppercase ? message.toUpperCase() : message;
    return { result: output, timestamp: new Date().toISOString() };
  },
});
`;

  const subsystemTs = `import { defineSubsystem, defineSetupTask } from "@agento/sdk";

export const exampleSubsystem = defineSubsystem({
  id: "${pkgName}.subsystem",
  name: "${displayName} Subsystem",
  setupTasks: [
    defineSetupTask({
      id: "example:preflight",
      name: "${displayName} Pre-Flight Check",
      run: (ctx) => {
        ctx.emitProgress("Validating configuration...");
        ctx.emitProgress("Ready.");
      },
    }),
  ],
  approvals: {
    example_sensitive_action: "user-approval",
  },
  instructions: {
    plan: "${displayName}: In Plan Mode, outline operations before applying changes.",
    act: "${displayName}: In Act Mode, execute approved operations with deterministic validation.",
  },
});
`;

  return {
    "src/index.ts": indexTs,
    "src/tools/example.ts": toolTs,
    "src/subsystems/example.ts": subsystemTs,
  };
}
