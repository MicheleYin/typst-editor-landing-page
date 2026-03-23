import fs from "fs"
import path from "path"

/**
 * Load a markdown file from the repo `content/` directory (server-only).
 */
export function readMarkdownFile(filename: string): string {
  const full = path.join(process.cwd(), "content", filename)
  return fs.readFileSync(full, "utf8")
}
