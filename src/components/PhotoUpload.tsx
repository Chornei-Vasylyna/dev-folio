"use client";

import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";
import type { IconProps } from "@phosphor-icons/react";
import { PencilSimpleIcon } from "@phosphor-icons/react";
import type {
  OutputFileEntry,
  UploadCtxProvider,
} from "@uploadcare/react-uploader";
import Image from "next/image";
import { type ComponentType, type DragEvent, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/Label";
import { cn } from "@/lib/utils";
import { env } from "@/lib/validation/envSchema";

interface PhotoUploadProps {
  label: string;
  dropzoneText: string;
  uploadAreaWidth: number;
  uploadAreaHeight: number;
  icon: ComponentType<IconProps>;
  photoAltText: string;
  value?: string;
  onAvatarChange: (url: string | null) => void;
}

export const PhotoUpload = ({
  label,
  dropzoneText,
  uploadAreaWidth,
  uploadAreaHeight,
  icon: Icon,
  photoAltText,
  value,
  onAvatarChange,
}: PhotoUploadProps) => {
  const uploaderRef = useRef<UploadCtxProvider | null>(null);

  // States
  const [status, setStatus] = useState<"idle" | "uploading" | "success">(
    "idle",
  );
  const [isDragging, setIsDragging] = useState(false);

  // Constants
  const uploadAreaStyle = {
    width: `${uploadAreaWidth * 0.25}rem`,
    height: `${uploadAreaHeight * 0.25}rem`,
  };
  const roundedClass =
    uploadAreaWidth === uploadAreaHeight ? "rounded-full" : "rounded-md";

  // Handlers
  const handleUpload = () => {
    uploaderRef.current?.getAPI().initFlow();
  };

  const handleUploadChange = (e: { allEntries: OutputFileEntry[] }) => {
    const entry = e.allEntries.find((f) => f.status === "success");
    if (entry?.cdnUrl) {
      onAvatarChange(entry.cdnUrl);
      setStatus("success");
    }

    if (e.allEntries.length === 0) {
      onAvatarChange(null);
      setStatus("idle");
    }
  };

  const handleDragOver = (e: DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e: DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      setStatus("uploading");
      uploaderRef.current?.getAPI().addFileFromObject(file);
    }
  };

  return (
    <>
      <Label className="font-medium">{label}</Label>
      <Button
        variant="ghost"
        onClick={handleUpload}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={uploadAreaStyle}
        className={cn(
          "group relative overflow-hidden cursor-pointer border-2 border-dashed border-border transition-all duration-250 hover:border-indigo-400 hover:bg-indigo-50/40 flex items-center justify-center p-0",
          roundedClass,
          isDragging && "border-indigo-400 bg-indigo-50/40",
          value && "border-0 hover:border-0",
        )}
      >
        {value ? (
          <>
            <Image
              src={value}
              alt={photoAltText}
              fill
              className="object-cover"
            />
            <div
              className={cn(
                "absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/50 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100",
                roundedClass,
              )}
            >
              <PencilSimpleIcon className="w-5 h-5" />
              <p className="text-xs font-medium">Edit photo</p>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-muted-foreground">
            <Icon className="w-5 h-5 mb-1 " />
            <p className="text-sm">
              {status === "uploading" ? "Uploading.." : dropzoneText}
            </p>
          </div>
        )}
      </Button>
      <FileUploaderRegular
        apiRef={uploaderRef}
        pubkey={env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY}
        onChange={handleUploadChange}
        multiple={false}
        imgOnly
        className="sr-only"
      />
    </>
  );
};
