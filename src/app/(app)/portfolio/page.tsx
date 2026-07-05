import { getEducation } from "@/features/portfolio/actions/GET/getEducation";
import { getExperience } from "@/features/portfolio/actions/GET/getExperience";
import { getProfile } from "@/features/portfolio/actions/GET/getProfile";
import { getProjects } from "@/features/portfolio/actions/GET/getProjects";
import { getSkills } from "@/features/portfolio/actions/GET/getSkills";
import { FormsWrapper } from "@/features/portfolio/components/FormsWrapper";

export default async function Portfolio() {
  const profileData = await getProfile();
  const experienceData = await getExperience();
  const educationData = await getEducation();
  const skillsData = await getSkills();
  const projectsData = await getProjects();

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
      <FormsWrapper
        profileData={profileData}
        experienceData={experienceData}
        educationData={educationData}
        skillsData={skillsData}
        projectsData={projectsData}
      />
    </div>
  );
}
