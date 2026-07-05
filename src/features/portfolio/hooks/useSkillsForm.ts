import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  type SkillsFormData,
  skillsSchema,
} from "@/features/portfolio/validation/skillsSchema";
import type { SkillsData } from "@/lib/supabase/types";
import { upsertSkills } from "../actions/upsert/upsertSkills";
import { mapSkillsToForm } from "../mappers/skills.mapper";

export const useSkillsForm = (initialData: SkillsData | null) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SkillsFormData>({
    // biome-ignore lint/suspicious/noExplicitAny: Zod type mismatch
    resolver: zodResolver(skillsSchema as any),
    defaultValues: {
      skills: mapSkillsToForm(initialData),
    },
  });

  const onSubmit = async (data: SkillsFormData) => {
    try {
      const skillsArray = data.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      await upsertSkills(skillsArray);
      router.refresh();
      toast.success("Skills saved");
    } catch {
      toast.error("Failed to save skills");
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
};
