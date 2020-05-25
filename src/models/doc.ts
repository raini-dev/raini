import { Mdx } from "../../graphql-types";
import { pipeExtend } from "@raini/pipes";
import { flattenFrontMatter, maybeStringToString } from "../utils";

export interface IDoc {
  title: string;
  slug: string;
  body: string;
  excerpt: string;
}

export const DocModel = {
  of: (doc: Partial<Mdx> = {}): IDoc =>
    pipeExtend(maybeStringToString<IDoc>("title", "Untitled"))
      .pipeExtend(maybeStringToString<IDoc>("slug"))
      .pipeExtend(maybeStringToString<IDoc>("body"))
      .pipeExtend(maybeStringToString<IDoc>("excerpt"))
      .process(() => flattenFrontMatter<IDoc>(doc)),
  batch: (docs: Partial<Mdx>[] = []): IDoc[] => docs.map(DocModel.of),
};
