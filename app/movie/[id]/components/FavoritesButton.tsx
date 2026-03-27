"use client";
import { RootState } from "@/redux/store";
import React from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "@/redux/slices/userSlice";
import { MovieProps } from "@/types";

interface FavoritesProps {
  movie: MovieProps;
}

const FavoritesButton = ({ movie }: FavoritesProps) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.user.favorites);
  const isFavorited = favorites.some((movie) => movie.id === movie.id);
  return (
    <button
      onClick={() => {
        dispatch(toggleFavorites(movie));
      }}
      className={`flex mb-8 items-center gap-2 ${isFavorited ? "text-purple-600" : "text-zinc-400"}`}
    >
      {isFavorited ? <FaBookmark /> : <FaRegBookmark />}

      <span className={isFavorited ? "text-white" : "text-zinc-400"}>
        {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
      </span>
    </button>
  );
};

export default FavoritesButton;
