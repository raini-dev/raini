import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
