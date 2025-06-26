import { IProjectContent } from "@/types/project";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateImageArray = (
  projectName: string,
  options: {
    className?: string;
    startIndex?: number;
    endIndex: number;
  }
): IProjectContent[] => {
  const { className, startIndex = 1, endIndex } = options;

  const count = endIndex - startIndex + 1;

  return Array.from({ length: count }, (_, index) => ({
    type: "image",
    source: `${startIndex + index}.webp`,
    alt: `${projectName} - Image ${startIndex + index}`,
    className,
  }));
};
