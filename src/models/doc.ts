import { Mdx } from "../../graphql-types";
import { pipeExtend } from "@raini/pipes";
import { maybeStringToString } from "../utils";

export interface IDoc {
  title: string;
  slug: string;
  body: string;
  excerpt: string;
}

const mdxToEvent = (ctx: Partial<Mdx>): IDoc => {
  const doc = {
    ...ctx,
    ...ctx.frontmatter,
  };

  delete doc.frontmatter;

  return (doc as unknown) as IDoc;
};

export const DocModel = {
  of: (doc: Partial<Mdx> = {}): IDoc =>
    pipeExtend(maybeStringToString<IDoc>("title", "Untitled"))
      .pipeExtend(maybeStringToString<IDoc>("slug"))
      .pipeExtend(maybeStringToString<IDoc>("body"))
      .pipeExtend(maybeStringToString<IDoc>("excerpt"))
      .process(() => mdxToEvent(doc)),
  batch: (docs: Partial<Mdx>[] = []): IDoc[] => docs.map(DocModel.of),
};
