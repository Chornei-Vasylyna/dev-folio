"use server";

import type { ProfileFormData } from "@/features/portfolio/validation/profileSchema";
import { createClient } from "@/lib/supabase/server";

export const upsertProfile = async (data: ProfileFormData) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const { error } = await supabase.from("profiles").upsert(
    {
      user_id: user.id,

      avatar: data.avatar || null,
      full_name: data.fullName,
      specialty: data.specialty,
      email: data.email,
      phone: data.phone,
      github_url: data.githubUrl || null,
      linkedin_url: data.linkedinUrl || null,
      telegram_url: data.telegramUrl || null,
      bio: data.bio || null,
    },
    {
      onConflict: "user_id",
    },
  );

  if (error) throw error;
};
