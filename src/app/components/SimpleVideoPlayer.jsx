import { useState, useEffect, useRef } from "react";
import {
  AiOutlineLoading3Quarters,
  AiOutlineSound,
} from "react-icons/ai";
import { CiPlay1, CiPause1, CiSettings } from "react-icons/ci";
import { FaVolumeMute } from "react-icons/fa";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { Video_Uri } from "../layout";

const VideoPlayer = ({ publicId,poster }) => {
  const altImage = "/dance.gif";
  const uri = "https://www.stream.xxxvideoss.site";

  let image2 = poster === "false" || poster === false ? altImage : `${uri}/files/${poster.split("/").pop()}`;

  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const controlsRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [buffering, setBuffering] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        handleTogglePlay();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      setProgress(video.currentTime / video.duration);
    };

    const handleBuffering = () => setBuffering(video.readyState < 3);
    const handlePlaying = () => setBuffering(false);

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("waiting", handleBuffering);
    video.addEventListener("playing", handlePlaying);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("waiting", handleBuffering);
      video.removeEventListener("playing", handlePlaying);
    };
  }, []);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleFullScreen = () => {
    if (!playerRef.current) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullScreen(false);
    } else {
      playerRef.current.requestFullscreen();
      setIsFullScreen(true);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = Math.max(0, Math.min(1, parseFloat(e.target.value)));
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      videoRef.current.muted = newVolume === 0;
      setIsMuted(newVolume === 0);
    }
  };

  const handleProgressChange = (e) => {
    if (!videoRef.current) return;
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    videoRef.current.currentTime = videoRef.current.duration * newProgress;
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuteState = !isMuted;
    videoRef.current.muted = newMuteState;
    setIsMuted(newMuteState);
    setVolume(newMuteState ? 0 : videoRef.current.volume);
  };

  return (
    <div ref={playerRef} className="video-player w-full relative bg-black">
      <video ref={videoRef} className="w-full" src={publicId} poster={image2}/>

      <div className="h-25 w-full p-2 bg-opacity-50 bg-gray-900 flex flex-col">
        {/* Progress Bar */}
        <div className="progress flex items-center w-full">
          <span className="text-white text-sm mr-2">
            {buffering && <AiOutlineLoading3Quarters className="animate-spin inline-block mr-1" />}
            {Math.floor(progress * (videoRef.current?.duration || 0) / 60) || 0}:
            {Math.floor(progress * (videoRef.current?.duration || 0) % 60) || 0}
          </span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={progress}
            onChange={handleProgressChange}
            className="w-full h-1 bg-gray-400 cursor-pointer"
          />
        </div>




        {/* Control Buttons */}
        <div
          ref={controlsRef}
          className="controls flex items-center justify-between mt-2"
        >
          {/* Left Controls */}
          <div className="flex items-center">
            <button
              onClick={handleTogglePlay}
              className="p-2 "
            >
              {isPlaying ? <CiPause1 size={20} /> : <CiPlay1 size={20} />}
            </button>

            <button
              onClick={toggleMute}
              className="p-2 "
            >
              {isMuted ? <FaVolumeMute size={20} /> : <AiOutlineSound size={20} />}
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-16 h-1 cursor-pointer"
            />
          </div>

          {/* Right Controls */}
          <div className="flex items-center">
            <button
              onClick={handleFullScreen}
              className="p-2 "
            >
              {isFullScreen ? <BsFullscreenExit size={20} /> : <BsFullscreen size={20} />}
            </button>

            <button className="p-2 ">
              <CiSettings size={20} />
            </button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default VideoPlayer;
