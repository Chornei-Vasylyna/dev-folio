"use client";

import {
  DownloadIcon,
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  PhoneIcon,
  TelegramLogoIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ResumePDF } from "@/features/resume/pdf/ResumePDF";
import type { ResumeData } from "@/lib/supabase/types";

interface HeroProps {
  resume: ResumeData;
}

export const Hero = ({ resume }: HeroProps) => {
  const {
    avatar,
    fullName,
    specialty,
    email,
    phone,
    telegramUrl,
    githubUrl,
    linkedinUrl,
  } = resume;

  const safeName = fullName.replace(/[<>:"/\\|?*]/g, "_").replace(/\s+/g, "_");
  const fileName = `${safeName}_resume.pdf`;

  const socials = [
    {
      show: githubUrl,
      href: githubUrl,
      icon: GithubLogoIcon,
      label: "GitHub",
    },
    {
      show: linkedinUrl,
      href: linkedinUrl,
      icon: LinkedinLogoIcon,
      label: "LinkedIn",
    },
    {
      show: telegramUrl,
      href: telegramUrl,
      icon: TelegramLogoIcon,
      label: "Telegram",
    },
  ].filter((s) => s.show);

  // Handlers
  const handleDownload = async () => {
    const blob = await pdf(<ResumePDF resume={resume} />).toBlob();

    saveAs(blob, fileName);
  };

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/20 bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 px-4 py-8 sm:px-6 sm:py-10 md:py-12 text-white">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[32px_32px]" />

      <div className="relative flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        <div className="relative shrink-0">
          <div className="absolute inset-0 -m-1.5 rounded-full bg-linear-to-br from-indigo-400 to-blue-500 opacity-60 blur-md " />
          <Avatar className="relative h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 border-4 border-white/20 ring-1 ring-white/10">
            {avatar ? (
              <AvatarImage
                src={avatar}
                alt={fullName}
                className="object-cover"
              />
            ) : (
              <AvatarFallback className="bg-white/10">
                <UserIcon className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white/60" />
              </AvatarFallback>
            )}
          </Avatar>

          <Badge className="absolute -bottom-1 left-3 sm:left-3.5 md:left-5.5 max-w-19 sm:max-w-22 gap-1 rounded-full bg-emerald-500 px-1.5 sm:px-2 py-0.5 sm:py-1 text-center text-[9px] sm:text-[10px] font-semibold leading-tight text-white shadow-md hover:bg-emerald-500 line-clamp-2 whitespace-normal">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" /> Open
            to Work
          </Badge>
        </div>

        <div className="flex-1 text-center md:text-left">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-300 ">
            {specialty}
          </p>
          <h1 className="mt-1 text-3xl md:text-4xl font-bold tracking-tight">
            {fullName}
          </h1>

          <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1.5 text-sm text-white/70">
            {email && (
              <Link
                href={`mailto:${email}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <EnvelopeIcon className="h-4 w-4" /> {email}
              </Link>
            )}
            {phone && (
              <span className="inline-flex items-center gap-1.5">
                <PhoneIcon className="h-4 w-4" /> {phone}
              </span>
            )}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-3">
            {socials.map((s) => (
              <Button
                key={s.label}
                asChild
                variant="secondary"
                size="icon"
                className="h-10 w-10 rounded-xl bg-white/10 ring-1 ring-white/10 backdrop-blur hover:bg-white/20 text-white"
              >
                <Link
                  // biome-ignore lint/style/noNonNullAssertion: Safe here—TypeScript just can't infer it
                  href={s.href!}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                >
                  <s.icon className="h-6 w-6" />
                </Link>
              </Button>
            ))}
            <Button
              onClick={handleDownload}
              className="gap-2 rounded-xl bg-linear-to-r from-indigo-500 to-blue-500 px-5 py-2.5 text-sm font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:from-indigo-400 hover:to-blue-400 transition-[--tw-gradient-from,--tw-gradient-to] duration-250"
            >
              <DownloadIcon className="h-4 w-4" /> Download PDF
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
