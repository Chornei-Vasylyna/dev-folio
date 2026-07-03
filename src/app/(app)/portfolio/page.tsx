"use client";

import { EducationForm } from "@/features/portfolio/components/EducationForm";
import { ExperienceForm } from "@/features/portfolio/components/ExperienceForm";
import { ProfileForm } from "@/features/portfolio/components/ProfileForm";
import { ProjectsForm } from "@/features/portfolio/components/ProjectsForm";
import { SkillsForm } from "@/features/portfolio/components/SkillsForm";
import { usePortfolioTab } from "@/features/portfolio/hooks/usePortfolioTab";

export default function Portfolio() {
  const { activeTab } = usePortfolioTab();

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
      {activeTab === "profile" && <ProfileForm />}
      {activeTab === "experience" && <ExperienceForm />}
      {activeTab === "education" && <EducationForm />}
      {activeTab === "skills" && <SkillsForm />}
      {activeTab === "projects" && <ProjectsForm />}
    </div>
  );
}
