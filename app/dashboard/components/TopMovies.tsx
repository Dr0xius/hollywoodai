import React from "react";
import Carousel from "../ui/Carousel";
import { useApi } from "@/hooks/useApi";

const TopMovies = async () => {
  const movies = await useApi("/topMovies");
  return (
    <div className="pt-3 sm:pt-6 pb-10 px-4 sm:px-8 mx-auto w-full h-full max-w-384">
      <h1 className="pl-4 text-lg font-bold">Top Movies</h1>
      <h3 className="pl-4 text-sm text-white/60 mb-4">
        Enjoy our highest rated films.
      </h3>
      <div className="flex-1 w-full min-w-0">
        <Carousel movies={movies} />
      </div>
    </div>
  );
};

export default TopMovies;
