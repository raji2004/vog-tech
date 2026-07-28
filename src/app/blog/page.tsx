import { sanityFetch } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { PostsQueryResult } from "@/sanity/lib/types";
import { BlogList, BlogListItem } from "./_components/blog-list";

function toPlainText(body: PostsQueryResult[number]["body"]): string {
  if (!Array.isArray(body)) return "";
  return body
    .map((block) =>
      block._type === "block"
        ? block.children?.map((child) => child.text).join("") ?? ""
        : ""
    )
    .join(" ");
}

function readingTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

export default async function Page() {
  const posts: PostsQueryResult | null = await sanityFetch<PostsQueryResult>({
    query: POSTS_QUERY,
    revalidate: 30,
  });

  const items: BlogListItem[] = Array.isArray(posts)
    ? posts.map((post) => {
        const plain = toPlainText(post.body);
        return {
          id: post._id,
          title: post.title,
          excerpt:
            plain.length > 170 ? `${plain.slice(0, 170).trimEnd()}…` : plain,
          publishedAt: post.publishedAt,
          date: new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          readTime: readingTime(plain),
          authorName: post.author?.name ?? "VOG Global",
          authorImageRef: post.author?.image?.asset?._ref ?? undefined,
          imageRef: post.mainImage?.asset?._ref ?? undefined,
          slug: post.slug.current,
          categories: (post.categories ?? [])
            .filter((c): c is { title: string; slug: string } =>
              Boolean(c?.title && c?.slug)
            )
            .map((c) => ({ title: c.title, slug: c.slug })),
        };
      })
    : [];

  return (
    <div>
      {/* Banner */}
      <section className="relative overflow-hidden bg-primary py-14 text-center md:py-16">
        <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-popover/25 blur-2xl" />
        <div className="relative mx-auto max-w-3xl px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            VOG Global Insights
          </p>
          <h1 className="mb-4 font-montserrat text-3xl font-semibold text-white md:text-5xl">
            The Blog
          </h1>
          <p className="mx-auto max-w-xl text-white/80">
            Clear analysis of tax, public finance and the policies shaping
            Nigeria&apos;s economy — from the VOG Global team.
          </p>
        </div>
      </section>

      {/* Listing */}
      <section className="bg-[#f5f7f3] p-section-padding-sm md:p-section-padding">
        <div className="mx-auto max-w-6xl">
          <BlogList items={items} />
        </div>
      </section>
    </div>
  );
}
