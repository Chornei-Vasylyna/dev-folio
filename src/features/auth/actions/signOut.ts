import { createClient } from "@/lib/supabase/client";

export const signOut = async () => {
  const supabase = createClient();

  return supabase.auth.signOut();
};