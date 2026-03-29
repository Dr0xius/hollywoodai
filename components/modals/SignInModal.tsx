"use client";

import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import {
  closeSignInModal,
  openSignUpModal,
  openForgotPassModal,
} from "@/redux/slices/modalSlice";
import { UserIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaGoogle } from "react-icons/fa";
import useAuth from "@/hooks/useAuth";
import { FaSpinner } from "react-icons/fa";

const SignInModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    handleSignIn,
    handleGoogleSignIn,
    handleGuestSignIn,
    loadingGoogle,
    loadingSignIn,
    loadingGuest,
    error,
  } = useAuth();
  const isOpen = useSelector(
    (state: RootState) => state.modals.signInModalOpen,
  );

  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignInModal())}
        className="flex justify-center items-center"
      >
        <div
          className="w-full h-full sm:w-100 sm:h-fit bg-white sm:rounded-xl 
        outline-none flex flex-col p-7 relative"
        >
          <XMarkIcon
            className="w-6 cursor-pointer
             hover:bg-black/10 rounded-xl absolute top-3 right-3"
            onClick={() => dispatch(closeSignInModal())}
          />
          <h1 className="text-3xl font-bold text-center mb-2.5">Log In</h1>
          {error && (
            <h2 className="text-red-400 text-sm mb-2.5 text-center">{error}</h2>
          )}

          <div className="flex flex-col">
            <div className="w-full gap-3 flex flex-col">
              <button
                className="border-3 border-gray-200 rounded-xl px-5 py-3 text-sm text-left flex gap-3 items-center text-[#404654] font-semibold hover:bg-black/10"
                onClick={() => {
                  handleGoogleSignIn();
                }}
              >
                <FaGoogle className="w-4" />
                <span className={`${loadingGoogle && "animate-spin"}`}>
                  {loadingGoogle ? (
                    <FaSpinner size={20} />
                  ) : (
                    "Login with Google"
                  )}
                </span>
              </button>
              <button
                className="border-3 border-gray-200 rounded-xl 
              px-5 py-3 text-sm text-left flex gap-3 items-center
               text-[#404654] font-semibold hover:bg-black/10"
                onClick={() => {
                  handleGuestSignIn("john@gmail.com", "676767");
                }}
              >
                <UserIcon className="w-4" />
                <span className={`${loadingGuest && "animate-spin"}`}>
                  {loadingGuest ? <FaSpinner size={20} /> : "Login as Guest"}
                </span>
              </button>
            </div>
            <div className="flex justify-center items-center my-5 text-sm gap-7">
              <div className="h-px w-full bg-gray-200"></div>
              <div>or</div>
              <div className="h-px w-full bg-gray-200"></div>
            </div>
            <div className="w-full mb-5 space-y-3 flex flex-col">
              <label className="text-[#667085] text-sm font-bold">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@gmail.com"
                className="border border-gray-300 rounded-xl px-4 py-2 text-sm"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </div>
            <div className="w-full mb-5 space-y-3 flex flex-col">
              <label className="text-[#667085] text-sm font-bold">
                Password
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="border border-gray-300 rounded-xl px-4 py-2 text-sm"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </div>
            <button
              className="text-[#4f46e5] w-fit text-sm text-start"
              onClick={() => {
                dispatch(closeSignInModal());
                dispatch(openForgotPassModal());
              }}
            >
              Forgot Password?
            </button>
            <button
              className="bg-[#320580] text-white 
            w-full h-11 rounded-full font-semibold mt-4"
              onClick={() => handleSignIn(email, password)}
            >
              <span
                className={`flex justify-center ${loadingSignIn && "animate-spin"}`}
              >
                {loadingSignIn ? <FaSpinner size={20} /> : "Log in"}
              </span>
            </button>
          </div>
          <div className="flex justify-center mt-3 gap-1 text-sm">
            <span>Don't have an account yet?</span>
            <button
              className="underline text-[#4f46e5]"
              onClick={() => {
                dispatch(closeSignInModal());
                dispatch(openSignUpModal());
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SignInModal;
