export function generateEffectSourceFiles(
  pkgName: string,
  displayName: string,
  description: string,
): Record<string, string> {
  const indexTs = `import { definePlugin } from "@agento/sdk";
import { effectSubsystem } from "./subsystems/example";
import { effectTool } from "./tools/example";

export const plugin = definePlugin({
  id: "${pkgName}",
  name: "${displayName}",
  version: "0.1.0",
  description: "${description}",
  registerTools() {
    return { effect_tool: effectTool };
  },
  registerSubsystems() {
    return [effectSubsystem];
  },
});

export default plugin;
`;

  const toolTs = `import { defineTool, z, Effect } from "@agento/sdk";

export const effectTool = defineTool({
  description: "An Effect-native deterministic tool",
  parameters: z.object({
    value: z.string(),
  }),
  execute: ({ value }) =>
    Effect.gen(function* () {
      const processed = yield* Effect.succeed(value.trim());
      return { output: processed, timestamp: new Date().toISOString() };
    }),
});
`;

  const subsystemTs = `import { defineSubsystem, defineSetupTask, Effect } from "@agento/sdk";

export const effectSubsystem = defineSubsystem({
  id: "${pkgName}.subsystem",
  name: "${displayName} Subsystem",
  setupTasks: [
    defineSetupTask({
      id: "effect:preflight",
      name: "${displayName} Pre-Flight",
      run: (ctx) =>
        Effect.gen(function* () {
          ctx.emitProgress("Running Effect pre-flight check...");
          yield* Effect.void;
          ctx.emitProgress("Ready.");
        }),
    }),
  ],
});
`;

  return {
    "src/index.ts": indexTs,
    "src/tools/example.ts": toolTs,
    "src/subsystems/example.ts": subsystemTs,
  };
}
