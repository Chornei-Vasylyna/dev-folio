import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  type EducationFormData,
  educationSchema,
} from "@/features/portfolio/validation/educationSchema";
import type { EducationData } from "@/lib/supabase/types";
import { upsertEducation } from "../actions/UPSERT/upsertEducation";
import { mapEducationToForm } from "../mappers/education.mapper";

export const useEducationForm = (initialData: EducationData | null) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<EducationFormData>({
    // biome-ignore lint/suspicious/noExplicitAny: Zod type mismatch
    resolver: zodResolver(educationSchema as any),
    defaultValues: {
      education: mapEducationToForm(initialData),
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const onSubmit = async (data: EducationFormData) => {
    try {
      await upsertEducation(data);
      router.refresh();
      toast.success("Education saved");
    } catch {
      toast.error("Failed to save education");
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
  };
};
