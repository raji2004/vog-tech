'use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, ChevronRight, Newspaper } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import { categoryCover } from "@/lib/blog-images";

export type BlogListItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  publishedAt: string;
  readTime: string;
  authorName: string;
  authorImageRef?: string;
  imageRef?: string;
  slug: string;
  categories: { title: string; slug: string }[];
};

export function BlogList({ items }: { items: BlogListItem[] }) {
  // Build the unique category set from the posts (falls back to none)
  const categories = useMemo(() => {
    const map = new Map<string, string>();
    items.forEach((it) =>
      it.categories.forEach((c) => {
        if (c?.slug && c?.title) map.set(c.slug, c.title);
      })
    );
    return Array.from(map, ([slug, title]) => ({ slug, title }));
  }, [items]);

  const [active, setActive] = useState<string>("all");
  const [month, setMonth] = useState<string>("all");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");

  // Unique months (e.g. "2026-07") present in the posts, newest first
  const months = useMemo(() => {
    const map = new Map<string, string>();
    items.forEach((it) => {
      const d = new Date(it.publishedAt);
      if (isNaN(d.getTime())) return;
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      const label = d.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
      map.set(key, label);
    });
    return Array.from(map, ([key, label]) => ({ key, label })).sort((a, b) =>
      b.key.localeCompare(a.key)
    );
  }, [items]);

  const filtered = items
    .filter(
      (it) =>
        active === "all" || it.categories.some((c) => c.slug === active)
    )
    .filter((it) => {
      if (month === "all") return true;
      const d = new Date(it.publishedAt);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      return key === month;
    })
    .sort((a, b) => {
      const diff =
        new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
      return sort === "newest" ? -diff : diff;
    });

  return (
    <div>
      {/* Filter bar */}
      {categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2.5 border-b border-primary/10 pb-8">
          <FilterChip
            label="All"
            active={active === "all"}
            onClick={() => setActive("all")}
          />
          {categories.map((c) => (
            <FilterChip
              key={c.slug}
              label={c.title}
              active={active === c.slug}
              onClick={() => setActive(c.slug)}
            />
          ))}
        </div>
      )}

      {/* Date controls */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 outline-none transition-colors hover:border-popover focus:border-primary"
          aria-label="Filter by month"
        >
          <option value="all">All dates</option>
          {months.map((m) => (
            <option key={m.key} value={m.key}>
              {m.label}
            </option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as "newest" | "oldest")}
          className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 outline-none transition-colors hover:border-popover focus:border-primary"
          aria-label="Sort by date"
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>

      {/* Count */}
      <p className="mt-6 mb-6 text-center text-sm text-gray-500">
        Showing <span className="font-semibold text-primary">{filtered.length}</span>{" "}
        {filtered.length === 1 ? "article" : "articles"}
        {active !== "all" &&
          ` in ${categories.find((c) => c.slug === active)?.title ?? ""}`}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <BlogCardNew key={item.id} item={item} index={i} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
        active
          ? "border-primary bg-primary text-white"
          : "border-gray-200 bg-white text-gray-700 hover:border-popover hover:text-primary"
      }`}
    >
      {label}
    </button>
  );
}

function BlogCardNew({ item, index }: { item: BlogListItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3) }}
    >
      <Link href={`/blog/${item.slug}`} className="group block h-full">
        <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_1px_2px_rgba(38,78,38,0.05),0_12px_28px_rgba(38,78,38,0.07)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_16px_36px_rgba(38,78,38,0.16)]">
          {/* Image */}
          <div className="relative h-48 w-full overflow-hidden">
            {item.imageRef ? (
              <Image
                src={urlFor(item.imageRef).width(700).height(420).url()}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <Image
                src={categoryCover(item.categories)}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
            {item.categories[0]?.title && (
              <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary">
                {item.categories[0].title}
              </span>
            )}
          </div>

          {/* Body */}
          <div className="flex flex-1 flex-col p-5">
            <p className="mb-2 text-xs font-semibold text-popover">{item.date}</p>
            <h3 className="mb-2.5 font-montserrat text-lg font-semibold leading-snug text-primary line-clamp-3">
              {item.title}
            </h3>
            <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-500 line-clamp-3">
              {item.excerpt}
            </p>

            <div className="flex items-center justify-between border-t border-gray-100 pt-4">
              <div className="flex items-center gap-2.5">
                {item.authorImageRef ? (
                  <Image
                    src={urlFor(item.authorImageRef).width(60).height(60).url()}
                    alt={item.authorName}
                    width={30}
                    height={30}
                    className="h-7 w-7 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-white">
                    {initials(item.authorName)}
                  </span>
                )}
                <span className="text-xs text-gray-600">{item.authorName}</span>
              </div>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Clock size={13} /> {item.readTime}
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

function EmptyState() {
  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-3xl flex-col items-center rounded-3xl border border-primary/20 bg-gradient-to-b from-popover/10 to-transparent px-6 py-14 text-center">
        <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-background/80">
          <Newspaper className="h-6 w-6 text-primary" />
        </span>
        <h2 className="mb-3 font-montserrat text-2xl font-semibold text-primary">
          Nothing here yet
        </h2>
        <p className="max-w-xl leading-relaxed text-gray-500">
          No articles in this category yet. Try another filter, or check back soon
          for fresh insights from our team.
        </p>
      </div>
    </div>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
