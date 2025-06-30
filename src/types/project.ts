export type IProjectContentType = "video" | "image" | "mux-video";

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
