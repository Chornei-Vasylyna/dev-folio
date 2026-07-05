"use server";

import { createClient } from "@/lib/supabase/server";

export const upsertSkills = async (skills: string[]) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Unauthorized");

  await supabase.from("skills").delete().eq("user_id", user.id);

  if (skills.length === 0) return;

  const rows = skills.map((name) => ({
    user_id: user.id,
    name,
  }));

  const { error } = await supabase.from("skills").insert(rows);

  if (error) throw error;
};
