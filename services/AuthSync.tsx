"use client";

import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import {
  signInUser,
  signOutUser,
  setFavorites,
} from "@/redux/slices/userSlice";
import { auth, db } from "@/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { MovieProps } from "@/types";
import Favorites from "@/app/favorites/components/Favorites";

interface FavoritesProps {
  movie: MovieProps;
}

const STRIPE_PRICES = {
  PREMIUM: "price_1TDsexFVCu2bcAnsMBT73WvU",
  VIP: "price_1TDsfSFVCu2bcAnshr7EMKrV",
};
const AuthSync = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        dispatch(signOutUser());
        return;
      }
      let isPremium = false;
      let subTier = "basic";
      let userFavorites = [];
      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));

        if (userDoc.exists()) {
          const userData = userDoc.data();

          userFavorites = userData.favorites || [];
        } else {
          await setDoc(doc(db, "users", currentUser.uid), {
            email: currentUser.email,
            favorites: [],
          });
          dispatch(setFavorites([]));
        }
      } else {
        dispatch(signOutUser());
      }
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

      dispatch(setFavorites(userFavorites));
      dispatch(
        signInUser({
          name: currentUser.displayName,
          username: currentUser.email!.split("@")[0],
          email: currentUser.email,
          uid: currentUser.uid,
          loading: false,
          isPremium: isPremium,
          subTier: subTier,
          favorites: userFavorites,
        }),
      );
    });
    return unsubscribe;
  }, [dispatch]);
};

export default AuthSync;
