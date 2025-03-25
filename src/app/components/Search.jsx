import React from 'react';

const Search = () => {
    return (
        <div className="flex items-center">
            <div className="flex bg-white border-2 border-pink-500 shadow-lg rounded-lg overflow-hidden">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="outline-none text-gray-700"
                />
                <button className="bg-pink-500 text-white font-semibold hover:bg-pink-600 transition">
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;
