import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/client";
import { RELATED_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { categoryCover } from "@/lib/blog-images";

type Candidate = {
  _id: string;
  title: string | null;
  slug: string | null;
  publishedAt: string | null;
  excerpt: string | null;
  mainImage: { asset?: { _ref?: string } } | null;
  categories: { title: string | null; slug: string | null }[] | null;
};

// Words too common across this blog to say anything about relatedness.
const STOP = new Set([
  "the", "a", "an", "and", "or", "of", "in", "on", "for", "to", "is", "are",
  "does", "do", "what", "why", "how", "when", "who", "your", "you", "it", "its",
  "this", "that", "with", "from", "at", "as", "be", "can", "will", "not", "no",
  "yes", "guide", "step", "nigeria", "nigerian", "business", "businesses",
  "2026", "2025", "2027", "mean", "means",
]);

function keywords(title: string): Set<string> {
  return new Set(
    title
      .toLowerCase()
      .replace(/[^a-z0-9₦%\s]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 2 && !STOP.has(w))
  );
}

/**
 * Pick three genuinely related posts.
 *
 * Matching on category alone is useless here: almost every post is filed under
 * "World Tax Watch", so it would just return the three most recent. Instead we
 * score candidates on shared title vocabulary, weighting each shared word by
 * how rare it is across the pool. Without that weighting a common word like
 * "prepare" counts as much as "ifrs" and the clusters blur. Recency only breaks
 * ties, and a post sharing nothing is dropped rather than padding the row, so
 * this section can legitimately show fewer than three cards or none at all.
 */
export async function RelatedPosts({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  const pool = await sanityFetch<Candidate[]>({
    query: RELATED_QUERY,
    params: { slug },
    revalidate: 300,
  });

  if (!Array.isArray(pool) || pool.length === 0) return null;

  const mine = keywords(title);
  const usable = pool.filter((p) => p?.slug && p?.title);

  // How many posts in the pool use each word, so rare words count for more.
  const docFreq = new Map<string, number>();
  usable.forEach((p) =>
    keywords(p.title as string).forEach((w) =>
      docFreq.set(w, (docFreq.get(w) ?? 0) + 1)
    )
  );

  const ranked = usable
    .map((p) => {
      let score = 0;
      keywords(p.title as string).forEach((w) => {
        if (mine.has(w)) score += 1 / (docFreq.get(w) ?? 1);
      });
      return { post: p, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return (
        new Date(b.post.publishedAt ?? 0).getTime() -
        new Date(a.post.publishedAt ?? 0).getTime()
      );
    })
    .slice(0, 3);

  if (ranked.length === 0) return null;

  return (
    <section className="mt-14 border-t border-gray-100 pt-10">
      <h2 className="mb-6 font-montserrat text-xl font-semibold text-primary">
        Related reading
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {ranked.map(({ post }) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug}`}
            className="group block overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(38,78,38,0.14)]"
          >
            <div className="relative h-28 w-full overflow-hidden">
              <Image
                src={
                  post.mainImage?.asset?._ref
                    ? urlFor(post.mainImage.asset._ref).width(480).height(270).url()
                    : categoryCover(post.categories)
                }
                alt={post.title ?? "Related article"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              {post.publishedAt && (
                <p className="mb-1.5 text-[11px] font-semibold text-popover">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              )}
              <h3 className="font-montserrat text-sm font-semibold leading-snug text-primary line-clamp-3">
                {post.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
