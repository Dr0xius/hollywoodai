"use client";
import { RootState } from "@/redux/store";
import React from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "@/redux/slices/userSlice";
import { MovieProps } from "@/types";
import { db } from "@/firebase";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

interface FavoritesProps {
  movie: MovieProps;
}

const FavoritesButton = ({ movie }: FavoritesProps) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.user.favorites);
  const isFavorited = favorites.find((m) => m.id === movie.id);
  const user = useSelector((state: RootState) => state.user);

  const handleFavoriteClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!user.uid) {
      alert("Please log in to save favorites!");
      return;
    }

    const userRef = doc(db, "users", user.uid);

    dispatch(toggleFavorites(movie));

    try {
      if (isFavorited) {
        await updateDoc(userRef, {
          favorites: arrayRemove(movie),
        });
      } else {
        await updateDoc(userRef, {
          favorites: arrayUnion(movie),
        });
      }
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };

  return (
    <button
      onClick={handleFavoriteClick}
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
