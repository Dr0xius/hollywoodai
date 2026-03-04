"use client";

import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "@/redux/slices/userSlice";
import { auth } from "@/firebase";

const AuthSync = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  return useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return console.log("no user");

      dispatch(
        signInUser({
          name: currentUser.displayName,
          username: currentUser.email!.split("@")[0],
          email: currentUser.email,
          uid: currentUser.uid,
        }),
      );
    });
    return unsubscribe;
  }, [dispatch]);
};

export default AuthSync;
