import { Video_Uri } from "@/app/layout";
export default async function Download({ params }) {
  const uri = "https://www.stream.xxxvideoss.site";

  if (!params || !params.id) return <div className="text-center text-red-500">Loading...</div>;

  let video = "";
  let video_data = null;

  try {
    const res = await fetch(`${uri}/api/stream/video?id=${params.id}`, {
      cache: "no-store",
    });
    video_data = await res.json();

    if (!video_data || video_data.error) {
      return <div className="text-center text-red-500">Error loading video</div>;
    }

    video = Video_Uri + video_data.video;
  } catch (error) {
    console.error("Error fetching video:", error);
    return <div className="text-center text-red-500">Error fetching video</div>;
  }

  return (
    <main className="flex flex-col items-center p-6 min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-3xl bg-gray-800 p-4 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold text-center mb-4">{video_data.title}</h1>
        <video controls className="w-full rounded-lg shadow-md">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="mt-4">
          <p className="text-gray-400">Duration: {video_data.duration}</p>
          <div className="mt-2">
            <span className="font-semibold">Tags: </span>
            {video_data.tagsList.map((tag, index) => (
              <span key={index} className="text-green-400">
                {tag}
                {index !== video_data.tagsList.length - 1 && ", "}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href={video}
            download
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Download HD
          </a>
        </div>
      </div>
    </main>
  );
}
