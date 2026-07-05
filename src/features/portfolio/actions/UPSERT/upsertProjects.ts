"use server";

import type { ProjectsFormData } from "@/features/portfolio/validation/projectsSchema";
import { createClient } from "@/lib/supabase/server";

export const upsertProjects = async (data: ProjectsFormData) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Unauthorized");

  await supabase.from("projects").delete().eq("user_id", user.id);

  if (data.projects.length === 0) return;

  const rows = data.projects.map((item) => ({
    user_id: user.id,
    name: item.name,
    description: item.description,
    github_url: item.githubUrl,
    image_url: item.imageUrl || null,
    live_url: item.liveUrl || null,
  }));

  const { error } = await supabase.from("projects").insert(rows);

  if (error) throw error;
};
