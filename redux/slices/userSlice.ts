import { createSlice } from "@reduxjs/toolkit";

interface authState {
  name: string | null;
  username: string | null;
  email: string | null;
  uid: string;
  loading: boolean;
}

const initialState: authState = {
  name: "",
  username: "",
  email: "",
  uid: "",
  loading: true,
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
    },

    signOutUser: (state) => {
      state.name = "";
      state.username = "";
      state.email = "";
      state.uid = "";
      state.loading = false;
    },
  },
});

export const { signInUser, signOutUser } = userSlice.actions;

export default userSlice.reducer;
