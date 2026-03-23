import { getSiteConfig } from "lib/site-config"
import { Layout } from "components/layout"
import { LandingHome } from "components/landing-home"
import { Meta } from "components/meta"

export default function HomePage() {
  const { home, meta } = getSiteConfig()

  return (
    <Layout>
      <Meta description={meta.description} />
      <LandingHome home={home} />
    </Layout>
  )
}
