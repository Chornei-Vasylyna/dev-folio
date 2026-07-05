import { redirect } from "next/navigation";
import { LINKS } from "@/constants";
import { getEducation } from "@/features/portfolio/actions/get/getEducation";
import { getExperience } from "@/features/portfolio/actions/get/getExperience";
import { getProfile } from "@/features/portfolio/actions/get/getProfile";
import { getProjects } from "@/features/portfolio/actions/get/getProjects";
import { getSkills } from "@/features/portfolio/actions/get/getSkills";
import { FormsWrapper } from "@/features/portfolio/components/FormsWrapper";
import { createClient } from "@/lib/supabase/server";

export default async function Portfolio() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(LINKS.login);
  }

  const profileData = await getProfile(user.id);
  const experienceData = await getExperience(user.id);
  const educationData = await getEducation(user.id);
  const skillsData = await getSkills(user.id);
  const projectsData = await getProjects(user.id);

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
