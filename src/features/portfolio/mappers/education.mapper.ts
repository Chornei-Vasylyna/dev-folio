import type { EducationData } from "@/lib/supabase/types";
import type { EducationFormData } from "../validation/educationSchema";

export const mapEducationToForm = (
  data: EducationData | null,
): EducationFormData["education"] => {
  if (!data || data.length === 0) {
    return [{ specialty: "", institution: "", period: "", description: "" }];
  }
  return data.map((item) => ({
    specialty: item.specialty,
    institution: item.institution,
    period: item.period,
    description: item.description ?? "",
  }));
};
