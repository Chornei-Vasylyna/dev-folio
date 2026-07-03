import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import {
  type ProjectsFormData,
  projectsSchema,
} from "@/features/portfolio/validation/projectsSchema";

export const useProjectsForm = (initialData?: ProjectsFormData) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ProjectsFormData>({
    // biome-ignore lint/suspicious/noExplicitAny: Zod type mismatch
    resolver: zodResolver(projectsSchema as any),
    defaultValues: {
      projects: initialData?.projects || [
        {
          name: "",
          description: "",
          githubUrl: "",
          imageUrl: "",
          liveUrl: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });

  const onSubmit = async (data: ProjectsFormData) => {
    try {
      console.log("Projects data ready for save:", data.projects);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    control,
    register,
    handleSubmit: handleSubmit(onSubmit),
    fields,
    append,
    remove,
    errors,
    isSubmitting,
  };
};
