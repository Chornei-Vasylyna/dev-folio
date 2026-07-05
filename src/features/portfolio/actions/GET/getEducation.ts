"use server";

import { createClient } from "@/lib/supabase/server";

export const getEducation = async (userId: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("educations")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
};
