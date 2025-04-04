export async function GET(req) {
  const baseUrl = "https://www.stream.xxxvideoss.site";

  let videos = [];
  try {
    const res = await fetch(`${baseUrl}/api/stream/videos`);
    videos = await res.json();
  } catch (error) {
    return new Response("Failed to fetch videos", { status: 500 });
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}/</loc>
    </url>
    ${videos.map(video => `
      <url>
        <loc>${baseUrl}/watch/${encodeURIComponent(video.title)}</loc>
      </url>
    `).join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
