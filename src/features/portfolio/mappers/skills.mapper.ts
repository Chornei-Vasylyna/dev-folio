import type { SkillsData } from "@/lib/supabase/types";
import type { SkillsFormData } from "../validation/skillsSchema";

export const mapSkillsToForm = (
  data: SkillsData | null,
): SkillsFormData["skills"] => {
  return (data ?? []).map((skill) => skill.name).join(", ");
};
