"use server";

import { createClient } from "@/lib/supabase/server";

export const getSkills = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("skills")
    .select("*")
    .eq("user_id", user.id);

  if (error) throw error;

  return data;
};