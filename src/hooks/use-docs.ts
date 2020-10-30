import { graphql, useStaticQuery } from "gatsby";
import { DocModel } from "../models/doc";

export const useDocs = () => {
  const query: { allMdx: { docs: any[] } } = useStaticQuery(graphql`
    query AllDocs {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/content/docs/" } }
        sort: { fields: frontmatter___start, order: DESC }
      ) {
        docs: nodes {
          frontmatter {
            title
            slug
          }
          excerpt
        }
      }
    }
  `);

  return DocModel.batch(query.allMdx.docs);
};
