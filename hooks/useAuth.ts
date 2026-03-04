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
import { closeSignInModal } from "@/redux/slices/modalSlice";
import { signInUser } from "@/redux/slices/userSlice";
import { useRouter } from "next/navigation";

const UseAuth = () => {
  const dispatch: AppDispatch = useDispatch();
  const [loading2, setLoading2] = useState(false);
  const router = useRouter();
  const [error, setError] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  async function handleSignUp(email: string, password: string) {
    setLoading2(true);
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
      router.push("/dashboard");
      setAuthenticated(true);
    } catch (error: any) {
      setError(error.toString());
    } finally {
      setLoading2(false);
    }
  }

  async function handleSignOut() {
    setLoading2(true);
    try {
      await signOut(auth);

      dispatch(signOutUser());
      dispatch(closeSignInModal());
      setAuthenticated(false);
    } catch (error: any) {
      setError(error.toString());
    } finally {
      setLoading2(false);
    }
  }

  async function handleSignIn(email: string, password: string) {
    setLoading2(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setAuthenticated(true);
      router.push("/dashboard");
    } catch (error: any) {
      setError(error.toString());
    } finally {
      setLoading2(false);
    }
  }

  async function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    setLoading2(true);
    try {
      await signInWithPopup(auth, provider);
      dispatch(closeSignInModal());
      setAuthenticated(true);
      router.push("/dashboard");
    } catch (error: any) {
      setError(error.toString());
    } finally {
      setLoading2(false);
    }
  }

  async function handleForgotPassword(email: string) {
    setLoading2(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setFeedback("Instructions Sent: Check your email inbox");
    } catch (error: any) {
      setError(error.toString());
    } finally {
      setLoading2(false);
    }
  }

  return {
    handleSignOut,
    handleSignIn,
    handleGoogleSignIn,
    handleSignUp,
    handleForgotPassword,
    loading2,
    error,
    feedback,
    authenticated,
  };
};

export default UseAuth;
