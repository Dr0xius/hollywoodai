"use client";
import React from "react";
import SignInModal from "../modals/SignInModal";
import SignUpModal from "../modals/SignUpModal";
import LoggedModal from "../modals/LoggedModal";
import ForgotPassModal from "../modals/ForgotPassModal";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import useAuth from "@/hooks/useAuth";

const CheckLogged = () => {
  const user = useSelector((state: RootState) => state.user.username);
  const { loading2 } = useAuth();
  const loading = useSelector(
    (state: RootState) => state.loading.loadingScreenOpen,
  );
  return user ? (
    <LoggedModal />
  ) : (
    <>
      <SignUpModal /> <SignInModal /> <ForgotPassModal />
    </>
    // <SignInModal />
  );
};

export default CheckLogged;
