"use client";
import { AppDispatch } from "@/redux/store";
import React, { use } from "react";
import { useDispatch } from "react-redux";
import { openSignInModal } from "@/redux/slices/modalSlice";

const SignInButton = () => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <button
      className={`nav__button`}
      onClick={() => dispatch(openSignInModal())}
    >
      Sign In
    </button>
  );
};

export default SignInButton;
