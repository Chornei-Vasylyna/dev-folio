"use server";

import type { ExperienceFormData } from "@/features/portfolio/validation/experienceSchema";
import { createClient } from "@/lib/supabase/server";

export const upsertExperiences = async (data: ExperienceFormData) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Unauthorized");

  await supabase.from("experiences").delete().eq("user_id", user.id);

  if (data.experience.length === 0) return;

  const rows = data.experience.map((item) => ({
    user_id: user.id,
    position: item.position,
    company: item.company,
    period: item.period,
    description: item.description || null,
  }));

  const { error } = await supabase.from("experiences").insert(rows);

  if (error) throw error;
};
