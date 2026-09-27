import type { MetadataRoute } from "next";
import { SITEMAP_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/client";

export const revalidate = 3600;

const SITE = "https://www.vog.global";

type SitemapPost = { slug: string; updated: string | null };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/blog`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE}/contact`, changeFrequency: "monthly", priority: 0.7 },
  ];

  // A Sanity outage should degrade the sitemap, not break the build.
  let posts: SitemapPost[] = [];
  try {
    posts = (await sanityFetch<SitemapPost[]>({ query: SITEMAP_QUERY })) ?? [];
  } catch {
    posts = [];
  }

  const postRoutes: MetadataRoute.Sitemap = posts
    .filter((p) => p?.slug)
    .map((p) => ({
      url: `${SITE}/blog/${p.slug}`,
      lastModified: p.updated ? new Date(p.updated) : undefined,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticRoutes, ...postRoutes];
}
