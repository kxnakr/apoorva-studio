"use client";

import { Drawer } from "vaul";
import { useDrawer } from "@/hooks/useDrawer";
import Image from "next/image";
import { IProjectContent } from "@/types/project";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import MuxVideo from "@mux/mux-video/react";

const ProjectContentRenderer = ({
  item,
  id,
  isDrawerOpen = true,
}: {
  item: IProjectContent;
  id: string;
  isDrawerOpen?: boolean;
}) => {
  switch (item.type) {
    case "video":
      return (
        <div
          className={cn(
            "relative w-full overflow-hidden col-span-2",
            item?.className
          )}
        >
          <video
            playsInline
            preload="auto"
            autoPlay={isDrawerOpen}
            loop
            muted
            className="w-full h-auto object-cover"
            poster={item.alt}
          >
            <source src={`/projects/${id}/${item.source}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );

    case "mux-video":
      return (
        <div
          className={cn(
            "relative w-full aspect-video overflow-hidden col-span-2",
            item?.className
          )}
        >
          <MuxVideo
            playbackId={item.source}
            loop
            muted
            autoplay={isDrawerOpen}
            metadata={{
              video_title: item.alt || "Project video",
              viewer_user_id: "project-viewer",
            }}
            className="w-full h-full object-cover"
          />
        </div>
      );
    case "image":
      return (
        <div className={cn("relative w-full overflow-hidden", item?.className)}>
          <Image
            src={`/projects/${id}/${item.source}`}
            alt={item.alt || "Project image"}
            // height={1920}
            // width={1080}
            // quality={100}
            unoptimized
            className="object-cover w-full h-full"
            priority={isDrawerOpen}
          />
        </div>
      );
    default:
      return null;
  }
};

export const ProjectDrawer = () => {
  const { isOpen, projectData, closeDrawer } = useDrawer();
  const [isFullyOpen, setIsFullyOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsFullyOpen(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setIsFullyOpen(false);
    }
  }, [isOpen]);

  if (!projectData) return null;

  return (
    <Drawer.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) closeDrawer();
      }}
      shouldScaleBackground
      setBackgroundColorOnScale={false}
    >
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-md" />
        <Drawer.Content className="fixed inset-x-0 bottom-0 flex h-full max-w-5xl mx-auto flex-col px-2">
          <div className="mx-auto my-7 h-1.5 w-24 shrink-0 rounded-full bg-gray-300" />
          <div className="flex-1 overflow-y-auto relative no-scrollbar">
            <VisuallyHidden>
              <Drawer.Title>{projectData.title}</Drawer.Title>
            </VisuallyHidden>

            <div className="mx-auto mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2">
                {projectData.content.map((item, index) => {
                  return (
                    <ProjectContentRenderer
                      key={`${projectData.id}-${index}`}
                      item={item}
                      id={projectData.id}
                      isDrawerOpen={isFullyOpen}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
