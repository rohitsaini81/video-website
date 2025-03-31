import { useState, useEffect, useRef } from "react";
import { AiOutlineLoading3Quarters, AiOutlineSound } from "react-icons/ai";
import { CiPlay1 } from "react-icons/ci";
import { FaVolumeMute } from "react-icons/fa";
import { CiPause1 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { BsFullscreen } from "react-icons/bs";
import { BsFullscreenExit } from "react-icons/bs";

const VideoPlayer = ({ publicId }) => {
  const video_ref = useRef(null);
  const video_player_ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [buffering, setBuffering] = useState(false);



  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === "Space") {
        e.preventDefault(); // Prevent scrolling 
        handleTogglePlay();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Search triggered:", e.target.value);
    }
  }

  const handleTogglePlay = () => {
    if (video_ref.current) {
      if (video_ref.current.paused) {
        video_ref.current.play();
        setIsPlaying(true);
      } else {
        video_ref.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const HandleControl = useRef(null);
  const HandleFullScreen = () => {
    if (document.fullscreenElement) {
      HandleControl.current.classList.remove("controls-full-screen");
      document.exitFullscreen();
      setIsFullScreen(false);
    } else {
      video_player_ref.current.requestFullscreen();
      HandleControl.current.classList.add("controls-full-screen");
      setIsFullScreen(true);
    }
  };

  const handleVolumeChange = (e) => {
    let volume_value = parseFloat(e.target.value); // Ensure it's a number
    volume_value = Math.min(1, Math.max(0, volume_value)); // Clamp between 0 and 1

    setVolume(volume_value);

    if (video_ref.current) {
      if (volume_value === 0) {
        setIsMuted(true);
        video_ref.current.muted = true;
      } else {
        setIsMuted(false);
        video_ref.current.muted = false;
      }
      video_ref.current.volume = volume_value;
    }
  };

  const handleProgressChange = (e) => {
    const progress = parseFloat(e.target.value); // Ensure it's a float
    setProgress(progress);
    if (video_ref.current && video_ref.current.duration) {
      video_ref.current.currentTime = video_ref.current.duration * progress;
    }
  };
  const toggleMute = () => {
    if (video_ref.current) {
      video_ref.current.muted = !isMuted; // Mute/unmute the video
      setIsMuted(!isMuted); // Update state
    }
  };

  return (
    <div ref={video_player_ref} className="video-player">
      <video ref={video_ref}>
        <source src={publicId} />
      </video>
      <div
        ref={HandleControl}
        className="controls bg-amber-200 h-10 flex items-center justify-between p-2"
      >
        <button
          onClick={handleTogglePlay}
          className="m-1 p-2 bg-gray-700 hover:bg-gray-600 rounded play-button"
        >
          {isPlaying ? <CiPause1 /> : <CiPlay1 />}
        </button>
        <button
          onClick={HandleFullScreen}
          className="m-1 p-2 bg-gray-700 hover:bg-gray-600 rounded fullscreen-button"
        >
          {isFullScreen ? <BsFullscreenExit /> : <BsFullscreen />}
        </button>

        <button
          className="m-1 p-2 bg-gray-700 hover:bg-gray-600 rounded"
          htmlFor="volume"
        >
          {!isMuted?<AiOutlineSound onClick={toggleMute}/>:<FaVolumeMute onClick={toggleMute}/>}
        </button>
        <input
          name="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="m-1 w-15 h-1 bg-gray-500 cursor-pointer"
        />

        <span className="text-gray-700 flex items-center">
          {buffering ? "Buffering..." : ""}
          {Math.floor(progress * 60)}
          {video_ref.current && video_ref.current.duration
            ? `/${Math.floor(video_ref.current.duration.toFixed(2)/60)} min `
            : ""}

            <AiOutlineLoading3Quarters className="m-2" />
        </span>
        <input
          name="progress"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={progress}
          onChange={handleProgressChange}
          onWaiting={() => setBuffering(true)} // Fires when buffering starts
          onPlaying={() => setBuffering(false)}
          className="m-1 w-1/2 h-1 bg-gray-500 cursor-pointer"
        />
        <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded quality-button">
          <CiSettings />
        </button>
      </div>
    </div>
  );
};
export default VideoPlayer;
