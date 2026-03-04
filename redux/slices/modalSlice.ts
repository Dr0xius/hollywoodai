import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signInModalOpen: false,
  signUpModalOpen: false,
  forgotPassModalOpen: false,
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
    openForgotPassModal: (state) => {
      state.forgotPassModalOpen = true;
    },
    closeForgotPassModal: (state) => {
      state.forgotPassModalOpen = false;
    },
  },
});

export const {
  openSignInModal,
  closeSignInModal,
  openSignUpModal,
  closeSignUpModal,
  openForgotPassModal,
  closeForgotPassModal,
} = modalSlice.actions;

export default modalSlice.reducer;
