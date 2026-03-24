import React from "react"
import { useRouter } from "next/router"
import classNames from "classnames"
import Link from "next/link"

import type { NavLink } from "types/site"

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href)
}

interface NavbarProps {
  siteName: string
  links: NavLink[]
  githubUrl?: string
  downloadUrl?: string
}

export function Navbar({ siteName, links, githubUrl, downloadUrl, ...props }: NavbarProps) {
  return (
    <header
      className="static top-0 z-50 flex-shrink-0 py-4 border-b border-[var(--app-border)] bg-[var(--app-bg)] md:sticky md:backdrop-blur-sm md:bg-[var(--app-bg)]/95"
      {...props}
    >
      <div className="container flex flex-col items-center justify-between px-6 mx-auto md:flex-row gap-4">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-3 text-lg font-semibold tracking-tight text-[var(--app-fg)] hover:text-[var(--app-link)]"
          >
            <img
              src="/favicon.ico"
              alt=""
              className="w-8 h-8 rounded-md"
            />
            {siteName}
          </Link>

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-[var(--app-fg-secondary)] hover:text-[var(--app-fg)] transition-colors border-l border-[var(--app-border)] pl-6"
              aria-label="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
                aria-hidden="true"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>Contribute</span>
            </a>
          )}
        </div>
        <div className="flex items-center gap-6 md:gap-8">
          {links?.length ? <Menu items={links} /> : null}
          {downloadUrl && (
            <a
              href={downloadUrl}
              className="px-5 py-2 text-sm font-semibold text-white bg-[var(--app-accent)] rounded-lg hover:brightness-110 transition-all shadow-sm whitespace-nowrap"
            >
              Download
            </a>
          )}
        </div>
      </div>
    </header>
  )
}

function Menu({ items }: { items: NavLink[] }) {
  return (
    <ul
      className="grid grid-flow-col gap-4 mx-auto mt-6 md:mt-0 auto-cols-auto md:auto-rows-auto md:gap-8"
      data-cy="navbar-menu"
    >

      {items.map((item) => (
        <MenuLink link={item} key={`${item.href}-${item.label}`} />
      ))}
    </ul>
  )
}

function MenuLink({ link }: { link: NavLink }) {
  const { asPath } = useRouter()
  const active = link.href === "/" ? asPath === "/" : asPath.startsWith(link.href)
  const className = classNames(
    "py-2 text-sm md:text-base text-[var(--app-fg-secondary)] hover:text-[var(--app-link)] transition-colors",
    active ? "font-semibold text-[var(--app-fg)]" : ""
  )

  if (isExternalHref(link.href)) {
    return (
      <li>
        <a
          href={link.href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      </li>
    )
  }

  return (
    <li>
      <Link href={link.href} className={className}>
        {link.label}
      </Link>
    </li>
  )
}
