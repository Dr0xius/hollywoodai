"use client";

import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "@/redux/slices/userSlice";
import { auth, db } from "@/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const AuthSync = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) return console.log("no user");
      let isPremium = false;
      try {
        const subRef = collection(
          db,
          "customers",
          currentUser.uid,
          "subscriptions",
        );
        const q = query(subRef, where("status", "in", ["trailing", "active"]));
        const subSnap = await getDocs(q);

        isPremium = !subSnap.empty; // If docs exist, they are premium
      } catch (err) {
        console.error("Error fetching sub status:", err);
      }

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
