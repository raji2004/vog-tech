import type { MetadataRoute } from "next";

const SITE = "https://www.vog.global";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Studio and auth screens have nothing to offer search engines.
        disallow: ["/admin", "/admin/", "/login", "/forgotpassword"],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
