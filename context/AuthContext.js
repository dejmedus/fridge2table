'use client'

import { createContext, useContext, useState, useEffect } from "react";
import Image from "next/image";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "@/firebase/config";
import loadingSpinner from "@/assets/loadingSpinner.png"

const auth = getAuth(firebase_app);

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div className="flex flex-col items-center h-full gap-2 sm:mt-6">
        <Image className="animate-spin" src={loadingSpinner} width={64} height={64} alt="Leaf loading spinner" />
        <p className="font-bold">Loading...</p>
      </div> : children}
    </AuthContext.Provider>
  );
};
