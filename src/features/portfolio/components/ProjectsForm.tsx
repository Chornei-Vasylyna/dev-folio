import { ImageSquareIcon, PlusIcon, TrashIcon } from "@phosphor-icons/react";
import { PhotoUpload } from "@/components/PhotoUpload";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/InputField";

interface ProjectsFormProps {
  items: [
    {
      name: "";
      description: "";
      github_url: "";
      image_url: "";
      live_url: "";
    },
  ];
}

export const ProjectsForm = ({ items }: ProjectsFormProps) => {
  return (
    <form className="space-y-4">
      {items.map((p, i) => (
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
              variant="ghost"
              size="icon"
              className="hover:text-destructive hover:bg-transparent"
            >
              <TrashIcon className="h-4 w-4 " />
            </Button>
          </div>
          <InputField id="name" label="Name" />
          <InputField id="description" label="Description" />
          <InputField
            id="githubUrl"
            label="GitHub URL"
            placeholder="https://github.com/..."
          />

          <PhotoUpload
            label="Project picture"
            dropzoneText="Click to upload or drag and drop"
            uploadAreaWidth={60}
            uploadAreaHeight={30}
            icon={ImageSquareIcon}
          />
          <InputField
            id="liveDemoUrl"
            label="Live Demo URL"
            placeholder="https://..."
          />
        </div>
      ))}
      <Button variant="outline" className="w-full border-dashed">
        <PlusIcon className="h-4 w-4 mr-2" /> Add project
      </Button>
    </form>
  );
};
