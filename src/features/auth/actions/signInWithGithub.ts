import { createClient } from "@/lib/supabase/client";

export const signInWithGithub = async () => {
  const supabase = createClient();

  return supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });
};