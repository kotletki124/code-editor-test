import { marked } from 'marked'
import DOMPurify from 'dompurify'

/**
 * Converts a Markdown string into sanitized HTML.
 * @param markdown The Markdown string to convert.
 * @returns Sanitized HTML string.
 */
export function renderMarkdown(markdown: string): string {
  if (!markdown) return ''

  const rawHtml = marked(markdown) as string
  const sanitizedHtml = DOMPurify.sanitize(rawHtml)

  return sanitizedHtml
}
