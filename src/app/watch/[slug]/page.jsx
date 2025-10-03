// src/app/watch/[slug]/page.jsx
import Head from "next/head";
import Link from "next/link";
import VideoPlayer from "@/app/components/SimpleVideoPlayer";
import { Video_Uri } from "@/app/layout";
import { fetchVideoByQuery } from "@/app/api/video/fetchVideos.js"; // server-side fetch

// This is a Server Component by default
export default async function WatchPage({ params }) {
  const slug = params?.slug || "";
  const query = decodeURIComponent(slug);

  let videos = [];

  try {
    // Fetch video data directly from MongoDB
    const video = await fetchVideoByQuery(query);
    if (video) videos = [video]; // keep consistent with previous array structure
  } catch (err) {
    console.error("Error fetching videos:", err);
  }

  const videoSource = videos[0] ? Video_Uri + (videos[0].video_url || "") : "";

  const videoSchema = videos[0]
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: videos[0].title || "Unknown Video",
        description: videos[0].description || "No description available",
        thumbnailUrl: videos[0].image || "",
        uploadDate: videos[0].uploadDate || "",
        contentUrl: `${process.env.NEXT_PUBLIC_BASE_URL || ""}/watch/${slug}`,
        embedUrl: videos[0].embedUrl || "",
      }
    : null;

  if (videos.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400">
        <p>Video not found</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{videos[0].title || "Watch Video"}</title>
        <meta
          name="description"
          content={videos[0].description || "Enjoy watching videos"}
        />
        {videoSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
          />
        )}
      </Head>

      <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
        <div className="bg-gray-800 border border-pink-500 shadow-lg rounded-lg p-4 mb-4 text-center">
          <p className="text-pink-400 font-bold">Watch HD:</p>
          <span className="text-gray-300">{query}</span>
        </div>

        <div className="w-full max-w-3xl flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md">
          <div className="flex flex-col w-full">
            <VideoPlayer
              publicId={videoSource}
              poster={videos[0].image || ""}
            />
            <div className="mt-4 p-4 bg-gray-700 rounded-lg">
              <p className="text-lg font-bold">{videos[0].title || "Untitled"}</p>
              <p className="text-gray-400">Duration: {videos[0].duration || "Unknown"}</p>
            </div>

            <div className="mt-4">
              <span className="font-semibold">Tags: </span>
              {videos[0]?.tagsList?.length > 0
                ? videos[0].tagsList.map((tag, i) => (
                    <span key={i} className="text-green-400">
                      {tag}
                      {i !== videos[0].tagsList.length - 1 && ", "}
                    </span>
                  ))
                : <span className="text-gray-500">No tags</span>}
            </div>

            <div className="mt-6">
              <Link
                href={`/download/${videos[0].id || ""}`}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Download Full Video HD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
