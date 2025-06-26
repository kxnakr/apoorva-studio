import { useDrawer } from "@/hooks/useDrawer";
import { generateImageArray } from "@/lib/utils";
import Image from "next/image";

const threeDProjectsTitle =
  "Modern Comfort | Interior Realistic 3D Visualization";
const systemThinkingTitle =
  "Library System Optimization | Design & System Thinking";
const twoDProjectsTitle = "Rental Website Illustrations | 2D Illustrations";

export const GridThree = () => {
  const { openDrawer } = useDrawer();
  return (
    <div className="flex flex-col lg:grid grid-cols-12 grid-rows-9 gap-16 lg:gap-4 lg:max-h-[48rem]">
      <div
        className="col-span-4 row-span-9 relative cursor-pointer space-y-4"
        onClick={() =>
          openDrawer({
            id: "3d-visualization",
            title: threeDProjectsTitle,
            content: [
              ...generateImageArray("Interior Realistic 3D Visualization", {
                className: "col-span-2",
                endIndex: 9,
              }),
            ],
          })
        }
      >
        <div className="overflow-hidden h-full">
          <Image
            src="/projects/3d-visualization/thumbnail.webp"
            alt={threeDProjectsTitle}
            width={475}
            height={766}
            quality={100}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="lg:absolute -bottom-18 text-lg lg:max-w-sm">
          {threeDProjectsTitle}
        </div>
      </div>

      <div
        className="col-span-8 row-span-5 col-start-5 relative cursor-pointer space-y-4"
        onClick={() =>
          openDrawer({
            id: "system-thinking",
            title: systemThinkingTitle,
            content: [
              ...generateImageArray("Design & System Thinking", {
                className: "col-span-2",
                endIndex: 40,
              }),
            ],
          })
        }
      >
        <div className="overflow-hidden h-full">
          <Image
            src="/projects/system-thinking/thumbnail.webp"
            alt={systemThinkingTitle}
            width={755}
            height={419}
            quality={100}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="lg:absolute -bottom-18 text-lg lg:max-w-[19rem]">
          {systemThinkingTitle}
        </div>
      </div>

      <div
        className="col-span-4 row-span-4 col-start-9 row-start-6 relative cursor-pointer space-y-4"
        onClick={() =>
          openDrawer({
            id: "illustrations",
            title: twoDProjectsTitle,
            content: [
              ...generateImageArray("2D Illustrations", {
                className: "col-span-2",
                endIndex: 8,
              }),
            ],
          })
        }
      >
        <div className="overflow-hidden h-full">
          <Image
            src="/projects/illustrations/thumbnail.webp"
            alt={twoDProjectsTitle}
            width={330}
            height={330}
            quality={100}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="lg:absolute -bottom-18 text-lg lg:max-w-[19rem]">
          {twoDProjectsTitle}
        </div>
      </div>
    </div>
  );
};
