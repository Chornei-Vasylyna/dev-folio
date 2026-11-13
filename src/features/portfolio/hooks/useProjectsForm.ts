import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  type ProjectsFormData,
  projectsSchema,
} from "@/features/portfolio/validation/projectsSchema";
import type { ProjectsData } from "@/lib/supabase/types";
import { upsertProjects } from "../actions/upsert/upsertProjects";
import { mapProjectsToForm } from "../mappers/projects.mapper";

export const useProjectsForm = (initialData: ProjectsData | null) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ProjectsFormData>({
    // biome-ignore lint/suspicious/noExplicitAny: Zod type mismatch
    resolver: zodResolver(projectsSchema as any),
    defaultValues: {
      projects: mapProjectsToForm(initialData),
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });

  const onSubmit = async (data: ProjectsFormData) => {
    try {
      await upsertProjects(data);
      reset(data);
      router.refresh();
      toast.success("Projects saved");
    } catch {
      toast.error("Failed to save projects");
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
    isDirty,
  };
};
