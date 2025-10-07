// src/app/api/hello/route.js

// Create a model (maps to a MongoDB collection)

import { createClient } from '@supabase/supabase-js';
import dotenv from "dotenv";
dotenv.config();

// Load from environment variables (recommended)
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

let isConnected = false;




export async function fetchVideos() {
  try {
    
    const { data, error } = await supabase.from("videos").select("*");
    console.log("Fetched users:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};


export async function findVideos(query) {
  try {

     const { data: videos, error } = await supabase
  .from("videos")
  .select("*")
  .or(`title.ilike.%${query}%,description.ilike.%${query}%`);

    return videos;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};





/**
 * Fetch a single video by title or description (case-insensitive)
 * @param {string} query - search string
 * @returns {Promise<Object|null>} video document
 */


export async function fetchVideoByQuery(query) {

  // Search title or description (case-insensitive)
  const video = await supabase.from("videos").select("*").eq("title", query);
  return video; // returns a single document or null
}



// export async function GET() {
//   // const ok = await fetchd();
//   const ok = await fetchm();
//   return Response.json(ok)
// }

// export async function POST(req) {
//   const data = await req.json()
//   return Response.json({ received: data })
// }
