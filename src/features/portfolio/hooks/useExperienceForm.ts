import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import {
  type ExperienceFormData,
  experienceSchema,
} from "../validation/experienceSchema";

export const useExperienceForm = (initialData?: ExperienceFormData) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ExperienceFormData>({
    // biome-ignore lint/suspicious/noExplicitAny: Zod type mismatch
    resolver: zodResolver(experienceSchema as any),
    defaultValues: {
      experience: initialData?.experience || [
        { position: "", company: "", period: "", description: "" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  const onSubmit = async (data: ExperienceFormData) => {
    try {
      console.log("Дані досвіду готові для БД:", data.experience);
    } catch (error) {
      console.error(error);
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
