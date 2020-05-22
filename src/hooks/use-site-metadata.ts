import { graphql, useStaticQuery } from "gatsby";
import { SiteMetadataQuery } from "../../graphql-types";

export const useSiteMetadata = () => {
  const query: SiteMetadataQuery = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return query?.site?.siteMetadata;
};
