"use server";

import { createClient } from "@/lib/supabase/server";

export const getSkills = async (userId: string) => {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from("skills")
    .select("*")
    .eq("user_id", userId);

  if (error) throw error;

  return data;
};