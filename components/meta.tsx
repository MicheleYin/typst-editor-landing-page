import Head from "next/head"
import { useRouter } from "next/router"

import { getSiteConfig } from "lib/site-config"

interface MetaProps {
  title?: string
  description?: string
}

export function Meta({ title, description }: MetaProps) {
  const router = useRouter()
  const { siteName, meta } = getSiteConfig()
  const pageTitle = title ? `${title} | ${siteName}` : siteName
  const desc = description ?? meta.description
  const base = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "") ?? ""
  const path = router.asPath === "/" ? "" : router.asPath
  const absolute = base ? `${base}${path || "/"}` : null

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={desc} />
      {absolute ? <link rel="canonical" href={absolute} /> : null}
      {meta.ogImage && base ? (
        <>
          <meta
            property="og:image"
            content={`${base}${meta.ogImage}`}
          />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="600" />
        </>
      ) : null}
    </Head>
  )
}
