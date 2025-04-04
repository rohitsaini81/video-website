import Card from "./components/Card.jsx";
import Head from "next/head";

export default async function HomePage() {
  let videos = [];
  const uri = "https://www.stream.xxxvideoss.site/api/stream/videos";

  try {
    const response = await fetch(uri, { cache: "no-store" });
    videos = await response.json();

    // Filter videos with valid images
    videos = videos.filter(
      (video) => video.image !== "false" && video.image !== false
    );

    console.log("Videos size:", videos.length);
    videos = videos.slice(0, 50);
  } catch (error) {
    console.error("Error fetching videos:", error);
  }

  // Construct structured data
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: videos.map((video, index) => ({
      "@type": "VideoObject",
      position: index + 1,
      name: video.title,
      description: video.title,
      thumbnailUrl: video.image,
      contentUrl: `/watch/${video.title}`, // No `window` here
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />
      </Head>
      <hr />
      <h1 className="bg-pink-700">
        Sweets Sex Videos Download XXX Mp4 Porn - Porn Videos
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
        {videos.map((data, index) => (
          <Card
            key={index}
            id={data.id}
            image={data.image}
            title={data.title}
            duration={data.duration}
          />
        ))}
      </div>

      <br />
      <br />
      <br />
      <hr />
      <h1 className="text-red-700">Please Search For more Videos</h1>
      <h1 className="bg-pink-700">1, 2, 3, 4, 5, 6, 7, 8 &gt;&gt; Next</h1>
    </>
  );
}
