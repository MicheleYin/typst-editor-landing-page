import ReactMarkdown from "react-markdown"

interface MarkdownBodyProps {
  source: string
}

export function MarkdownBody({ source }: MarkdownBodyProps) {
  return (
    <div
      className="prose prose-lg max-w-none prose-landing prose-headings:scroll-mt-20"
      data-cy="markdown-body"
    >
      <ReactMarkdown>{source}</ReactMarkdown>
    </div>
  )
}
