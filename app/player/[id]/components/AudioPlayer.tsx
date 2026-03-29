"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";

interface BottomPlayerProps {
  src: string;
  title: string;
  author: string;
  poster: string;
  movieId: string;
}

const BottomPlayer = ({
  src,
  title,
  author,
  poster,
  movieId,
}: BottomPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      try {
        await audioRef.current.play();
      } catch (err) {
        console.error("Playback failed. Check if the URL is correct:", src);
      }
    }
    setIsPlaying(!isPlaying);
  };

  const skip = (amount: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += amount;
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = Number(e.target.value);
    setCurrentTime(targetTime);
    if (audioRef.current) {
      audioRef.current.currentTime = targetTime;
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current?.currentTime || 0);
  };

  const onLoadedMetadata = () => {
    setDuration(audioRef.current?.duration || 0);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.readyState >= 1) {
      setDuration(audio.duration);
    }
  }, [movieId]);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="fixed bottom-0 gap-4 left-0 right-0 max-h-100 bg-[#0f0f0f] border-t border-white/10 p-4 md:px-8 flex flex-col sm:flex-row items-center justify-center z-50">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="flex w-50 items-center justify-center gap-4">
        <img
          src={poster}
          alt={title}
          className="w-12 h-12 rounded object-cover"
        />
        <div className=" truncate">
          <h4 className="text-white text-sm font-bold truncate">{title}</h4>
          <p className="text-gray-400 text-xs">{author}</p>
        </div>
      </div>

      <div className="flex flex-col items-center w-full justify-center gap-2 flex-1 max-w-150 px-4">
        <div className="flex items-center gap-8 text-white">
          <button
            onClick={() => skip(-10)}
            className="hover:text-blue-400 transition cursor-pointer"
          >
            <FaStepBackward size={18} />
          </button>

          <button
            onClick={togglePlay}
            className="w-11 h-11 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition"
          >
            {isPlaying ? (
              <FaPause size={18} />
            ) : (
              <FaPlay size={18} className="ml-1" />
            )}
          </button>

          <button
            onClick={() => skip(10)}
            className="hover:text-blue-400 transition cursor-pointer"
          >
            <FaStepForward size={18} />
          </button>
        </div>

        <div className="w-full flex items-center gap-3">
          <span className="text-[11px] text-gray-400 w-8">
            {formatTime(currentTime)}
          </span>

          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="flex-1 h-1 bg-white/20 rounded-full cursor-pointer accent-white hover:accent-blue-400 transition-all"
          />

          <span className="text-[11px] text-gray-400 w-8 text-right">
            {formatTime(duration)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BottomPlayer;
