export function generateGitignore(): string {
  return "node_modules/\ndist/\n.agento/\n*.tsbuildinfo\n.DS_Store\n";
}
