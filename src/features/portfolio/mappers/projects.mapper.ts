import type { ProjectsData } from "@/lib/supabase/types";
import type { ProjectsFormData } from "../validation/projectsSchema";

export const mapProjectsToForm = (
  data: ProjectsData | null,
): ProjectsFormData["projects"] => {
  if (!data || data.length === 0) {
    return [
      {
        name: "",
        description: "",
        githubUrl: "",
        imageUrl: "",
        liveUrl: "",
      },
    ];
  }

  return data.map((item) => ({
    name: item.name,
    description: item.description,
    githubUrl: item.github_url ?? "",
    imageUrl: item.image_url ?? "",
    liveUrl: item.live_url ?? "",
  }));
};
