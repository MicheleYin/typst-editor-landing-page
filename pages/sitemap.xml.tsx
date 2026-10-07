import type { GetServerSideProps } from "next"

import { getSiteConfig } from "lib/site-config"

function getBaseUrl(req: Parameters<GetServerSideProps>[0]["req"]): string {
  const configured = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "")
  if (configured) return configured

  const protocol = req.headers["x-forwarded-proto"] ?? "http"
  const host = req.headers.host ?? "localhost:3001"
  return `${protocol}://${host}`
}

function escapeXml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const baseUrl = getBaseUrl(req)
  const { nav } = getSiteConfig()
  const paths = Array.from(new Set(nav.map((link) => link.href)))
  const urls = paths
    .map((path) => `  <url><loc>${escapeXml(`${baseUrl}${path}`)}</loc></url>`)
    .join("\n")
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

  res.setHeader("Content-Type", "application/xml; charset=utf-8")
  res.write(sitemap)
  res.end()

  return { props: {} }
}

export default function SitemapXml() {
  return null
}