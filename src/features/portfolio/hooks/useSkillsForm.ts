import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  type SkillsFormData,
  skillsSchema,
} from "@/features/portfolio/validation/skillsSchema";

export const useSkillsForm = (initialData?: Partial<SkillsFormData>) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SkillsFormData>({
    // biome-ignore lint/suspicious/noExplicitAny: Zod type mismatch
    resolver: zodResolver(skillsSchema as any),
    defaultValues: {
      skills: initialData?.skills || "",
    },
  });

  const onSubmit = async (data: SkillsFormData) => {
    try {
      console.log("Skills data ready for save:", data.skills);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
};
