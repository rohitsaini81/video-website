"use client"; // Ensure this is at the top

import dynamic from "next/dynamic";

// Dynamically import VideoPlayer with SSR disabled
const VideoPlayer = dynamic(() => import("react-video-js-player"), { ssr: false });

export default function WatchPage() {

  return (
    <div>
      <VideoPlayer
        src="https://pub-a919e0e7442047299d7072ac1b2ab5d0.r2.dev/temp_video.mp4"
        controls
        width="720"
        height="400"
      />
    </div>
  );
}
