import { describe, it, expect } from "bun:test";
import {
  renderPluginTemplate,
  getAvailableTemplates,
  listAvailableFlavors,
  getFlavorMetadata,
} from "../src/index";

describe("@agento/plugin-create", () => {
  it("lists all available template flavors", () => {
    const flavors = getAvailableTemplates();
    expect(flavors).toContain("standard");
    expect(flavors).toContain("minimal");
    expect(flavors).toContain("effect");
    expect(flavors).toContain("mcp-bridge");
  });

  it("retrieves flavor metadata from registry", () => {
    const metaList = listAvailableFlavors();
    expect(metaList.length).toBe(4);

    const mcpMeta = getFlavorMetadata("mcp-bridge");
    expect(mcpMeta?.name).toBe("MCP Server Bridge");
    expect(mcpMeta?.tags).toContain("mcp");
  });

  it("renders standard template with expected files", () => {
    const rendered = renderPluginTemplate({
      name: "redis",
      flavor: "standard",
    });

    expect(rendered.pluginName).toBe("agento-plugin-redis");
    expect(Object.keys(rendered.files)).toContain("package.json");
    expect(Object.keys(rendered.files)).toContain("src/index.ts");
    expect(Object.keys(rendered.files)).toContain("src/tools/example.ts");
    expect(Object.keys(rendered.files)).toContain("src/subsystems/example.ts");

    const pkg = JSON.parse(rendered.files["package.json"] ?? "{}");
    expect(pkg.name).toBe("agento-plugin-redis");
    expect(pkg.peerDependencies["@agento/sdk"]).toBeDefined();

    const readme = rendered.files["README.md"] ?? "";
    expect(readme).toContain("/sdk/overview/");
  });

  it("renders minimal template with single file entrypoint", () => {
    const rendered = renderPluginTemplate({
      name: "@myorg/simple",
      flavor: "minimal",
    });

    expect(rendered.pluginName).toBe("@myorg/simple");
    expect(Object.keys(rendered.files)).toContain("package.json");
    expect(Object.keys(rendered.files)).toContain("src/index.ts");
    expect(Object.keys(rendered.files)).not.toContain("src/tools/example.ts");
  });

  it("renders effect template with Effect-native tools and subsystems", () => {
    const rendered = renderPluginTemplate({
      name: "worker",
      flavor: "effect",
    });

    expect(rendered.files["src/tools/example.ts"]).toContain("Effect.gen");
    expect(rendered.files["src/subsystems/example.ts"]).toContain("Effect.gen");
  });

  it("renders mcp-bridge template with MCP subsystem", () => {
    const rendered = renderPluginTemplate({
      name: "postgres-mcp",
      flavor: "mcp-bridge",
    });

    expect(rendered.files["src/subsystems/mcp.ts"]).toContain("mcpSubsystem");
    expect(rendered.files["README.md"]).toContain("Model Context Protocol (MCP) bridge");
  });
});
