export interface NavLink {
  label: string
  href: string
}

export interface SiteMeta {
  description: string
  ogImage?: string
}

export interface HomeFeature {
  title: string
  description: string
}

export interface MarketingFeature {
  title: string
  description: string
  image: string
  imageAlt?: string
  imageLeft?: boolean
}

export interface HomeContent {
  heroTitle: string
  heroSubtitle: string
  featuresSectionTitle: string
  features: HomeFeature[]
  screenshots?: string[]
  marketingFeatures?: MarketingFeature[]
  ios?: {
    marketingFeatures?: MarketingFeature[]
    screenshots?: string[]
  }
  macos?: {
    marketingFeatures?: MarketingFeature[]
    screenshots?: string[]
  }
}

export interface MarkdownPageRef {
  slug: string
  title: string
  /** File name under `content/` (e.g. `privacy.md`). */
  markdownFile: string
}

export interface SiteConfig {
  siteName: string
  meta: SiteMeta
  nav: NavLink[]
  footer: {
    copyrightName: string
    links: NavLink[]
  }
  home: HomeContent
  pages: MarkdownPageRef[]
  githubUrl?: string
}
