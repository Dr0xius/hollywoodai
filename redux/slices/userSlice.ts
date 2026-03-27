import { createSlice } from "@reduxjs/toolkit";

interface MovieProps {
  id: string;
  director: string;
  title: string;
  tagLine: string;
  imageLink: string;
  audioLink: string;
  rating: string;
  releaseYear: string;
  type: string;
  subscriptionRequired: boolean;
  summary: string;
  tags: string[];
  movieDescription: string;
}

interface authState {
  name: string | null;
  username: string | null;
  email: string | null;
  uid: string;
  loading: boolean;
  isPremium: boolean;
  subTier: string;
  favorites: MovieProps[];
}

const initialState: authState = {
  name: "",
  username: "",
  email: "",
  uid: "",
  loading: true,
  isPremium: false,
  subTier: "basic",
  favorites: [] as MovieProps[],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const exists = state.favorites.find(
        (movie) => movie.id === action.payload.id,
      );
      if (exists) {
        state.favorites = state.favorites.filter(
          (movie) => movie.id !== action.payload.id,
        );
      } else {
        state.favorites.push(action.payload);
      }
    },

    signInUser: (state, action) => {
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
      state.loading = false;
      state.isPremium = action.payload.isPremium;
      state.subTier = action.payload.subTier;
      state.favorites = action.payload.favorites;
    },

    signOutUser: (state) => {
      state.name = "";
      state.username = "";
      state.email = "";
      state.uid = "";
      state.loading = false;
      state.isPremium = false;
      state.subTier = "basic";
      state.favorites = [];
    },
  },
});

export const { signInUser, signOutUser, toggleFavorites } = userSlice.actions;

export default userSlice.reducer;
