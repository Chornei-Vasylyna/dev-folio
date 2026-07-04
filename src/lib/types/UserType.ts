import type { EducationFormData } from "@/features/portfolio/validation/educationSchema";
import type { ExperienceFormData } from "@/features/portfolio/validation/experienceSchema";
import type { ProjectsFormData } from "@/features/portfolio/validation/projectsSchema";

type Experience = ExperienceFormData["experience"];
type Education = EducationFormData["education"];
export type Projects = ProjectsFormData["projects"];

export type User = {
  avatar: string;
  fullName: string;
  specialty: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
  telegramUrl: string;
  bio: string;
  skills: string;
  experience: Experience;
  education: Education;
  projects: Projects;
};
