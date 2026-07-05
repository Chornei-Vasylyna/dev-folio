import type { ExperienceData } from "@/lib/supabase/types";
import type { ExperienceFormData } from "../validation/experienceSchema";

export const mapExperienceToForm = (
  data: ExperienceData | null,
): ExperienceFormData["experience"] => {
  if (!data || data.length === 0) {
    return [
      {
        company: "",
        position: "",
        period: "",
        description: "",
      },
    ];
  }
  return (data ?? []).map((item) => ({
    id: item.id,
    company: item.company,
    position: item.position,
    period: item.period,
    description: item.description ?? "",
  }));
};
