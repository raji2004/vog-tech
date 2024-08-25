import {sanityFetch} from '@/sanity/lib/client'
import {POSTS_QUERY} from '@/sanity/lib/queries'

export default async function PostIndex() {
  const posts = await sanityFetch({
    query: POSTS_QUERY,
    revalidate: 3600, // update cache at most once every hour
  })

  return (
    <ul>
      {posts.map((post) => (
        <li key={post._id}>
          <a href={`/posts/${post?.slug?.current}`}>{post?.title}</a>
        </li>
      ))}
    </ul>
  )
}