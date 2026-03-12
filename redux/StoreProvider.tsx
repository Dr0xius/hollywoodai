"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import AuthSync from "@/services/AuthSync";

interface StoreProviderProps {
  children: React.ReactNode;
}

const StoreProvider = ({ children }: StoreProviderProps) => {
  return (
    <Provider store={store}>
      <AuthInitializer />
      {children}
    </Provider>
  );
};

const AuthInitializer = () => {
  AuthSync();
  return null;
};

export default StoreProvider;
