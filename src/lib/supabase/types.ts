import type { mapResume } from "@/features/resume/mappers/mapResume.mapper";
import type { Database } from "./database.types";

export type ExperienceItem = Database["public"]["Tables"]["experiences"]["Row"];
export type EducationItem = Database["public"]["Tables"]["educations"]["Row"];

export type ProfileData = Database["public"]["Tables"]["profiles"]["Row"];
export type ExperienceData =
  Database["public"]["Tables"]["experiences"]["Row"][];
export type EducationData = Database["public"]["Tables"]["educations"]["Row"][];
export type SkillsData = Database["public"]["Tables"]["skills"]["Row"][];
export type ProjectsData = Database["public"]["Tables"]["projects"]["Row"][];
export type ResumeData = ReturnType<typeof mapResume>;
