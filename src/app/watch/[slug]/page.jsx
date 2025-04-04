"use client";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { Video_Uri } from "@/app/layout";
import VideoPlayer from "@/app/components/SimpleVideoPlayer";

const Watch = () => {
  const { slug } = useParams() || {};
  const new_query = slug ? decodeURIComponent(slug) : "";
  const [videos, setVideos] = useState([]);
  const [video_source, setVideo_source] = useState("");
  const HandlePLayer = useRef(null);
  const temp_video =
    "https://pub-a919e0e7442047299d7072ac1b2ab5d0.r2.dev/video.mp4";

  const [video_schema, setVideoSchema] = useState({});
  useEffect(() => {
    const fetchVideos = async () => {
      if (!slug) return;
      try {
        if (window.innerWidth < 600 && HandlePLayer.current) {
          HandlePLayer.current.classList.add("flex-col");
          HandlePLayer.current.classList.remove("flex-row");
        }

        const uri = `/api/proxy?query=${encodeURIComponent(new_query)}`;
        const response = await fetch(uri, { cache: "no-store" });
        const data = await response.json();
        setVideos(data);
        setVideo_source(Video_Uri + data[0].video);
        setVideoSchema({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: data[0].title,
          description: data[0].description,
          thumbnailUrl: data[0].image,
          // "uploadDate": video.uploadDate,
          // "contentUrl":  "",
          // "embedUrl": video.embedUrl || video.contentUrl
        });
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, [slug]);

  return (
    <>
      {videos.length > 0 ? (
        <Head>
          <title>{videos[0].title}</title>
          <meta name="description" content={videos[0].title} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(video_schema) }}
          />{" "}
        </Head>
      ) : (
        <div></div>
      )}

      <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
        <div className="bg-gray-800 border border-pink-500 shadow-lg rounded-lg p-4 mb-4 text-center">
          <p className="text-pink-400 font-bold">Watch HD:</p>
          <span className="text-gray-300">{new_query}</span>
        </div>

        <div className="w-full max-w-3xl flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md">
          {videos.length > 0 ? (
            <div ref={HandlePLayer} className="flex flex-col w-full">
              <VideoPlayer publicId={video_source} poster={videos[0].image} />
              <div className="mt-4 p-4 bg-gray-700 rounded-lg">
                <p className="text-lg font-bold">{videos[0].title}</p>
                <p className="text-gray-400">Duration: {videos[0].duration}</p>
              </div>

              <div className="mt-4">
                <div className="mt-2">
                  <span className="font-semibold">Tags: </span>
                  {videos[0].tagsList.map((tag, index) => (
                    <span key={index} className="text-green-400">
                      {tag}
                      {index !== videos[0].tagsList.length - 1 && ", "}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href={`/download/${videos[0].id}`}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Download Full Video HD
                </Link>
              </div>
            </div>
          ) : (
            <p className="text-gray-400">Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Watch;
