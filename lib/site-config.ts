import type { SiteConfig } from "types/site"

import raw from "../content/site.json"

export function getSiteConfig(): SiteConfig {
  return raw as SiteConfig
}
