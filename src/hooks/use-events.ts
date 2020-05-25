import { graphql, useStaticQuery } from "gatsby";
import { Mdx } from "../../graphql-types";
import { EventModel } from "../models/event";

export const useEvents = () => {
  const query: { allMdx: { events: Partial<Mdx>[] } } = useStaticQuery(graphql`
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

  return EventModel.batch(query.allMdx.events);
};
