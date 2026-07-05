"use client";

import { EducationForm } from "@/features/portfolio/components/EducationForm";
import { ExperienceForm } from "@/features/portfolio/components/ExperienceForm";
import { ProfileForm } from "@/features/portfolio/components/ProfileForm";
import { ProjectsForm } from "@/features/portfolio/components/ProjectsForm";
import { SkillsForm } from "@/features/portfolio/components/SkillsForm";
import type {
  EducationData,
  ExperienceData,
  ProfileData,
  ProjectsData,
  SkillsData,
} from "@/lib/supabase/types";
import { usePortfolioTab } from "../hooks/usePortfolioTab";

type FormsWrapperProps = {
  profileData: ProfileData | null;
  experienceData: ExperienceData | null;
  educationData: EducationData | null;
  skillsData: SkillsData | null;
  projectsData: ProjectsData | null;
};

export const FormsWrapper = ({
  profileData,
  experienceData,
  educationData,
  skillsData,
  projectsData,
}: FormsWrapperProps) => {
  const { activeTab } = usePortfolioTab();

  return (
    <>
      {activeTab === "profile" && <ProfileForm profileData={profileData} />}
      {activeTab === "experience" && (
        <ExperienceForm experienceData={experienceData} />
      )}
      {activeTab === "education" && (
        <EducationForm educationData={educationData} />
      )}
      {activeTab === "skills" && <SkillsForm skillsData={skillsData} />}
      {activeTab === "projects" && <ProjectsForm projectsData={projectsData} />}
    </>
  );
};
