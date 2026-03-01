"use client";

import React, { useState } from "react";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import {
  openSignInModal,
  closeSignInModal,
  openSignUpModal,
} from "@/redux/slices/modalSlice";
import { UserIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaGoogle } from "react-icons/fa";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/firebase";
import { signInUser } from "@/redux/slices/userSlice";

const SignInModal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isOpen = useSelector(
    (state: RootState) => state.modals.signInModalOpen,
  );

  const dispatch: AppDispatch = useDispatch();

  async function handleSignUp() {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      dispatch(
        signInUser({
          name: userCredentials.user.displayName,
          username: userCredentials.user.email!.split("@")[0],
          email: userCredentials.user.email,
          uid: userCredentials.user.uid,
        }),
      );
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <button
        className="nav__button"
        onClick={() => dispatch(openSignInModal())}
      >
        Sign In
      </button>

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
          <h2 className="text-red-400/0 text-sm mb-2.5 text-center">
            Error: Invalid email or password
          </h2>
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
              />
            </div>
            <span className="text-[#4f46e5] text-sm text-end">
              Forgot Password?
            </span>
            <button
              className="bg-[#320580] text-white 
            w-full h-11 rounded-full font-semibold mt-4"
            >
              Login
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
