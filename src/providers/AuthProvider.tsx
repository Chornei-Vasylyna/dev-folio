"use client";

import type { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { createClient } from "@/lib/supabase/client";

interface AuthProviderProps {
  children: React.ReactNode;
  initialUser: User | null;
}

export const AuthProvider = ({ children, initialUser }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(initialUser);

  useEffect(() => {
    const supabase = createClient();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) =>
      setUser(session?.user ?? null),
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
