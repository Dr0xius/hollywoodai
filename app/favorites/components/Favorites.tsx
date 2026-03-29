"use client";
import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "@/app/dashboard/ui/MovieCard";
import { RootState } from "@/redux/store";
import MovieCardSkeleton from "@/app/dashboard/ui/MovieCardSkeleton";

const Favorites = () => {
  const { favorites, loading } = useSelector((state: RootState) => state.user);
  let content;
  if (loading) {
    content = (
      <div className="w-full min-w-0">
        <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {new Array(5).fill(0).map((_, i) => (
            <MovieCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  } else if (favorites.length === 0) {
    content = (
      <p className="text-zinc-500">You haven't added any movies yet.</p>
    );
  } else {
    content = (
      <div className="w-full min-w-0">
        <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              src={`https://advanced-internship-api-production.up.railway.app/${movie.audioLink}`}
            />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="pt-6 pb-30 px-8 items-start mx-auto w-full h-full max-w-384 flex flex-col">
      <div className="pt-3 border-b border-white/10 px-4 mx-auto w-full max-w-384">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4">
          Favorites
        </h1>
      </div>
      {content}
    </div>
  );
};

export default Favorites;
