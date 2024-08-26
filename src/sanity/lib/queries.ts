import { defineQuery } from 'next-sanity'
import { format } from 'date-fns';
import { PostQueryResult } from './types';



export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, 
  title, 
  slug, 
  publishedAt,
  author->{name, image} , 
  mainImage,
  body
}`)


export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage,publishedAt
}`)
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