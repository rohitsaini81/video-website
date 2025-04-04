export const dynamic = 'force-dynamic'; // optional: to always revalidate
export const revalidate = 0; // don't cache

export async function generateSitemap() {
  const baseUrl = "https://video-website-git-fork-rohitsaini82-main-rohitsaini81s-projects.vercel.app";
  let videos = [];

  try {
    const res = await fetch(`${baseUrl}/api/stream/videos`, { cache: "no-store" });
    videos = await res.json();
  } catch (err) {
    console.error("Failed to fetch videos for sitemap", err);
  }

  const staticRoutes = [
    "",
    "about",
    "category",
    "download",
    "search",
    "video",
  ];

  const staticXml = staticRoutes
    .map(route => `
    <url>
      <loc>${baseUrl}/${route}</loc>
    </url>`)
    .join("");

  const dynamicXml = videos
    .filter(video => video.title)
    .map(video => `
    <url>
      <loc>${baseUrl}/watch/${encodeURIComponent(video.title)}</loc>
    </url>`)
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticXml}
    ${dynamicXml}
  </urlset>`;
}

export default async function Sitemap() {
  const sitemap = await generateSitemap();

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
