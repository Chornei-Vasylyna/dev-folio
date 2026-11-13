import type {
  EducationData,
  ExperienceData,
  ProfileData,
  ProjectsData,
  SkillsData,
} from "@/lib/supabase/types";

interface MapResumeParams {
  profile: ProfileData;
  experience: ExperienceData;
  education: EducationData;
  skills: SkillsData;
  projects: ProjectsData;
}

export const mapResume = ({
  profile,
  experience,
  education,
  skills,
  projects,
}: MapResumeParams) => ({
  avatar: profile.avatar,
  fullName: profile.full_name,
  specialty: profile.specialty,
  email: profile.email,
  phone: profile.phone,
  githubUrl: profile.github_url,
  linkedinUrl: profile.linkedin_url,
  telegramUrl: profile.telegram_url,
  bio: profile.bio,

  skills,

  experience,
  education,
  projects,
});
