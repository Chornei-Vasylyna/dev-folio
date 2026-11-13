import { createClient } from "@/lib/supabase/client";

export const signUp = async (email: string, password: string) => {
  const supabase = createClient();

  return supabase.auth.signUp({
    email: email,
    password: password,
  });
};
