import { useStaticQuery, graphql } from "gatsby";

export const useDocs = () => {
  const query = useStaticQuery(graphql`
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
