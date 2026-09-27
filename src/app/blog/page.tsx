import { sanityFetch } from "@/sanity/lib/client";
import { BLOG_INDEX_QUERY } from "@/sanity/lib/queries";
import { BlogList, BlogListItem } from "./_components/blog-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax, Audit & Business Insight for Nigeria",
  description:
    "Practical analysis of Nigerian tax, audit and compliance from VOG Global: NRS e-invoicing, VAT, withholding tax, IFRS and the reforms changing how businesses file.",
  alternates: { canonical: "https://www.vog.global/blog" },
  openGraph: {
    type: "website",
    title: "VOG Global Blog: Tax, Audit & Business Insight for Nigeria",
    description:
      "Practical analysis of Nigerian tax, audit and compliance, updated as the rules change.",
    url: "https://www.vog.global/blog",
  },
};

// Shape returned by BLOG_INDEX_QUERY. Declared here rather than taken from the
// generated types, because the generated ones track POSTS_QUERY.
type IndexPost = {
  _id: string;
  title: string | null;
  slug: string | null;
  publishedAt: string | null;
  excerpt: string | null;
  words: number | null;
  mainImage: { asset?: { _ref?: string } } | null;
  author: { name?: string | null; image?: { asset?: { _ref?: string } } } | null;
  categories: { title: string | null; slug: string | null }[] | null;
};

function readingTime(words: number | null): string {
  return `${Math.max(1, Math.round((words ?? 0) / 200))} min read`;
}

export default async function Page() {
  const posts = await sanityFetch<IndexPost[]>({
    query: BLOG_INDEX_QUERY,
    revalidate: 30,
  });

  const items: BlogListItem[] = (Array.isArray(posts) ? posts : [])
    .filter((post) => post?.slug && post?.title && post?.publishedAt)
    .map((post) => ({
      id: post._id,
      title: post.title as string,
      // Posts carry a hand-written excerpt (the meta description), which reads
      // better on a card than a truncated first paragraph.
      excerpt: post.excerpt?.trim() ?? "",
      publishedAt: post.publishedAt as string,
      date: new Date(post.publishedAt as string).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      readTime: readingTime(post.words),
      authorName: post.author?.name ?? "VOG Global",
      authorImageRef: post.author?.image?.asset?._ref ?? undefined,
      imageRef: post.mainImage?.asset?._ref ?? undefined,
      slug: post.slug as string,
      categories: (post.categories ?? [])
        .filter((c): c is { title: string; slug: string } =>
          Boolean(c?.title && c?.slug)
        )
        .map((c) => ({ title: c.title, slug: c.slug })),
    }));

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
            Nigeria&apos;s economy, from the VOG Global team.
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
