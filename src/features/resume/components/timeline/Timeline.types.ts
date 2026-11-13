import type { IconProps } from "@phosphor-icons/react";
import type { ComponentType } from "react";
import type { EducationItem, ExperienceItem } from "@/lib/supabase/types";

export type TimelineItem = ExperienceItem | EducationItem;

export interface TimelineProps {
  items: TimelineItem[];
  title: string;
  icon: ComponentType<IconProps>;
}
