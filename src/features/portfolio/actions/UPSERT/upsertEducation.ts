"use server";

import type { EducationFormData } from "@/features/portfolio/validation/educationSchema";
import { createClient } from "@/lib/supabase/server";

export const upsertEducation = async (data: EducationFormData) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Unauthorized");

  await supabase.from("educations").delete().eq("user_id", user.id);

  if (data.education.length === 0) return;

  const rows = data.education.map((item) => ({
    user_id: user.id,
    specialty: item.specialty,
    institution: item.institution,
    period: item.period,
    description: item.description || null,
  }));

  const { error } = await supabase.from("educations").insert(rows);

  if (error) throw error;
};
