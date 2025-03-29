"use client";

import { useState, createRef } from "react";
import { useRouter } from "next/navigation"; // Use navigation for client-side routing

const Search = () => {
    const inputRef = createRef();
    const router = useRouter(); // Initialize useRouter

    const handleClick = async (e) => {
        e.preventDefault();
        const query = inputRef.current?.value;
        if (query) {
            router.push(`/search/${encodeURIComponent(query)}`); // Navigate to results page
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
