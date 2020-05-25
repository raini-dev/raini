import { graphql, useStaticQuery } from "gatsby";
import { SiteMetadataQuery } from "../../graphql-types";
import { SiteMetadataModel } from "../models/site-matadata";

export const useSiteMetadata = () => {
  const query: SiteMetadataQuery = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          author
          siteUrl
          description
        }
      }
    }
  `);

  return SiteMetadataModel.of(query?.site?.siteMetadata);
};
