import { Mdx } from "../../graphql-types";
import { pipeExtend } from "@raini/pipes";
import { flattenFrontMatter, maybeStringToArray, maybeStringToString, stringToDifficulty } from "../utils";

export type TDifficulty = "n/a" | "novice" | "elementary" | "intermediate" | "advanced";

export interface IEvent {
  title: string;
  slug: string;
  authors: string[];
  videoId: string;
  language: string;
  tags: string[];
  start: string;
  end: string;
  timezone: string;
  location: string;
  theory: TDifficulty;
  practice: TDifficulty;
  body: string;
  excerpt: string;
}

export const EventModel = {
  of: (event: Partial<Mdx> = {}): IEvent =>
    pipeExtend(maybeStringToArray<IEvent>("authors"))
      .pipeExtend(maybeStringToArray<IEvent>("tags"))
      .pipeExtend(maybeStringToString<IEvent>("title", "Untitled"))
      .pipeExtend(maybeStringToString<IEvent>("slug"))
      .pipeExtend(maybeStringToString<IEvent>("videoId"))
      .pipeExtend(maybeStringToString<IEvent>("language", "en"))
      .pipeExtend(maybeStringToString<IEvent>("start", new Date().toISOString()))
      .pipeExtend(maybeStringToString<IEvent>("end", new Date().toISOString()))
      .pipeExtend(maybeStringToString<IEvent>("timezone", "UTC"))
      .pipeExtend(maybeStringToString<IEvent>("location", "online"))
      .pipeExtend(maybeStringToString<IEvent>("body"))
      .pipeExtend(maybeStringToString<IEvent>("excerpt"))
      .pipeExtend(maybeStringToString<IEvent>("theory"))
      .pipeExtend(stringToDifficulty<IEvent>("theory"))
      .pipeExtend(maybeStringToString<IEvent>("practice"))
      .pipeExtend(stringToDifficulty<IEvent>("practice"))
      .process(() => flattenFrontMatter<IEvent>(event)),
  batch: (events: Partial<Mdx>[] = []): IEvent[] => events.map(EventModel.of),
};
