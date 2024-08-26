import Markdown from "markdown-to-jsx";
import { POST_QUERY } from '@/sanity/lib/queries'
import { PostQueryResult, PostsQueryResult } from "@/sanity/lib/types";
import { sanityFetch } from '@/sanity/lib/client'
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { H1,H2,H3 } from "@/components/typography";

export default async function Page({ params }: { params: { slug?: string, } }) {

  const post: PostQueryResult | null = await sanityFetch<PostQueryResult>({
    query: POST_QUERY,
    params: { slug: params.slug },
    revalidate: 300, // update cache at most once every hour
  })

  let fullBody = "";
  if (post && Array.isArray(post.body)) {
    fullBody = post.body.map((block) => {
      if (block._type === 'block') {
        return block.children?.map((child) => child.text).join('');
      }
      return '';
    }).join('\n');
  }
  
  
  return (
    <div >
      <div className=" bg-primary mt-10 text-center py-10">

      <H1 color="text-primary-foreground">{post?.title}</H1>
      </div>
      <div className=" markdown-content p-section-padding-sm md:p-section-padding space-y-7">
      <Image
          src={post?.mainImage?urlFor(post?.mainImage).url():"/img/home/review.svg"}
          alt="Blog Image"
          width={800}
          height={800}
          className="rounded-2xl w-[900px] mx-auto h-auto"
        />

        <Markdown>{fullBody}</Markdown>
      </div>
    </div>
  )

}