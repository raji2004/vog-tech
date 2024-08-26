import { BlogCard } from "@/components/card";
import { sanityFetch } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'
import { PostsQueryResult } from "@/sanity/lib/types";
import { FormatDateOptions } from "date-fns";


export default async function Page() {
    const posts:PostsQueryResult | null = await sanityFetch<PostsQueryResult>({
        query: POSTS_QUERY,
        revalidate: 300, // update cache at most once every hour
    })
    return (
        <div className=" p-section-padding-sm md:p-section-padding flex flex-col gap-10">
           {posts?.map((post)=>{
            const description = post.body
            .slice(0, 2)
            .map((block) => block.children.map((child) => child.text).join(''))
            .join('\n');
            const date = new Date(post.publishedAt).toDateString();
          
            return <BlogCard 
            key={post._id} 
            title={post.title}
             description={description}
              date={date}
               author={{
                   ...post.author,
                   image: post.author.image?.url
               }}
                img={post.mainImage.asset._ref}
                current={post.slug.current}
                />
           })}

        </div>
    )
}