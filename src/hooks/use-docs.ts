import { graphql, useStaticQuery } from "gatsby";
import { AllDocsQuery } from "../../graphql-types";

export const useDocs = () => {
  const query: AllDocsQuery = useStaticQuery(graphql`
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

  return query.allMdx.docs;
};
