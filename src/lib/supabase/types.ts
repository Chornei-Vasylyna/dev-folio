import type { Database } from "./database.types";

export type ProfileData = Database["public"]["Tables"]["profiles"]["Row"];
export type ExperienceData = Database["public"]["Tables"]["experiences"]["Row"][];
export type EducationData = Database["public"]["Tables"]["educations"]["Row"][];
export type SkillsData = Database["public"]["Tables"]["skills"]["Row"][];
export type ProjectsData = Database["public"]["Tables"]["projects"]["Row"][];

