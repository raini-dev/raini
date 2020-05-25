import { graphql, useStaticQuery } from "gatsby";
import { Mdx } from "../../graphql-types";
import { DocModel } from "../models/doc";

export const useDocs = () => {
  const query: { allMdx: { docs: Partial<Mdx>[] } } = useStaticQuery(graphql`
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
