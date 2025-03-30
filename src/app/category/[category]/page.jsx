"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function CategoryPage() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams() || {}; // Ensure it doesn't crash
    const new_query = category ? decodeURIComponent(category) : ""; // Handle undefined
    console.log("Query:", category, "Decoded:", new_query);

    useEffect(() => {
        const fetchVideos = async () => {
            if (!category) return;
            try {
                const uri = `/api/category/?tag=${encodeURIComponent(new_query)}`;
                console.log("Fetching from:", uri);
                const response = await fetch(uri, { cache: "no-store" });
                const data = await response.json();
                setVideos(data);
                setLoading(false);
                console.log("Fetched videos:", data);
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };

        fetchVideos();
    }, [category]); // Re-fetch when the query changes

    if (!category) return <div>Loading category...</div>;  // ✅ Handle case where params are not ready

    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold">Category: {category}</h1>
            
            {loading ? (
                <p>Loading videos...</p>
            ) : videos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {videos.map((video) => (
                        <div key={video.id} className="p-4 border rounded">
                            <h2 className="text-lg font-semibold">{video.title}</h2>
                            <img src={video.image} alt={video.title} className="w-full h-48 object-cover" />
                            <p>Duration: {video.duration}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No videos found for this category.</p>
            )}
        </main>
    );
}
