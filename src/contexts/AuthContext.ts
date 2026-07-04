import type { User } from "@supabase/supabase-js";
import { createContext } from "react";

interface AuthContextValue {
  user: User | null;
  isLoggedIn: boolean;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
