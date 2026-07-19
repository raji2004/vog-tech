import { PortableText as PT, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from './lib/image'
import { slugifyHeading } from '@/lib/utils'

const headingId = (value: any) =>
  slugifyHeading(value?.children?.map((c: any) => c.text ?? '').join('') ?? '')

const components: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null
      const src = urlFor(value).url()
      return <Image src={src} alt={value.alt || 'image'} width={800} height={400} className="mx-auto rounded-lg" />
    }
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-semibold">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-medium">{children}</h3>,
    normal: ({ children }: any) => <p className="leading-relaxed">{children}</p>,
  },
  marks: {
    strong: ({ children }: any) => <strong>{children}</strong>,
    em: ({ children }: any) => <em>{children}</em>,
    link: ({ children, value }: any) => {
      const href = value?.href || ''
      return <a href={href} className="text-primary underline">{children}</a>
    }
  }
}

export function PortableText({ value }: { value: any }) {
  if (!value) return null
  return <PT value={value} components={components} />
}

// Article variant: headings get anchor ids so the table of contents can link
// to them and scroll-spy can track the active section.
const articleComponents: PortableTextComponents = {
  ...components,
  block: {
    h1: ({ children, value }: any) => <h1 id={headingId(value)}>{children}</h1>,
    h2: ({ children, value }: any) => <h2 id={headingId(value)}>{children}</h2>,
    h3: ({ children, value }: any) => <h3 id={headingId(value)}>{children}</h3>,
    normal: ({ children }: any) => <p className="leading-relaxed">{children}</p>,
  },
}

export function ArticlePortableText({ value }: { value: any }) {
  if (!value) return null
  return <PT value={value} components={articleComponents} />
}

export default PortableText
