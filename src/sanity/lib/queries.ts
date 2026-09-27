import { defineQuery } from 'next-sanity'
import { format } from 'date-fns';
import { PostQueryResult } from './types';



export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) [0...100]{
  _id,
  title,
  slug,
  publishedAt,
  author->{name, image} ,
  mainImage,
  body,
  categories[]->{title, "slug": slug.current}
}`)


export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage, publishedAt,
  author->{name, image},
  categories[]->{title, "slug": slug.current}
}`)
// Fields needed to build per-post <head> metadata. Kept separate from POST_QUERY
// so generateMetadata does not pull the whole body.
export const POST_SEO_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title,
  excerpt,
  publishedAt,
  _updatedAt,
  mainImage,
  "slug": slug.current,
  "plain": pt::text(body),
  author->{name},
  categories[]->{title}
}`)

/**
 * Listing query for /blog.
 *
 * Deliberately does NOT pull the Portable Text body, or even its plain text.
 * The index needs a summary line and a reading time, nothing more, and 60-odd
 * full bodies is a large payload to move on every revalidate. `excerpt` is the
 * meta description the post was written with, which reads better on a card
 * than a truncated first paragraph, and the word count is done in GROQ so the
 * article text never leaves Sanity.
 */
export const BLOG_INDEX_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...200]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  "words": length(string::split(pt::text(body), " ")),
  mainImage,
  author->{name, image},
  categories[]->{title, "slug": slug.current}
}`)

/**
 * Candidate pool for "related posts".
 *
 * Nearly every post carries the "World Tax Watch" category, so a pure category
 * match would just return the latest posts. This returns a wider pool that the
 * page then ranks by how much the titles actually overlap.
 */
export const RELATED_QUERY = defineQuery(`*[_type == "post" && defined(slug.current) && slug.current != $slug] | order(publishedAt desc)[0...40]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  mainImage,
  categories[]->{title, "slug": slug.current}
}`)

export const SITEMAP_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)]{
  "slug": slug.current,
  "updated": coalesce(_updatedAt, publishedAt)
} | order(updated desc)`)

export const NEXT_QUERY = defineQuery(`
  *[_type == "post" && publishedAt > $publishedAt]
  | order(publishedAt asc)
  [0] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
  }
`);

export const PREVIOUS_QUERY = defineQuery(`
  *[_type == "post" && publishedAt < $publishedAt]
  | order(publishedAt desc)
  [0] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
  }
`);