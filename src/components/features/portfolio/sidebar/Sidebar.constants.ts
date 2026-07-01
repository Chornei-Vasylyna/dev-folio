import {
  BriefcaseIcon,
  FolderSimpleStarIcon,
  GraduationCapIcon,
  UserIcon,
  WrenchIcon,
} from "@phosphor-icons/react";

export const tabs = [
  { id: "profile", label: "Profile", icon: UserIcon },
  { id: "experience", label: "Experience", icon: BriefcaseIcon },
  { id: "education", label: "Education", icon: GraduationCapIcon },
  { id: "skills", label: "Skills", icon: WrenchIcon },
  { id: "projects", label: "Projects", icon: FolderSimpleStarIcon },
] as const;
