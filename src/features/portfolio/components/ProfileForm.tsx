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
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { PhotoUpload } from "@/components/PhotoUpload";
import { InputField } from "@/components/ui/InputField";
import { Separator } from "@/components/ui/Separator";
import { TextareaField } from "@/components/ui/TextareaField";
import { usePortfolioTab } from "@/features/portfolio/hooks/usePortfolioTab";
import { useProfileForm } from "@/features/portfolio/hooks/useProfileForm";

export const ProfileForm = () => {
  const { register, handleSubmit, control, errors, isSubmitting } =
    useProfileForm();
  const { setIsSubmitting } = usePortfolioTab();

  useEffect(() => {
    setIsSubmitting(isSubmitting);
  }, [isSubmitting, setIsSubmitting]);

  return (
    <form
      id="profile"
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2"
    >
      <div className="flex flex-col items-center gap-3 col-span-full">
        <Controller
          control={control}
          name="avatar"
          render={({ field }) => (
            <PhotoUpload
              value={field.value}
              onAvatarChange={field.onChange}
              label="Profile photo"
              dropzoneText="Click/Drop"
              uploadAreaHeight={28}
              uploadAreaWidth={28}
              icon={UploadSimpleIcon}
            />
          )}
        />
      </div>
      <Separator className="col-span-full my-2" />
      <InputField
        id="fullName"
        label="Full Name"
        placeholder="Oleg Petrenko"
        icon={UserIcon}
        error={errors.fullName?.message}
        {...register("fullName")}
      />
      <InputField
        id="specialty"
        label="Specialty"
        placeholder="Frontend Developer"
        icon={BriefcaseIcon}
        error={errors.specialty?.message}
        {...register("specialty")}
      />
      <div className="col-span-full">
        <InputField
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          icon={EnvelopeSimpleIcon}
          error={errors.email?.message}
          {...register("email")}
        />
      </div>
      <div className="col-span-full">
        <InputField
          id="phone"
          label="Phone Number"
          type="tel"
          placeholder="+380 ..."
          icon={PhoneIcon}
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>
      <InputField
        id="githubUrl"
        label="GitHub URL"
        type="url"
        placeholder="https://github.com/your-username"
        icon={GithubLogoIcon}
        error={errors.githubUrl?.message}
        {...register("githubUrl")}
      />
      <InputField
        id="linkedinUrl"
        label="LinkedIn URL"
        type="url"
        placeholder="https://linkedin.com/in/your-profile"
        icon={LinkedinLogoIcon}
        error={errors.linkedinUrl?.message}
        {...register("linkedinUrl")}
      />
      <div className="col-span-full">
        <InputField
          id="telegramUrl"
          label="Telegram URL"
          type="text"
          placeholder="https://t.me/your_username"
          icon={TelegramLogoIcon}
          error={errors.telegramUrl?.message}
          {...register("telegramUrl")}
        />
      </div>
      <div className="col-span-full">
        <TextareaField
          id="bio"
          label="Biography"
          placeholder="Tell us about yourself..."
          rows={4}
          error={errors.bio?.message}
          {...register("bio")}
        />
      </div>
    </form>
  );
};
