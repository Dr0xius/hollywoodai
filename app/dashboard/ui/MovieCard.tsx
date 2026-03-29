"use client";

import { FaRegClock, FaStar } from "react-icons/fa";
import { MovieProps } from "@/types";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import MovieCardSkeleton from "./MovieCardSkeleton";
import { useRef, useState } from "react";
import useFormatTime from "@/hooks/useFormatTime";

interface MovieCardProps {
  movie: MovieProps;
  src: string;
}

const MovieCard = ({ movie, src }: MovieCardProps) => {
  const { loading, isPremium } = useSelector((state: RootState) => state.user);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { formatTime } = useFormatTime();

  const onLoadedMetadata = () => {
    setDuration(audioRef.current?.duration || 0);
  };

  return (
    <>
      {loading ? (
        <MovieCardSkeleton />
      ) : (
        <Link href={`/movie/${movie.id}`}>
          <audio src={src} ref={audioRef} onLoadedMetadata={onLoadedMetadata} />

          <div className="w-full bg-white/5 max-w-67 backdrop-blur-md transition-all duration-300 ease-out border border-white/10 hover:bg-white/[0.07] hover:border-white/20 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden rounded-xl">
            <div className="aspect-2/3 w-full relative bg-gray-400 rounded-xl">
              <img
                src={movie.imageLink}
                alt="Movie Poster"
                className="object-cover w-full h-full"
              />
              <div
                className={`${!movie.subscriptionRequired || isPremium ? "hidden" : "absolute"} top-2 right-2 bg-linear-to-r from-violet-600 via-violet-800 to-violet-900 text-[10px] font-bold tracking-wider text-white uppercase shadow-[0_0_15px_rgba(124,58,237,0.5)] border border-white/10 px-2 py-0.5 rounded-full`}
              >
                PREMIUM
              </div>
            </div>
            <div className="px-1 sm:px-2 py-3 w-full flex flex-col gap-0.5">
              <h3 className="text-sm font-semibold truncate">
                {movie.title ?? "Unknown Title"}
              </h3>
              <h4 className="text-[11px] text-white/50 truncate">
                {movie.director ?? "Unknown Director"}
              </h4>

              <div className="flex items-center gap-2 sm:gap-3 mt-1">
                <div className="flex items-center gap-1 text-[11px] text-white/60">
                  <FaRegClock />
                  <span>{formatTime(duration)}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-yellow-500 font-medium">
                  <FaStar className="fill-current" />
                  <span>{movie.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default MovieCard;
