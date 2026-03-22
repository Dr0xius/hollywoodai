import { auth, db } from "@/firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

export const createCheckoutSession = async (priceId: string): Promise<void> => {
  const user = auth.currentUser;
  if (!user) throw new Error("User must be logged in to checkout.");

  const checkoutRef = collection(
    db,
    "customers",
    user.uid,
    "checkout_sessions",
  );

  const docRef = await addDoc(checkoutRef, {
    price: priceId,
    success_url: window.location.origin + "/dashboard",
    cancel_url: window.location.origin + "/plans",
  });

  return new Promise((resolve, reject) => {
    const unsubscribe = onSnapshot(docRef, (snap) => {
      const { error, url } = snap.data() || {};
      if (error) {
        unsubscribe();
        reject(new Error(error.message));
      }
      if (url) {
        window.location.assign(url);
        resolve();
      }
    });
  });
};
