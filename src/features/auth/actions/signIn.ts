import { createClient } from "@/lib/supabase/client";

export const signIn = async (email: string, password: string) => {
  const supabase = createClient();

  return supabase.auth.signInWithPassword({
    email,
    password,
  });
};
