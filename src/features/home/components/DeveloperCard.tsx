import { UserIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge/Badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import type { PublicProfiles } from "../actions/getPublicProfiles";

type DeveloperCardProps = {
  profile: PublicProfiles[number];
};

export const DeveloperCard = ({ profile }: DeveloperCardProps) => {
  const { user_id, full_name, specialty, skills, avatar } = profile;

  const maxSkillLength = 7;
  const visibleSkills = skills
    .filter((skill) => skill.length <= maxSkillLength)
    .slice(0, 3);
  const hiddenSkillsCount = skills.length - visibleSkills.length;

  return (
    <Link href={`resume/${user_id}`}>
      <Card className="pt-0 ring-0 shadow-[0_1px_2px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative aspect-video w-full bg-linear-to-br from-indigo-50 to-blue-50">
          {avatar ? (
            <Image
              src={avatar}
              alt={full_name}
              fill
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-indigo-400">
              <UserIcon className="h-10 w-10" />
            </div>
          )}{" "}
        </div>
        <div className="absolute h-40 bg-linear-to-br from-indigo-50 to-blue-50"></div>
        <CardHeader>
          <CardTitle>{full_name}</CardTitle>
          <CardDescription className="mb-2">{specialty}</CardDescription>
          <div className="flex h-6 flex-wrap content-start gap-2">
            {visibleSkills.map((skill, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: no other options
              <Badge key={i}>{skill}</Badge>
            ))}

            {hiddenSkillsCount > 0 && (
              <Badge variant="secondary">+{hiddenSkillsCount}</Badge>
            )}
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};
