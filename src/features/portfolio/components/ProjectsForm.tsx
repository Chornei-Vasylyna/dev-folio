import { ImageSquareIcon, PlusIcon, TrashIcon } from "@phosphor-icons/react";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { PhotoUpload } from "@/components/PhotoUpload";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/InputField";
import { Separator } from "@/components/ui/Separator";
import type { ProjectsData } from "@/lib/supabase/types";
import { usePortfolioTab } from "../hooks/usePortfolioTab";
import { useProjectsForm } from "../hooks/useProjectsForm";

interface ProjectsFormProps {
  projectsData: ProjectsData | null;
}

export const ProjectsForm = ({ projectsData }: ProjectsFormProps) => {
  const {
    fields,
    control,
    register,
    handleSubmit,
    append,
    remove,
    errors,
    isSubmitting,
    isDirty,
  } = useProjectsForm(projectsData);

  const { setIsSubmitting, setHasUnsavedChanges } = usePortfolioTab();

  useEffect(() => {
    setIsSubmitting(isSubmitting);
  }, [isSubmitting, setIsSubmitting]);

  useEffect(() => {
    setHasUnsavedChanges(isDirty);
  }, [isDirty, setHasUnsavedChanges]);

  // Handlers
  const handleAddProject = () =>
    append({
      name: "",
      description: "",
      githubUrl: "",
      imageUrl: "",
      liveUrl: "",
    });

  return (
    <form id="projects" onSubmit={handleSubmit} className="space-y-4">
      {fields.map((_, i) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey:  there is no other option
          key={i}
          className="rounded-xl border border-border/60 p-4 space-y-4 bg-muted/20"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">
              Project {i + 1}
            </span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="hover:text-destructive hover:bg-transparent"
              onClick={() => remove(i)}
            >
              <TrashIcon className="h-4 w-4 " />
            </Button>
          </div>
          <div className="flex flex-col items-center gap-3 col-span-full">
            <Controller
              control={control}
              name={`projects.${i}.imageUrl`}
              render={({ field }) => (
                <PhotoUpload
                  label="Project photo"
                  dropzoneText="Click/Drop"
                  uploadAreaHeight={30}
                  uploadAreaWidth={60}
                  icon={ImageSquareIcon}
                  value={field.value || undefined}
                  onAvatarChange={field.onChange}
                  photoAltText="Project photo"
                />
              )}
            />
          </div>
          <Separator className="col-span-full my-2" />
          <InputField
            id="name"
            label="Name"
            error={errors.projects?.[i]?.name?.message}
            {...register(`projects.${i}.name`)}
          />
          <InputField
            id="description"
            label="Description"
            error={errors.projects?.[i]?.description?.message}
            {...register(`projects.${i}.description`)}
          />
          <InputField
            id="githubUrl"
            label="GitHub URL"
            placeholder="https://github.com/..."
            error={errors.projects?.[i]?.githubUrl?.message}
            {...register(`projects.${i}.githubUrl`)}
          />
          <InputField
            id="liveUrl"
            label="Live Demo URL"
            placeholder="https://..."
            error={errors.projects?.[i]?.liveUrl?.message}
            {...register(`projects.${i}.liveUrl`)}
          />
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        className="w-full border-dashed"
        onClick={handleAddProject}
      >
        <PlusIcon className="h-4 w-4 mr-2" /> Add project
      </Button>
    </form>
  );
};
