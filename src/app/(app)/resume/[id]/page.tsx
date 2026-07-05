import {
  BriefcaseIcon,
  EnvelopeSimpleIcon,
  GraduationCapIcon,
  PhoneIcon,
  TelegramLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { getEducation } from "@/features/portfolio/actions/get/getEducation";
import { getExperience } from "@/features/portfolio/actions/get/getExperience";
import { getProfile } from "@/features/portfolio/actions/get/getProfile";
import { getProjects } from "@/features/portfolio/actions/get/getProjects";
import { getSkills } from "@/features/portfolio/actions/get/getSkills";
import { Hero } from "@/features/resume/components/hero/Hero";
import Projects from "@/features/resume/components/Projects";
import { SideNav } from "@/features/resume/components/SideNav";
import { Timeline } from "@/features/resume/components/timeline";
import { mapResume } from "@/features/resume/mappers/mapResume.mapper";

interface ResumeProps {
  params: Promise<{ id: string }>;
}

export default async function Resume({ params }: ResumeProps) {
  const { id } = await params;
  
  const profileObj = await getProfile(id);
  const experienceArr = await getExperience(id);
  const educationArr = await getEducation(id);
  const skillsArr = await getSkills(id);
  const projectsArr = await getProjects(id);

  if (!profileObj) {
    notFound();
  }

  const resume = mapResume({
    profile: profileObj,
    experience: experienceArr,
    education: educationArr,
    skills: skillsArr,
    projects: projectsArr,
  });

  const {
    bio,
    experience,
    education,
    projects,
    email,
    phone,
    telegramUrl,
    skills,
  } = resume;

  return (
    <div className="container px-4 py-8">
      <Hero resume={resume} />
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_120px] gap-14">
        <div className="space-y-12">
          {bio && (
            <section id="about" className="scroll-mt-16">
              <h2 className="mb-4 text-xl font-bold text-foreground">
                About me
              </h2>
              <p className="text-muted-foreground leading-relaxed">{bio}</p>
            </section>
          )}

          {experience && experience.length > 0 && (
            <div id="experience" className="scroll-mt-16">
              <Timeline
                items={experience}
                title="Experience"
                icon={BriefcaseIcon}
              />
            </div>
          )}

          {education && education.length > 0 && (
            <div id="education" className="scroll-mt-16">
              <Timeline
                items={education}
                title="Education"
                icon={GraduationCapIcon}
              />
            </div>
          )}

          {skills.length > 0 && (
            <section id="skills" className="scroll-mt-16">
              <h2 className="mb-4 text-xl font-bold text-foreground">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((s, i) => (
                  <span
                    // biome-ignore lint/suspicious/noArrayIndexKey: no other option
                    key={i}
                    className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </section>
          )}
          <section id="projects" className="scroll-mt-16">
            <Projects items={projects} />
          </section>

          {(email || phone || telegramUrl) && (
            <section id="contact" className="scroll-mt-16 mb-6">
              <h2 className="mb-4 text-xl font-bold text-foreground">
                Contacts
              </h2>
              <div className="inline-flex flex-col gap-3 ">
                {email && (
                  <Link
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-indigo-600 transition-colors break-all"
                  >
                    <EnvelopeSimpleIcon className="h-4 w-4 shrink-0" /> {email}
                  </Link>
                )}
                {phone && (
                  <Link
                    href={`tel:${phone}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-indigo-600 transition-colors"
                  >
                    <PhoneIcon className="h-4 w-4 shrink-0" /> {phone}
                  </Link>
                )}
                {telegramUrl && (
                  <Link
                    href={telegramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-indigo-600 transition-colors"
                  >
                    <TelegramLogoIcon className="h-4 w-4 shrink-0" /> Telegram
                  </Link>
                )}
              </div>
            </section>
          )}
        </div>
        <SideNav resume={resume} />
      </div>
      <Footer />
    </div>
  );
}
