import Card from "../../components/Card.jsx"; // Adjust import path if needed
import {findVideos} from "@/app/api/video/fetchVideos.js";


const Search =  async ({ params }) => {


  const query = decodeURIComponent(params?.query || "").trim();



let videos = [];
  let error = null;

  try {
    videos = await findVideos(query);
    if (!videos || videos.length === 0) {
      error = "No videos found.";
    }
  } catch (err) {
    console.error("Error fetching videos:", err);
    error = "Failed to fetch videos.";
  }

        return (
        <div className="flex flex-col items-center">
            <div className="flex items-center">
                <div className="flex bg-white border-2 border-pink-500 shadow-lg rounded-lg overflow-hidden p-2">
                    <p className="text-red-500 font-bold">Search:</p>
                    <span className="ml-2 text-gray-700">{query}</span>
                </div>
            </div>
            <br />
            <hr />
            <div>
                {true > 0 ? (
                    <ul>
                              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

                        {videos.map((data, index) => (
                            // <li key={index} className="mt-2 p-2 border-b">{video.title}</li>
                            <Card 
                            key={index}
                            id={data.id}
                            image={data.img_url}
                            title={data.title}
                            duration={data.duration}
                            />
                        ))}
                        </div>
                    </ul>
                ) : (
                    <p className="text-gray-500">Loading...</p>
                )}

                {error?<p className="text-red-500">{error}</p>: null}
            </div>
        </div>
    );
};

export default Search;
