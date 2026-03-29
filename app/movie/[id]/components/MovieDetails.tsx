"use client";
import React, { useEffect, useRef, useState } from "react";
import SummarizeButton from "./SummarizeButton";
import FavoritesButton from "./FavoritesButton";
import { FaCalendar, FaMicrophone, FaRegClock, FaStar } from "react-icons/fa";
import useFormatTime from "@/hooks/useFormatTime";

const MovieDetails = ({ movie, src }: any) => {
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { formatTime } = useFormatTime();
  const onLoadedMetadata = () => {
    setDuration(audioRef.current?.duration || 0);
  };
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.readyState >= 1) {
      setDuration(audio.duration);
    }
  }, [movie.id]);
  return (
    <>
      <div className="mx-auto min-w-50 mb-6 lg:ml-8 w-50 aspect-2/3 rounded-2xl overflow-hidden">
        <img
          className="w-full h-full "
          src={movie?.imageLink}
          alt="Post Image"
        />
        <audio ref={audioRef} src={src} onLoadedMetadata={onLoadedMetadata} />
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl sm:text-4xl text-white font-extrabold">
            {movie?.title}
          </h1>
          <span className="text-sm sm:text-lg text-white/60">
            {movie?.director}
          </span>
          <span className="text-sm sm:text-lg text-white/60">
            {movie?.tagLine}
          </span>
        </div>
        <div className="my-6 py-4 border-t border-b border-white/10">
          <div className="flex flex-col gap-3">
            <div className="flex gap-5 sm:gap-25 max-w-87">
              <div className="flex w-[50%] items-center gap-1 text-md text-yellow-500 font-medium">
                <FaStar />
                <span>{movie.rating} / 10</span>
              </div>
              <div className="flex w-[50%] items-center gap-1 text-md text-white">
                <FaRegClock />
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex gap-5 sm:gap-25 max-w-87">
              <div className="flex w-[50%] items-center gap-1 text-md text-white">
                <FaMicrophone />
                <span className="text-sm md:text-[12px]">Audio and text</span>
              </div>
              <div className="flex w-[50%] items-center gap-1 text-md text-white">
                <FaCalendar />
                <span>{movie.releaseYear}</span>
              </div>
            </div>
          </div>
        </div>
        <SummarizeButton
          movieId={movie.id}
          subRequired={movie.subscriptionRequired}
        />
        <FavoritesButton movie={movie ? movie : null} />
        <h2 className="mb-4 text-xl font-semibold">What's it about?</h2>
        <div className="flex gap-4 mb-6 items-center flex-wrap">
          <div
            className={`${!movie.tags[0] && "hidden"} h-12 flex px-4 border-white/60 border items-center bg-black/10 rounded-xl `}
          >
            {movie?.tags[0]}
          </div>
          <div
            className={`${!movie?.tags[1] && "hidden"} h-12 flex px-4 border-white/60 border items-center bg-black/10 rounded-xl `}
          >
            {movie?.tags[1]}
          </div>
          <div
            className={`${!movie?.tags[2] && "hidden"} h-12 flex px-4 border-white/60 border items-center bg-black/10 rounded-xl `}
          >
            {movie?.tags[2]}
          </div>
          <div
            className={`${!movie?.tags[3] && "hidden"} h-12 flex px-4 border-white/60 border items-center bg-black/10 rounded-xl `}
          >
            {movie?.tags[3]}
          </div>
        </div>
        <p>{movie?.movieDescription}</p>
      </div>
    </>
  );
};

export default MovieDetails;
