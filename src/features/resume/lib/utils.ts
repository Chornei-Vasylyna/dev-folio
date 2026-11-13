import type { TimelineItem } from "@/features/resume/components/timeline/Timeline.types";

export const getItemTitle = (item: TimelineItem): string => {
  return "position" in item ? item.position : item.specialty;
};

export const getItemOrganization = (item: TimelineItem): string => {
  return "company" in item ? item.company : item.institution;
};
