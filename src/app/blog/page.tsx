import { BlogCard } from "@/components/card";
import { H2, P } from "@/components/typography";
import { Newspaper } from "lucide-react";
import { sanityFetch } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'
import { PostsQueryResult } from "@/sanity/lib/types";



export default async function Page() {
    const posts: PostsQueryResult | null = await sanityFetch<PostsQueryResult>({
        query: POSTS_QUERY,
        revalidate: 30, // update cache at most once every hour
    })

    const hasPosts = Array.isArray(posts) && posts.length > 0

    return (
        <div className=" p-section-padding-sm md:p-section-padding flex flex-row flex-wrap gap-10">
            {hasPosts ? posts.map((post) => {
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
                        image: post.author.image?.asset._ref
                    }}
                    img={post.mainImage.asset._ref}
                    current={post.slug.current}
                />
            }) : (
                <div className="w-full">
                    <div className="mx-auto flex max-w-3xl flex-col items-center rounded-3xl border border-primary/20 bg-gradient-to-b from-popover/40 to-popover/10 px-6 py-10 text-center shadow-sm md:px-10 md:py-14">
                        <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-background/80">
                            <Newspaper className="h-6 w-6 text-primary" />
                        </span>
                        <H2 className="mb-3" color="text-secondary-foreground">No Blog Posts Yet</H2>
                        <P className="max-w-xl !text-base leading-relaxed md:!text-lg" color="text-secondary-foreground">
                            We are preparing insightful articles and practical updates. Check back soon for fresh content from our team.
                        </P>
                    </div>
                </div>
            )}

        </div>
    )
}