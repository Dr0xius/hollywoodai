import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signInModalOpen: false,
  signUpModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignInModal: (state) => {
      state.signInModalOpen = true;
    },
    closeSignInModal: (state) => {
      state.signInModalOpen = false;
    },
    openSignUpModal: (state) => {
      state.signUpModalOpen = true;
    },
    closeSignUpModal: (state) => {
      state.signUpModalOpen = false;
    },
  },
});

export const {
  openSignInModal,
  closeSignInModal,
  openSignUpModal,
  closeSignUpModal,
} = modalSlice.actions;

export default modalSlice.reducer;
