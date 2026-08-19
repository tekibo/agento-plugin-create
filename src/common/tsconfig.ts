export function generateTsConfig(): string {
  return JSON.stringify(
    {
      compilerOptions: {
        target: "ESNext",
        module: "NodeNext",
        moduleResolution: "NodeNext",
        declaration: true,
        declarationDir: "./dist",
        outDir: "./dist",
        strict: true,
        noUncheckedIndexedAccess: true,
        skipLibCheck: true,
        esModuleInterop: true,
      },
      include: ["src/**/*"],
    },
    null,
    2,
  ) + "\n";
}
