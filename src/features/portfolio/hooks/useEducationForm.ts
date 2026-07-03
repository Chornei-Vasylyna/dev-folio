import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import {
  type EducationFormData,
  educationSchema,
} from "@/features/portfolio/validation/educationSchema";

export const useEducationForm = (initialData?: EducationFormData) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<EducationFormData>({
    // biome-ignore lint/suspicious/noExplicitAny: Zod type mismatch
    resolver: zodResolver(educationSchema as any),
    defaultValues: {
      education: initialData?.education || [
        { specialty: "", institution: "", period: "", description: "" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const onSubmit = async (data: EducationFormData) => {
    try {
      console.log("Education data ready for save:", data.education);
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
