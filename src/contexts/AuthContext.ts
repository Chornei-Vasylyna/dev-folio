import type { User } from "@supabase/supabase-js";
import { createContext } from "react";

interface AuthContextValue {
  user: User | null;
  isLoggedIn: boolean;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
