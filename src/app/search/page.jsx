"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const Search = () => {
    const { query } = useParams(); // Get search query from the URL
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        const fetchVideos = async () => {
            if (!query) return;
            try {
                const uri = `/api/proxy?query=${encodeURIComponent(query)}`;
                console.log("Fetching from:", uri);
                const response = await fetch(uri, { cache: "no-store" });
                const data = await response.json();
                setVideos(data);
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };

        fetchVideos();
    }, [query]); // Re-fetch when the query changes

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
                {videos.length > 0 ? (
                    <ul>
                        {videos.map((video, index) => (
                            <li key={index} className="mt-2 p-2 border-b">{video.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No results found.</p>
                )}
            </div>
        </div>
    );
};

export default Search;