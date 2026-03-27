"use client";

import React, { useState, useEffect } from "react";
import { FaSearch, FaRegClock } from "react-icons/fa";
import { useDebounce } from "use-debounce";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import SearchSkeleton from "../ui/SearchSkeleton";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [debouncedQuery] = useDebounce(query, 500);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!debouncedQuery) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(
          `https://advanced-internship-api-production.up.railway.app/movies?search=${debouncedQuery}`,
        );
        const data = await response.json();
        setResults(data.data || []);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [debouncedQuery]);

  return (
    <div className="h-20 py-4 px-8 w-full border-b  border-white/10 relative z-50">
      <div className="flex w-full h-full justify-between mx-auto max-w-368 items-center">
        <div className="flex gap-2 w-full max-w-100 items-center h-11 bg-white/5 border border-white/10 backdrop-blur-xl focus-within:border-purple-500/50 focus-within:bg-white/10 transition-all duration-300 rounded-full relative">
          <FaSearch className="absolute left-2 text-white/40" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for movies..."
            className="outline-none w-full pl-8 pr-6 py-2 bg-transparent text-white placeholder:text-white/40"
          />

          {debouncedQuery && results && (
            <div className="absolute top-[115%] left-0 w-full bg-[#121214] border  border-white/20 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] z-100 overflow-hidden flex flex-col">
              <div className="p-4 bg-white/5 border-b border-white/5 text-[10px] uppercase tracking-tighter font-bold text-white/30">
                {loading
                  ? "Searching Movies..."
                  : `Search Results for "${debouncedQuery}"`}
              </div>

              <div className="max-h-100 overflow-y-auto custom-scrollbar">
                {loading ? (
                  <SearchSkeleton />
                ) : results.length > 0 ? (
                  results.map((movie: any) => (
                    <Link
                      key={movie.id}
                      href={`/movie/${movie.id}`}
                      onClick={() => {
                        setQuery("");
                        setResults([]);
                      }}
                      className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                    >
                      <img
                        src={movie.imageLink}
                        alt={movie.title}
                        className="w-14 aspect-2/3 object-cover rounded-lg shadow-lg"
                      />
                      <div className="flex flex-col gap-0.5">
                        <h3 className="font-bold text-sm text-white">
                          {movie.title}
                        </h3>
                        <p className="text-xs text-white/50">
                          {movie.director}
                        </p>
                        <div className="flex items-center gap-1.5 mt-1 text-[10px] text-white/30">
                          <FaRegClock size={10} />
                          <span>N/A</span>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="p-10 flex flex-col items-center justify-center text-center gap-2">
                    <span className="text-4xl">🎬</span>
                    <p className="text-sm font-medium text-white/60">
                      No movies found
                    </p>
                    <p className="text-xs text-white/30">
                      Try searching for something else
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <MobileMenu />
      </div>
    </div>
  );
};

export default Searchbar;
