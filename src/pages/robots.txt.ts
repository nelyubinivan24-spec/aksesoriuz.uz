import type { APIRoute } from "astro";

const sitemapUrl = "https://aksesoriuz.uz/sitemap-index.xml";

export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
