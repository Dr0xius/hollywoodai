"use client";
import React, { useState } from "react";
import {
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "@/firebase";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { signOutUser } from "@/redux/slices/userSlice";
import { closeSignInModal, closeSignUpModal } from "@/redux/slices/modalSlice";
import { signInUser } from "@/redux/slices/userSlice";
import { usePathname, useRouter } from "next/navigation";
import { createCheckoutSession } from "@/services/stripe";
import { MovieProps } from "@/types";
interface FavoriteProps {
  movie: MovieProps;
}

const useAuth = () => {
  const dispatch: AppDispatch = useDispatch();
  const [loadingSignIn, setLoadingSignIn] = useState(false);
  const [loadingSignUp, setLoadingSignUp] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingGuest, setLoadingGuest] = useState(false);
  const [loadingSignOut, setLoadingSignOut] = useState(false);
  const [loadingForgotPass, setLoadingForgotPass] = useState(false);
  const router = useRouter();
  const [error, setError] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const pathName = usePathname();

  const redirect = (defaultRoute: string) => {
    if (pathName === "/") {
      router.push(`/${defaultRoute}`);
    }
  };

  async function handleSignUp(email: string, password: string) {
    setLoadingSignUp(true);
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
          loading: false,
          isPremium: false,
          subTier: false,
          favorites: [] as MovieProps[],
        }),
      );
      dispatch(closeSignUpModal());
      dispatch(closeSignInModal());
      redirect("dashboard");
      setAuthenticated(true);
    } catch (error: any) {
      setError(error.toString());
    } finally {
      setLoadingSignUp(false);
    }
  }

  async function handleSignOut() {
    setLoadingSignOut(true);
    try {
      await signOut(auth);

      dispatch(signOutUser());
      dispatch(closeSignUpModal());
      dispatch(closeSignInModal());
      setAuthenticated(false);
    } catch (error: any) {
      setError(error.toString());
    } finally {
      setLoadingSignOut(false);
    }
  }

  async function handleSignIn(email: string, password: string) {
    setLoadingSignIn(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(closeSignUpModal());
      dispatch(closeSignInModal());
      setAuthenticated(true);
      redirect("dashboard");
    } catch (error: any) {
      setError(error.toString());
    } finally {
      setLoadingSignIn(false);
    }
  }

  async function handleGuestSignIn(email: string, password: string) {
    setLoadingGuest(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(closeSignUpModal());
      dispatch(closeSignInModal());
      setAuthenticated(true);
      redirect("dashboard");
    } catch (error: any) {
      setError(error.toString());
    } finally {
      setLoadingGoogle(false);
    }
  }

  async function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    setLoadingGoogle(true);
    try {
      await signInWithPopup(auth, provider);
      dispatch(closeSignUpModal());
      dispatch(closeSignInModal());
      setAuthenticated(true);
      redirect("dashboard");
    } catch (error: any) {
      setError(error.toString());
    } finally {
      setLoadingGoogle(false);
    }
  }

  async function handleForgotPassword(email: string) {
    setLoadingForgotPass(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setFeedback("Instructions Sent: Check your email inbox");
    } catch (error: any) {
      setError(error.toString());
    } finally {
      setLoadingForgotPass(false);
    }
  }

  const handleCheckout = async (priceId: string) => {
    setIsSubscribing(true);
    try {
      await createCheckoutSession(priceId);
    } catch (error: any) {
      console.error("Stripe Error:", error.message);
    } finally {
      setIsSubscribing(false);
    }
  };

  return {
    handleSignOut,
    handleSignIn,
    handleGoogleSignIn,
    handleSignUp,
    handleForgotPassword,
    handleCheckout,
    handleGuestSignIn,
    loadingSignIn,
    loadingForgotPass,
    loadingGoogle,
    loadingSignOut,
    loadingSignUp,
    loadingGuest,
    error,
    feedback,
    authenticated,
    isSubscribing,
  };
};

export default useAuth;
