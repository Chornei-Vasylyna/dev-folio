"use server";

import { createClient } from "@/lib/supabase/server";

export const getExperience = async (userId: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("experiences")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
};