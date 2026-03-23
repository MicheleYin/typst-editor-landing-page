import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next"

import { getSiteConfig } from "lib/site-config"
import { readMarkdownFile } from "lib/read-markdown"
import { Layout } from "components/layout"
import { Meta } from "components/meta"
import { MarkdownBody } from "components/markdown-body"

interface ContentPageProps {
  title: string
  markdown: string
}

export default function ContentPage({ title, markdown }: ContentPageProps) {
  return (
    <Layout>
      <Meta title={title} />
      <article className="container max-w-3xl px-6 pt-10 pb-16 mx-auto md:pt-16">
        <MarkdownBody source={markdown} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const { pages } = getSiteConfig()
  return {
    paths: pages.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ slug: string }>
): Promise<GetStaticPropsResult<ContentPageProps>> {
  const slug = context.params?.slug
  const page = getSiteConfig().pages.find((p) => p.slug === slug)

  if (!page) {
    return { notFound: true }
  }

  const markdown = readMarkdownFile(page.markdownFile)

  return {
    props: {
      title: page.title,
      markdown,
    },
  }
}
