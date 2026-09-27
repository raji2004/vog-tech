// Helpers for building page metadata and JSON-LD from Sanity content.

export const SITE_URL = "https://www.vog.global";
export const ORG_NAME = "VOG Global";
export const DEFAULT_OG_IMAGE = "/img/home/team-hero.jpg";

/** Trim to a length search engines will actually display, without cutting mid-word. */
export function metaDescription(
  primary: string | null | undefined,
  fallback: string | null | undefined,
  max = 155
): string {
  const raw = (primary || fallback || "").replace(/\s+/g, " ").trim();
  if (!raw) return "";
  if (raw.length <= max) return raw;
  const cut = raw.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 60 ? cut.slice(0, lastSpace) : cut).replace(/[,;:.\s]+$/, "")}...`;
}

type Block = {
  _type?: string;
  style?: string;
  children?: { text?: string; marks?: string[] }[];
};

export type FaqEntry = { question: string; answer: string };

/**
 * Pull Q&A pairs out of a post body.
 *
 * The posts follow a consistent shape: an "FAQ" heading, then one paragraph per
 * question where the question is a bold span and the answer is the plain text
 * that follows. Anything that does not match that shape is skipped, so a post
 * without an FAQ section simply yields nothing.
 */
export function extractFaq(body: unknown): FaqEntry[] {
  if (!Array.isArray(body)) return [];
  const blocks = body as Block[];

  const start = blocks.findIndex(
    (b) =>
      b?.style === "h2" &&
      (b.children?.map((c) => c.text ?? "").join("").trim().toLowerCase() ?? "") === "faq"
  );
  if (start === -1) return [];

  const entries: FaqEntry[] = [];
  for (const block of blocks.slice(start + 1)) {
    if (block?.style && /^h[1-4]$/.test(block.style)) break; // next section
    if (block?._type !== "block" || !block.children?.length) continue;

    const [first, ...rest] = block.children;
    if (!first?.marks?.includes("strong")) continue;

    const question = (first.text ?? "").trim().replace(/[:\s]+$/, "");
    const answer = rest.map((c) => c.text ?? "").join("").trim();
    if (question && answer) entries.push({ question, answer });
  }
  return entries;
}

export function faqJsonLd(entries: FaqEntry[]) {
  if (!entries.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((e) => ({
      "@type": "Question",
      name: e.question,
      acceptedAnswer: { "@type": "Answer", text: e.answer },
    })),
  };
}

export function articleJsonLd(opts: {
  title: string;
  description: string;
  slug: string;
  publishedAt?: string | null;
  updatedAt?: string | null;
  authorName?: string | null;
  imageUrl: string;
  categories?: string[];
}) {
  const url = `${SITE_URL}/blog/${opts.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title.slice(0, 110),
    description: opts.description,
    image: [opts.imageUrl],
    datePublished: opts.publishedAt ?? undefined,
    dateModified: opts.updatedAt ?? opts.publishedAt ?? undefined,
    author: { "@type": "Person", name: opts.authorName || ORG_NAME },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon/logo.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    ...(opts.categories?.length ? { articleSection: opts.categories } : {}),
  };
}

export function breadcrumbJsonLd(title: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: title, item: `${SITE_URL}/blog/${slug}` },
    ],
  };
}
