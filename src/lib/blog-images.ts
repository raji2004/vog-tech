// Cover art for blog posts that have no mainImage of their own.
// One image per category, so the blog reads as a set rather than a wall of
// identical placeholders.

export const DEFAULT_COVER = "/img/blog/default.jpg";

const COVERS: Record<string, string> = {
  "world tax watch": "/img/blog/world-tax-watch.jpg",
  taxation: "/img/blog/taxation.jpg",
  policy: "/img/blog/policy.jpg",
  "public finance": "/img/blog/public-finance.jpg",
  "global economy": "/img/blog/global-economy.jpg",
  leadership: "/img/blog/leadership.jpg",
};

/**
 * Most posts carry several categories, and "World Tax Watch" sits on nearly all
 * of them. Picking the first would give almost every post the same cover, so
 * the narrower category wins and the catch-all is the last resort.
 */
const PRIORITY = [
  "leadership",
  "public finance",
  "global economy",
  "policy",
  "taxation",
  "world tax watch",
];

type Cat = { title?: string | null } | null | undefined;

export function categoryCover(categories?: Cat[] | null): string {
  if (!Array.isArray(categories) || categories.length === 0) return DEFAULT_COVER;

  const present = categories
    .map((c) => c?.title?.trim().toLowerCase())
    .filter((t): t is string => Boolean(t));

  for (const key of PRIORITY) {
    if (present.includes(key) && COVERS[key]) return COVERS[key];
  }
  // A category we have no art for yet.
  return DEFAULT_COVER;
}
