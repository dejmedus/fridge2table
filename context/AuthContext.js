'use client'

import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "@/firebase/config";
import { LoadingSpinner } from '@/components/LoadingSpinner'

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
        <LoadingSpinner />
      </div> : children}
    </AuthContext.Provider>
  );
};
