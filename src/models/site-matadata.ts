import { Maybe, SiteSiteMetadata } from "../../graphql-types";
import { pipeExtend } from "@raini/pipes";
import { maybeStringToString } from "../utils";

export interface ISiteMetadata {
  siteUrl: string;
  title: string;
  description: string;
}

export const SiteMetadataModel = {
  of: (siteMeta: Maybe<SiteSiteMetadata> = {}): ISiteMetadata =>
    pipeExtend<any, Partial<ISiteMetadata>>(
      maybeStringToString<ISiteMetadata>("title", "Raini.dev"),
    )
      .pipeExtend(maybeStringToString<ISiteMetadata>("siteUrl", "https://raini.dev"))
      .pipeExtend(maybeStringToString<ISiteMetadata>("description"))
      .process(() => siteMeta),
};
