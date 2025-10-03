// src/app/api/hello/route.js

import mongoose from "mongoose"
// Load from environment variables (recommended)
const MONGO_URI = process.env.MONGO_URI;




const userSchema = new mongoose.Schema({
  title: String,
  img_url: String,
  video_url: String,
  tags: Array,
  description: String,
  category: Array,
  duration: String,
});

// Create a model (maps to a MongoDB collection)
const User = mongoose.models.xxxvideos || mongoose.model("xxxvideos", userSchema, "xxxvideos");


let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  isConnected = true;
  console.log("✅ MongoDB connected");
}




export async function fetchVideos() {
  try {
    await connectDB();
    const users = await User.find({});
    console.log("Fetched users:", users);
    return users;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};


export async function fetchVideo(id) {
  try {
    await connectDB();
    const users = await User.findOne({_id:id});
    console.log("Fetched users:", users);
    return users;
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
  await connectDB();

  // Search title or description (case-insensitive)
  const video = await User.findOne({
    $or: [
      { title: { $regex: query, $options: "i" } },
      { description: { $regex: query, $options: "i" } },
    ],
  });

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
