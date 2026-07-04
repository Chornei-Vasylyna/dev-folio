import type { IconProps } from "@phosphor-icons/react";
import type { ComponentType } from "react";
import type { EducationFormData } from "@/features/portfolio/validation/educationSchema";
import type { ExperienceFormData } from "@/features/portfolio/validation/experienceSchema";

type ExperienceItem = ExperienceFormData["experience"][number];
type EducationItem = EducationFormData["education"][number];
export type TimelineItem = ExperienceItem | EducationItem;

export interface TimelineProps {
  items: TimelineItem[];
  title: string;
  icon: ComponentType<IconProps>;
}
