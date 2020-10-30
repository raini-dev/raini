import { graphql, useStaticQuery } from "gatsby";
import { SiteMetadataModel } from "../models/site-matadata";

export const useSiteMetadata = () => {
  const query: any = useStaticQuery(graphql`
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
