"use client";

import { UploadSimpleIcon } from "@phosphor-icons/react";
import { PhotoUpload } from "./PhotoUpload";

export const ProfileForm = () => {
  return (
    <div className="flex flex-col items-center gap-3 col-span-full">
      <PhotoUpload
        label="Profile photo"
        dropzoneText="Click/Drop"
        uploadAreaHeight={28}
        uploadAreaWidth={28}
        icon={UploadSimpleIcon}
      />
    </div>
  );
};
