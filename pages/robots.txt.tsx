import type { GetServerSideProps } from "next"

function getBaseUrl(req: Parameters<GetServerSideProps>[0]["req"]): string {
  const configured = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "")
  if (configured) return configured

  const protocol = req.headers["x-forwarded-proto"] ?? "http"
  const host = req.headers.host ?? "localhost:3001"
  return `${protocol}://${host}`
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const baseUrl = getBaseUrl(req)
  res.setHeader("Content-Type", "text/plain; charset=utf-8")
  res.write(`User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`)
  res.end()

  return { props: {} }
}

export default function RobotsTxt() {
  return null
}