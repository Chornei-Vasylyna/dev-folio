"use client";

import { EntryListForm } from "@/features/portfolio/components/EntryListForm";
import { ProfileForm } from "@/features/portfolio/components/ProfileForm";
import { ProjectsForm } from "@/features/portfolio/components/ProjectsForm";
import { SkillsForm } from "@/features/portfolio/components/SkillsForm";
import { usePortfolioTab } from "@/features/portfolio/hooks/usePortfolioTab";

export default function Portfolio() {
  const { activeTab } = usePortfolioTab();

  return (
    <form className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
      {activeTab === "profile" && <ProfileForm />}
      {activeTab === "experience" && (
        <EntryListForm
          itemLabel="Position"
          items={[{}]}
          addLabel="Add position"
          primaryField={{
            id: "position",
            label: "Position",
            placeholder: "Frontend Developer",
          }}
          secondaryField={{
            id: "company",
            label: "Company",
            placeholder: "Acme Studio",
          }}
          periodField={{
            id: "period",
            label: "Period",
            placeholder: "e.g. Jan 2023 – Mar 2025",
          }}
          descriptionField={{
            id: "description",
            label: "Description",
            placeholder: "Describe your responsibilities and achievements...",
            rows: 4,
          }}
        />
      )}
      {activeTab === "education" && (
        <EntryListForm
          itemLabel="Education"
          items={[{}]}
          addLabel="Add education"
          primaryField={{
            id: "specialty",
            label: "Specialty",
            placeholder: "Computer Science",
          }}
          secondaryField={{
            id: "institution",
            label: "Educational institution",
            placeholder: "State University",
          }}
          periodField={{
            id: "period",
            label: "Period",
            placeholder: "e.g. Jan 2023 – Mar 2025",
          }}
          descriptionField={{
            id: "description",
            label: "Description",
            placeholder: "Add notes about your coursework, focus, or honors...",
            rows: 4,
          }}
        />
      )}
      {activeTab === "skills" && <SkillsForm />}
      {activeTab === "projects" && (
        <ProjectsForm
          items={[
            {
              name: "",
              description: "",
              github_url: "",
              image_url: "",
              live_url: "",
            },
          ]}
        />
      )}
    </form>
  );
}
