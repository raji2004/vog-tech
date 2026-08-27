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