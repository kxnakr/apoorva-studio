export type IProjectContentType = "video" | "image";

export interface IProjectContent {
  type: IProjectContentType;
  source: string;
  alt?: string;
  className?: string;
}

export interface IProject {
  id: string;
  title: string;
  content: IProjectContent[];
}
