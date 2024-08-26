import {defineQuery} from 'next-sanity'
import { format } from 'date-fns';
import { PostQueryResult } from './types';



export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, 
  title, 
  slug, 
  publishedAt,
  "authorName": author->name,
  "authorImage": author->image,
  mainImage,
  body
}`)

export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`)


