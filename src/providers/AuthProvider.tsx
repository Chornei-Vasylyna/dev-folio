"use client";

import type { User } from "@supabase/supabase-js/dist/index.cjs";
import { useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";

interface AuthProviderProps {
  children: React.ReactNode;
  initialUser: User | null;
}

export const AuthProvider = ({ children, initialUser }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(initialUser);

  const value = {
    user,
    isLoggedIn: !!user,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
