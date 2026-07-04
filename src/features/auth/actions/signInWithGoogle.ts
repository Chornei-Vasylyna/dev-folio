import { createClient } from "@/lib/supabase/client";

export const signInWithGoogle = async () => {
  const supabase = createClient();

  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });
};
