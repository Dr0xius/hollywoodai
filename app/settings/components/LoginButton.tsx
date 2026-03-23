"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { openSignInModal } from "@/redux/slices/modalSlice";

const LoginButton = () => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(openSignInModal())}
      className="bg-blue-400 w-full max-w-50 px-6 py-2 rounded-xl"
    >
      Login
    </button>
  );
};

export default LoginButton;
