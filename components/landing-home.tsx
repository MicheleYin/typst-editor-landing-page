import { useState } from "react"
import type { HomeContent, MarketingFeature } from "types/site"

interface LandingHomeProps {
  home: HomeContent
}

export function LandingHome({ home }: LandingHomeProps) {
  const [platform, setPlatform] = useState<"macos" | "ios">("macos")

  const currentFeatures: MarketingFeature[] =
    (platform === "macos"
      ? home.macos?.marketingFeatures
      : home.ios?.marketingFeatures) || home.marketingFeatures || []

  const currentScreenshots: string[] =
    (platform === "macos"
      ? home.macos?.screenshots
      : home.ios?.screenshots) || home.screenshots || []

  return (
    <>
      <section
        data-cy="landing-default-hero"
        className="border-b border-[var(--app-border)] pt-10 pb-12 md:pt-16 md:pb-20"
      >
        <div className="container px-6 mx-auto text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-[var(--app-fg)]">
            {home.heroTitle}
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg leading-relaxed text-[var(--app-fg-secondary)]">
            {home.heroSubtitle}
          </p>

          <div className="mt-10 flex justify-center">
            <div className="inline-flex p-1 bg-[var(--app-surface-elevated)] rounded-xl border border-[var(--app-border)]">
              <button
                onClick={() => setPlatform("macos")}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${platform === "macos"
                  ? "bg-[var(--app-accent)] text-white shadow-lg"
                  : "text-[var(--app-fg-secondary)] hover:text-[var(--app-fg)]"
                  }`}
              >
                macOS
              </button>
              <button
                onClick={() => setPlatform("ios")}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${platform === "ios"
                  ? "bg-[var(--app-accent)] text-white shadow-lg"
                  : "text-[var(--app-fg-secondary)] hover:text-[var(--app-fg)]"
                  }`}
              >
                iPadOS
              </button>
            </div>
          </div>
        </div>
      </section>

      {currentFeatures.length > 0 && (
        <section className="py-16 md:py-24 bg-[var(--app-surface)]">
          <div className="container px-6 mx-auto space-y-24">
            {currentFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex flex-col md:items-center gap-12 lg:gap-20 ${feature.imageLeft === false ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
              >
                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden border border-[var(--app-card-border)] bg-[var(--app-surface-elevated)] shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                    <img
                      src={feature.image}
                      alt={feature.imageAlt || feature.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight text-[var(--app-fg)] md:text-4xl">
                    {feature.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-[var(--app-fg-secondary)]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}


    </>
  )
}
