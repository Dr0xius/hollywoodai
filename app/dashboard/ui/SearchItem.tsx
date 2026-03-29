import useFormatTime from "@/hooks/useFormatTime";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaRegClock } from "react-icons/fa";

const SearchItem = ({ movie, setQuery, setResults }: any) => {
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { formatTime } = useFormatTime();
  const onLoadedMetadata = () => {
    setDuration(audioRef.current?.duration || 0);
  };
  return (
    <Link
      key={movie.id}
      href={`/movie/${movie.id}`}
      onClick={() => {
        setQuery("");
        setResults([]);
      }}
      className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
    >
      <audio
        ref={audioRef}
        src={`https://advanced-internship-api-production.up.railway.app/${movie.audioLink}`}
        onLoadedMetadata={onLoadedMetadata}
      />
      <img
        src={movie.imageLink}
        alt={movie.title}
        className="w-14 aspect-2/3 object-cover rounded-lg shadow-lg"
      />
      <div className="flex flex-col gap-0.5">
        <h3 className="font-bold text-sm text-white">{movie.title}</h3>
        <p className="text-xs text-white/50">{movie.director}</p>
        <div className="flex items-center gap-1.5 mt-1 text-[10px] text-white/30">
          <FaRegClock size={10} />
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </Link>
  );
};

export default SearchItem;
