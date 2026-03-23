import type { HomeContent } from "types/site"

interface LandingHomeProps {
  home: HomeContent
}

export function LandingHome({ home }: LandingHomeProps) {
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
        </div>
      </section>

      {home.marketingFeatures && home.marketingFeatures.length > 0 && (
        <section className="py-16 md:py-24 bg-[var(--app-surface)]">
          <div className="container px-6 mx-auto space-y-24">
            {home.marketingFeatures.map((feature, index) => (
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
