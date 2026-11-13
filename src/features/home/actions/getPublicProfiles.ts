"use server";

import { createClient } from "@/lib/supabase/server";

export type PublicProfiles = Awaited<ReturnType<typeof getPublicProfiles>>

export const getPublicProfiles = async () => {
  const supabase = await createClient();

  const { data: profiles, error: pError } = await supabase
    .from("profiles")
    .select("user_id, full_name, specialty, avatar");

  if (pError) throw pError;

  const { data: skills, error: sError } = await supabase
    .from("skills")
    .select("user_id, name");

  if (sError) throw sError;

  return (profiles ?? []).map((p) => ({
    ...p,
    skills: (skills ?? [])
      .filter((s) => s.user_id === p.user_id)
      .map((s) => s.name),
  }));
};
