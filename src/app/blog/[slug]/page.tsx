import Markdown from "markdown-to-jsx";
import { POST_QUERY, NEXT_QUERY, PREVIOUS_QUERY } from '@/sanity/lib/queries'
import { PostQueryResult, NextBlogPost, PreviousBlogPost } from "@/sanity/lib/types";
import { sanityFetch } from '@/sanity/lib/client'
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { H1, H2, H3, P } from "@/components/typography";
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Post = async ({ isPrev, publishedAt }: { isPrev?: boolean, publishedAt?: string }) => {

  const post: NextBlogPost | PreviousBlogPost | null = await sanityFetch<NextBlogPost | PreviousBlogPost>({
    query: isPrev ? PREVIOUS_QUERY : NEXT_QUERY,
    params: { publishedAt },
  })
  const title = post?.title.slice(0, 15) + (post?.title?.length ?? 0 > 15 ? '...' : '');
  return (
   <Link href={`/blog/${post?.slug.current}`}>
  <div
    className={cn(
      "bg-popover/40 p-3 rounded-md flex items-center gap-4",
      isPrev ? "flex-row-reverse" : "flex-row",
      post === null ? 'hidden' : 'flex'
    )}
  >
    <Image
      src={
        post?.mainImage ? urlFor(post.mainImage).url() : "/img/home/review.svg"
      }
      width={70}
      height={70}
      className=" hidden md:block "
      alt="Review"
    />
    <div className="flex flex-col">
      <P className="!m-0 text-sm" color="text-secondary-foreground">
        {isPrev ? "Previous Post" : "Next Post"}
      </P>
      <P className="!m-0 hidden md:block md:text-base" color="text-secondary-foreground">
        {title}
      </P>
    </div>
    {isPrev ? (
      <ChevronLeft size={20} className="text-secondary-foreground" />
    ) : (
      <ChevronRight size={20} className="text-secondary-foreground" />
    )}
  </div>
</Link>
  )
}
export default async function Page({ params }: { params: { slug?: string, } }) {

  const post: PostQueryResult | null = await sanityFetch<PostQueryResult>({
    query: POST_QUERY,
    params: { slug: params.slug },
    revalidate: 30, // update cache at most once every hour
  })

  let fullBody = "";
  if (post && Array.isArray(post.body)) {
    fullBody = post.body.map((block) => {
      if (block._type === 'block') {
        return block.children?.map((child) => child.text).join(' ');
      }
      return '';
    }).join('\n');
  }


  return (
    <div >
      <div className=" bg-primary mt-10 text-center ps-section-padding-sm md:p-section-padding py-10">

        <H1 color="text-primary-foreground">{post?.title}</H1>
      </div>
      <div className=" markdown-content p-section-padding-sm md:p-section-padding space-y-7">
        <Image
          src={post?.mainImage ? urlFor(post?.mainImage).url() : "/img/home/review.svg"}
          alt="Blog Image"
          width={800}
          height={800}
          className="rounded-2xl w-[1200px] mx-auto h-auto"
        />

        <Markdown>{fullBody}</Markdown>
        <div className=" flex justify-between">

        <Post isPrev publishedAt={post?.publishedAt} />
        <Post  publishedAt={post?.publishedAt} />
        </div>
      </div>
    </div>
  )

}