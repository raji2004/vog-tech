import { ArticlePortableText } from "@/sanity/portableText";
import { POST_QUERY, NEXT_QUERY, PREVIOUS_QUERY } from "@/sanity/lib/queries";
import { PostQueryResult, NextBlogPost, PreviousBlogPost } from "@/sanity/lib/types";
import { sanityFetch } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ChevronRight, ChevronLeft, Clock } from "lucide-react";
import { cn, slugifyHeading } from "@/lib/utils";
import Link from "next/link";
import { ArticleToc, ReadingProgress, Heading } from "../_components/article-toc";
import { ShareButtons } from "../_components/share-buttons";
import type { Metadata } from "next";
import { POST_SEO_QUERY } from "@/sanity/lib/queries";
import { categoryCover } from "@/lib/blog-images";
import {
  SITE_URL,
  metaDescription,
  extractFaq,
  faqJsonLd,
  articleJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";

type PostSeo = {
  title?: string;
  excerpt?: string;
  plain?: string;
  publishedAt?: string;
  _updatedAt?: string;
  mainImage?: unknown;
  slug?: string;
  author?: { name?: string };
  categories?: { title?: string }[];
};

async function getSeo(slug?: string): Promise<PostSeo | null> {
  if (!slug) return null;
  return sanityFetch<PostSeo>({
    query: POST_SEO_QUERY,
    params: { slug },
    revalidate: 300,
  });
}

function ogImageFor(post: PostSeo | null): string {
  if (post?.mainImage) {
    try {
      return urlFor(post.mainImage as never)
        .width(1200)
        .height(630)
        .fit("crop")
        .url();
    } catch {
      // fall through to the category cover
    }
  }
  return `${SITE_URL}${categoryCover(post?.categories)}`;
}

export async function generateMetadata({
  params,
}: {
  params: { slug?: string };
}): Promise<Metadata> {
  const post = await getSeo(params.slug);

  if (!post?.title) {
    return {
      title: "Post not found",
      robots: { index: false, follow: true },
    };
  }

  const description = metaDescription(post.excerpt, post.plain);
  const url = `${SITE_URL}/blog/${params.slug}`;
  const image = ogImageFor(post);

  return {
    title: post.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url,
      siteName: "VOG Global",
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt ?? post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      tags: post.categories?.map((c) => c?.title).filter(Boolean) as string[] | undefined,
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [image],
    },
  };
}

const Post = async ({
  isPrev,
  publishedAt,
}: {
  isPrev?: boolean;
  publishedAt?: string;
}) => {
  const post: NextBlogPost | PreviousBlogPost | null = await sanityFetch<
    NextBlogPost | PreviousBlogPost
  >({
    query: isPrev ? PREVIOUS_QUERY : NEXT_QUERY,
    params: { publishedAt },
  });

  if (!post) return null;

  const title =
    post.title.length > 28 ? `${post.title.slice(0, 28)}…` : post.title;

  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className={cn(
        "group flex max-w-[48%] items-center gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
        isPrev ? "flex-row" : "ml-auto flex-row-reverse text-right"
      )}
    >
      {isPrev ? (
        <ChevronLeft
          size={20}
          className="shrink-0 text-popover transition-transform group-hover:-translate-x-0.5"
        />
      ) : (
        <ChevronRight
          size={20}
          className="shrink-0 text-popover transition-transform group-hover:translate-x-0.5"
        />
      )}
      <div className="flex flex-col">
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
          {isPrev ? "Previous" : "Next"}
        </span>
        <span className="text-sm font-medium text-primary">{title}</span>
      </div>
    </Link>
  );
};

function toPlainText(body: PostQueryResult["body"]): string {
  if (!Array.isArray(body)) return "";
  return body
    .map((block) =>
      block._type === "block"
        ? block.children?.map((child) => child.text ?? "").join(" ")
        : ""
    )
    .join(" ");
}

export default async function Page({
  params,
}: {
  params: { slug?: string };
}) {
  const post: PostQueryResult | null = await sanityFetch<PostQueryResult>({
    query: POST_QUERY,
    params: { slug: params.slug },
    revalidate: 30,
  });

  const plain = toPlainText(post?.body ?? null);
  const words = plain.trim().split(/\s+/).filter(Boolean).length;
  const readTime = `${Math.max(1, Math.round(words / 200))} min read`;

  const date = post?.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const category = post?.categories?.find((c) => c?.title)?.title ?? null;
  const authorName = post?.author?.name ?? "VOG Global";

  // Build the table of contents from the h2/h3 headings in the post body.
  const headings: Heading[] = Array.isArray(post?.body)
    ? post!.body
        .filter(
          (b): b is Extract<typeof b, { _type: "block" }> =>
            b._type === "block" && (b as any).style !== undefined
        )
        .filter((b) => ["h2", "h3"].includes((b as any).style))
        .map((b) => {
          const text = b.children?.map((c) => c.text ?? "").join("") ?? "";
          return {
            id: slugifyHeading(text),
            text,
            level: (b as any).style === "h3" ? 3 : 2,
          };
        })
        .filter((h) => h.text.length > 0)
    : [];

  // Structured data: lets Google show this as an article result, and the FAQ
  // block as an expandable rich result.
  const seo = await getSeo(params.slug);
  const description = metaDescription(seo?.excerpt, plain);
  const faq = faqJsonLd(extractFaq(post?.body));
  const article = post?.title
    ? articleJsonLd({
        title: post.title,
        description,
        slug: params.slug ?? "",
        publishedAt: post.publishedAt,
        updatedAt: seo?._updatedAt,
        authorName: authorName,
        imageUrl: ogImageFor(seo),
        categories: post.categories?.map((c) => c?.title).filter(Boolean) as string[],
      })
    : null;
  const crumbs = post?.title ? breadcrumbJsonLd(post.title, params.slug ?? "") : null;

  return (
    <div>
      {article && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
        />
      )}
      {faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />
      )}
      {crumbs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
        />
      )}
      <ReadingProgress />
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary pb-14 pt-12 md:pb-16">
        <div className="pointer-events-none absolute -left-24 bottom-[-8rem] h-72 w-72 rounded-full bg-popover/25 blur-2xl" />
        <div className="relative mx-auto max-w-3xl px-6">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
          >
            <ChevronLeft size={16} /> Back to Blog
          </Link>

          {category && (
            <span className="mb-4 inline-block rounded-full bg-white/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-primary">
              {category}
            </span>
          )}

          <h1 className="font-montserrat text-3xl font-semibold leading-tight text-white md:text-[2.75rem] md:leading-[1.15]">
            {post?.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/75">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-white">
              {authorName
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")
                .toUpperCase()}
            </span>
            <span className="font-medium text-white">{authorName}</span>
            {date && (
              <>
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span>{date}</span>
              </>
            )}
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Feature image (overlaps hero) */}
      <div className="mx-auto -mt-8 max-w-4xl px-6">
        <div className="relative aspect-[16/8] w-full overflow-hidden rounded-2xl shadow-xl">
          <Image
            src={post?.mainImage ? urlFor(post.mainImage).url() : categoryCover(post?.categories)}
            alt={post?.title ?? "Blog image"}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Article body — TOC on the left (desktop), reading column centered */}
      <div className="mx-auto max-w-6xl px-6 py-12 lg:grid lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-12">
        <aside className="hidden lg:block">
          <ArticleToc headings={headings} />
        </aside>

        <article className="mx-auto w-full max-w-3xl">
          <div className="markdown-content vog-prose space-y-5">
            <ArticlePortableText value={post?.body} />
          </div>

          {/* Share */}
          <ShareButtons slug={params.slug} title={post?.title ?? ""} />

          {/* Prev / Next */}
          <div className="mt-14 flex items-stretch justify-between gap-4 border-t border-gray-100 pt-8">
            <Post isPrev publishedAt={post?.publishedAt} />
            <Post publishedAt={post?.publishedAt} />
          </div>
        </article>
      </div>
    </div>
  );
}
