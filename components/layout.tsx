import * as React from "react"

import { getSiteConfig } from "lib/site-config"
import { Navbar } from "components/navbar"
import { Footer } from "components/footer"

export function Layout({ children }: { children?: React.ReactNode }) {
  const { siteName, nav, footer, githubUrl, home } = getSiteConfig()
  const downloadUrl = home.downloadUrl

  return (
    <div className="flex flex-col min-h-screen bg-[var(--app-bg)]">
      <Navbar siteName={siteName} links={nav} githubUrl={githubUrl} downloadUrl={downloadUrl} />
      <main className="flex-1">{children}</main>
      <Footer
        copyrightName={footer.copyrightName}
        links={footer.links}
        githubUrl={githubUrl}
      />
    </div>
  )
}
