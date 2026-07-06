import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";
import type { ExperienceData } from "@/lib/supabase/types";
import { upsertExperiences } from "../actions/upsert/upsertExperience";
import { mapExperienceToForm } from "../mappers/experience.mapper";
import {
  type ExperienceFormData,
  experienceSchema,
} from "../validation/experienceSchema";

export const useExperienceForm = (initialData: ExperienceData | null) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ExperienceFormData>({
    // biome-ignore lint/suspicious/noExplicitAny: Zod type mismatch
    resolver: zodResolver(experienceSchema as any),
    defaultValues: {
      experience: mapExperienceToForm(initialData),
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  const onSubmit = async (data: ExperienceFormData) => {
    try {
      await upsertExperiences(data);
      reset(data);
      router.refresh();
      toast.success("Experience saved");
    } catch {
      toast.error("Failed to save experience");
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    fields,
    append,
    remove,
    errors,
    isSubmitting,
    isDirty
  };
};
