import { graphql, useStaticQuery } from "gatsby";
import { EventModel } from "../models/event";

export const useEvents = () => {
  const query: { allMdx: { events: any[] } } = useStaticQuery(graphql`
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
            difficulty
          }
          excerpt
        }
      }
    }
  `);

  return EventModel.batch(query.allMdx.events);
};
