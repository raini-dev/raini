export type TDifficulty = "n/a" | "novice" | "elementary" | "intermediate" | "advanced";

export interface IEventMetadata {
  title: string;
  slug: string;
  authors: string[];
  videoId: string;
  language: string;
  tags: string[];
  start: string;
  end: string;
  timezone?: string;
  location: string;
  theory: TDifficulty;
  practice: TDifficulty;
}

export interface IEvent {
  frontmatter: IEventMetadata;
  body?: string;
  excerpt?: string;
}
