"use client";

import React, { useState } from "react";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { openSignInModal, closeSignUpModal } from "@/redux/slices/modalSlice";
import { UserIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaGoogle } from "react-icons/fa";
import useAuth from "@/hooks/useAuth";

const SignUpModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignUp, error } = useAuth();
  const isOpen = useSelector(
    (state: RootState) => state.modals.signUpModalOpen,
  );
  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignUpModal())}
        className="flex justify-center items-center"
      >
        <div
          className="w-full h-full sm:w-100 sm:h-fit bg-white sm:rounded-xl 
                outline-none flex flex-col p-7 relative"
        >
          <XMarkIcon
            className="w-6 cursor-pointer
                     hover:bg-black/10 rounded-xl absolute top-3 right-3"
            onClick={() => dispatch(closeSignUpModal())}
          />
          <h1 className="text-3xl font-bold text-center mb-2.5">Sign Up</h1>
          {error && (
            <h2 className="text-red-400 text-sm mb-2.5 text-center">{error}</h2>
          )}
          <div className="flex flex-col">
            <div className="w-full gap-3 flex flex-col">
              <button
                className="border-3 border-gray-200 rounded-xl 
                      px-5 py-3 text-sm text-left flex gap-3 items-center
                       text-[#404654] font-semibold hover:bg-black/10"
              >
                <FaGoogle />
                <span>Login with Google</span>
              </button>
              <button
                className="border-3 border-gray-200 rounded-xl 
                      px-5 py-3 text-sm text-left flex gap-3 items-center
                       text-[#404654] font-semibold hover:bg-black/10"
              >
                <UserIcon className="w-4" />
                <span>Login as Guest</span>
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
              className="bg-[#320580] text-white 
                    w-full h-11 rounded-full font-semibold "
              onClick={() => handleSignUp(email, password)}
            >
              Sign Up
            </button>
          </div>
          <div className="flex justify-center mt-3 gap-1 text-sm">
            <span>Already have an account?</span>
            <button
              className="underline text-[#4f46e5]"
              onClick={() => {
                dispatch(closeSignUpModal());
                dispatch(openSignInModal());
              }}
            >
              Log in
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SignUpModal;
