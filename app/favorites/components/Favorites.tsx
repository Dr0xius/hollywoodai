"use client";
import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "@/app/dashboard/ui/MovieCard";
import { RootState } from "@/redux/store";

const Favorites = () => {
  const { favorites } = useSelector((state: RootState) => state.user);
  return (
    <div className="pt-6 pb-30 px-8 items-start mx-auto w-full h-full max-w-384 flex flex-col">
      <div className="pt-3 border-b border-white/10 px-4 mx-auto w-full max-w-384">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4">
          Favorites
        </h1>
      </div>
      {favorites.length === 0 ? (
        <p className="text-zinc-500">You haven't added any movies yet.</p>
      ) : (
        <div className="w-full min-w-0">
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {favorites.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
