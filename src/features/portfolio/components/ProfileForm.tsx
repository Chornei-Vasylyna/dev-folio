"use client";

import {
  BriefcaseIcon,
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  PhoneIcon,
  TelegramLogoIcon,
  UploadSimpleIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { PhotoUpload } from "@/components/PhotoUpload";
import { FieldLabel } from "@/components/ui/field";
import { InputField } from "@/components/ui/InputField";
import { Separator } from "@/components/ui/Separator";
import { Textarea } from "@/components/ui/Textarea";

export const ProfileForm = () => {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-5">
      <div className="flex flex-col items-center gap-3 col-span-full">
        <PhotoUpload
          label="Profile photo"
          dropzoneText="Click/Drop"
          uploadAreaHeight={28}
          uploadAreaWidth={28}
          icon={UploadSimpleIcon}
        />
      </div>
      <Separator className="col-span-full my-2" />
      <InputField
        id="fullName"
        label="Full Name"
        placeholder="Oleg Petrenko"
        icon={UserIcon}
      />
      <InputField
        id="specialty"
        label="Specialty"
        placeholder="Frontend Developer"
        icon={BriefcaseIcon}
      />
      <div className="col-span-full">
        <InputField
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          icon={EnvelopeSimpleIcon}
        />
      </div>
      <div className="col-span-full">
        <InputField
          id="phone"
          label="Phone Number"
          type="tel"
          placeholder="+380 ..."
          icon={PhoneIcon}
        />
      </div>
      <InputField
        id="githubUrl"
        label="GitHub URL"
        type="url"
        placeholder="https://github.com/your-username"
        icon={GithubLogoIcon}
      />
      <InputField
        id="linkedinUrl"
        label="LinkedIn URL"
        type="url"
        placeholder="https://linkedin.com/in/your-profile"
        icon={LinkedinLogoIcon}
      />
      <div className="col-span-full">
        <InputField
          id="telegramUrl"
          label="Telegram URL"
          type="text"
          placeholder="https://t.me/your_username"
          icon={TelegramLogoIcon}
        />
      </div>
      <div className="flex flex-col gap-3 col-span-full">
        <FieldLabel htmlFor="bio">Biography</FieldLabel>
        <Textarea id="bio" placeholder="Tell us about yourself..." rows={4} />
      </div>
    </div>
  );
};
