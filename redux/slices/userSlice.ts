import { createSlice } from "@reduxjs/toolkit";

interface authState {
  name: string | null;
  username: string | null;
  email: string | null;
  uid: string;
  loading: boolean;
  isPremium: boolean;
  subTier: string;
}

const initialState: authState = {
  name: "",
  username: "",
  email: "",
  uid: "",
  loading: true,
  isPremium: false,
  subTier: "basic",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInUser: (state, action) => {
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
      state.loading = action.payload.loading;
      state.isPremium = action.payload.isPremium;
      state.subTier = action.payload.subTier;
    },

    signOutUser: (state) => {
      state.name = "";
      state.username = "";
      state.email = "";
      state.uid = "";
      state.loading = false;
      state.isPremium = false;
      state.subTier = "basic";
    },
  },
});

export const { signInUser, signOutUser } = userSlice.actions;

export default userSlice.reducer;
