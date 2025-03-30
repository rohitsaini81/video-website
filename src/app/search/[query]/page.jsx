"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Card from "../../components/Card.jsx"; // Adjust import path if needed

const Search =  () => {
    const { query } = useParams() || {}; // Ensure it doesn't crash
    const new_query = query ? decodeURIComponent(query) : ""; // Handle undefined
    console.log("Query:", query, "Decoded:", new_query);
    const [videos, setVideos] = useState([]);    

    useEffect(() => {
        const fetchVideos = async () => {
            if (!query) return;
            try {
                const uri = `/api/proxy?query=${encodeURIComponent(new_query)}`;
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
                    <span className="ml-2 text-gray-700">{new_query}</span>
                </div>
            </div>
            <br />
            <hr />
            <div>
                {videos.length > 0 ? (
                    <ul>
                              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

                        {videos.map((data, index) => (
                            // <li key={index} className="mt-2 p-2 border-b">{video.title}</li>
                            <Card 
                            key={index}
                            id={data.id}
                            image={data.image}
                            title={data.title}
                            duration={data.duration}
                            />
                        ))}
                        </div>
                    </ul>
                ) : (
                    <p className="text-gray-500">No results found.</p>
                )}
            </div>
        </div>
    );
};

export default Search;