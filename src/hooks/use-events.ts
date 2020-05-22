import { graphql, useStaticQuery } from "gatsby";
import { AllEventsQuery } from "../../graphql-types";

export const useEvents = () => {
  const query: AllEventsQuery = useStaticQuery(graphql`
    query AllEvents {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/content/events/" } }
        sort: { fields: frontmatter___start, order: DESC }
      ) {
        events: nodes {
          frontmatter {
            title
            slug
            language
            tags
            authors
            videoId
          }
          excerpt
        }
      }
    }
  `);

  return query.allMdx.events;
};
