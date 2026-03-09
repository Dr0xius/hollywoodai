import React from "react";
import MovieCard from "../ui/MovieCard";
import Carousel from "../ui/Carousel";
import { UseApi } from "@/hooks/useApi";

const TopMovies = async () => {
  const movies = await UseApi("/topMovies");
  return (
    <div className="pt-10 pb-20 px-8 mx-auto w-full h-full max-w-384">
      <h1 className="text-lg font-bold">Top Movies</h1>
      <h3 className="text-sm text-white/60 mb-4">
        Enjoy our highest rated films.
      </h3>
      <div className="flex-1 w-full min-w-0">
        <Carousel movies={movies} />
      </div>
    </div>
  );
};

export default TopMovies;
