"use client";
import React, { useState } from "react";
import { Modal } from "@mui/material";
import { closeForgotPassModal } from "@/redux/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { XMarkIcon } from "@heroicons/react/24/solid";
import useAuth from "@/hooks/useAuth";
import { FaSpinner } from "react-icons/fa";

const ForgotPassModal = () => {
  const [email, setEmail] = useState("");
  const isOpen = useSelector(
    (state: RootState) => state.modals.forgotPassModalOpen,
  );
  const { handleForgotPassword, loadingForgotPass, feedback, error } =
    useAuth();
  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeForgotPassModal())}
        className="flex justify-center items-center"
      >
        <div
          className="w-full h-full sm:w-100 sm:h-fit bg-white sm:rounded-xl 
        outline-none flex flex-col p-7 relative"
        >
          <XMarkIcon
            className="w-6 cursor-pointer
             hover:bg-black/10 rounded-xl absolute top-3 right-3"
            onClick={() => dispatch(closeForgotPassModal())}
          />
          <h1 className="text-3xl font-bold text-center mb-2.5">
            Forgot Password
          </h1>
          {feedback ? (
            <h2 className="text-green-600 text-sm mb-2.5 text-center">
              {feedback}
            </h2>
          ) : (
            <h2 className="text-red-400 text-sm mb-2.5 text-center">{error}</h2>
          )}

          <div className="flex flex-col">
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
          </div>
          <div className="flex justify-center mt-3 gap-1 text-sm">
            <button
              className="bg-[#320580] text-white 
            w-full h-11 rounded-full font-semibold"
              onClick={() => {
                handleForgotPassword(email);
              }}
            >
              <span
                className={`flex justify-center ${loadingForgotPass && "animate-spin"}`}
              >
                {loadingForgotPass ? (
                  <FaSpinner size={20} />
                ) : (
                  "Send Instructions"
                )}
              </span>
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ForgotPassModal;
