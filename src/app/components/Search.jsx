"use client"; // Ensures it's a client component in Next.js 13+

import { useState, createRef } from "react";

const Search = () => {
    const inputRef = createRef();
    let uri = "";
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            if (inputRef.current.value) {
                uri = `/api/proxy?query=${encodeURIComponent(inputRef.current.value)}`;
                console.log(uri)
                const response = await fetch(uri, { cache: "no-store" });
                const videos = await response.json();
                console.log(videos);
            }
        } catch (error) {
            console.error("Error fetching videos:", error);
        }
    };


    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center">
                <div className="flex bg-white border-2 border-pink-500 shadow-lg rounded-lg overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="outline-none text-gray-700"
                        ref={inputRef}
                    />
                    <button onClick={handleClick} className="bg-pink-500 text-white font-semibold hover:bg-pink-600 transition">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Search;
