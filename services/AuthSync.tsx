"use client";

import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "@/redux/slices/userSlice";
import { auth, db } from "@/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const STRIPE_PRICES = {
  PREMIUM: "price_1TDsexFVCu2bcAnsMBT73WvU",
  VIP: "price_1TDsfSFVCu2bcAnshr7EMKrV",
};
const AuthSync = () => {
  const PRICE_IDS = {};
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) return console.log("no user");
      let isPremium = false;
      let subTier = "basic";
      try {
        const subRef = collection(
          db,
          "customers",
          currentUser.uid,
          "subscriptions",
        );
        const q = query(subRef, where("status", "in", ["trailing", "active"]));
        const subSnap = await getDocs(q);

        if (!subSnap.empty) {
          isPremium = true;

          const activeSub = subSnap.docs[0].data();
          const priceId = activeSub.items?.[0]?.price?.id;

          if (priceId === STRIPE_PRICES.VIP) {
            subTier = "Vip+";
          } else if (priceId === STRIPE_PRICES.PREMIUM) {
            subTier = "Premium";
          }
        }
      } catch (err) {
        console.error("Error fetching sub status:", err);
      }

      dispatch(
        signInUser({
          name: currentUser.displayName,
          username: currentUser.email!.split("@")[0],
          email: currentUser.email,
          uid: currentUser.uid,
          isPremium: isPremium,
          subTier: subTier,
        }),
      );
    });
    return unsubscribe;
  }, [dispatch]);
};

export default AuthSync;
