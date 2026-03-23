"use client";

import { FaRegClock, FaRegStar, FaStar } from "react-icons/fa";
import { MovieProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";

interface MovieCardProps {
  movie: MovieProps;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const dispatch: AppDispatch = useDispatch();
  const isPremium = useSelector((state: RootState) => state.user.isPremium);
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="w-full bg-black/10 overflow-hidden rounded-xl">
        <div className="aspect-2/3 w-full relative bg-gray-400 rounded-xl">
          <img
            src={movie.imageLink}
            alt="Movie Poster"
            className="object-cover w-full h-full"
          />
          <div
            className={`${!movie.subscriptionRequired || isPremium ? "hidden" : "block"} absolute top-2 right-2 bg-purple-600 text-[10px] px-2 py-0.5 rounded-full text-white font-bold shadow-lg`}
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
              <span>120 min</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-yellow-500 font-medium">
              <FaStar className="fill-current" />
              <span>{movie.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
