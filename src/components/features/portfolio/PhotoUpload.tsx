"use client";

import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";
import type { IconProps } from "@phosphor-icons/react";
import type {
  OutputFileEntry,
  UploadCtxProvider,
} from "@uploadcare/react-uploader";
import Image from "next/image";
import { type ComponentType, type DragEvent, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/Label";
import { cn } from "@/lib/utils";
import { env } from "@/lib/validation/envSchems";

interface PhotoUploadProps {
  label: string;
  dropzoneText: string;
  uploadAreaWidth: number;
  uploadAreaHeight: number;
  icon: ComponentType<IconProps>;
}

export const PhotoUpload = ({
  label,
  dropzoneText,
  uploadAreaWidth,
  uploadAreaHeight,
  icon: Icon,
}: PhotoUploadProps) => {
  const uploaderRef = useRef<UploadCtxProvider | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "uploading" | "success">(
    "idle",
  );
  const [isDragging, setIsDragging] = useState(false);

  // Handlers
  const handleUpload = () => {
    uploaderRef.current?.getAPI().initFlow();
  };

  const handleUploadChange = (e: { allEntries: OutputFileEntry[] }) => {
    const entry = e.allEntries.find((f) => f.status === "success");
    if (entry?.cdnUrl) {
      setFileUrl(entry.cdnUrl);
      setStatus("success");
    }

    if (e.allEntries.length === 0) {
      setFileUrl(null);
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
        className={cn(
          "relative rounded-full overflow-hidden cursor-pointer border-2 border-dashed border-border transition-all duration-250 hover:border-indigo-400 hover:bg-indigo-50/40 flex items-center justify-center ",
          isDragging && "border-indigo-400 bg-indigo-50/40",
          `h-${uploadAreaHeight} w-${uploadAreaWidth}`,
        )}
      >
        {fileUrl ? (
          <Image
            src={fileUrl}
            alt="User avatar"
            fill
            className="object-cover"
          />
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
