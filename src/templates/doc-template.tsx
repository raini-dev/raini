import React, { FC } from "react";
import { graphql, Link } from "gatsby";
import { HelmetWrapper } from "../components/helmet-wrapper";
import { Layout } from "../components/layout";
import { DocURL, Route } from "../routes";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { PageContainer } from "../components/containers";

export const query = graphql`
  query($slug: String!) {
    doc: mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
      }
      excerpt
      body
    }
  }
`;

interface IPageMetaProps {
  doc: {
    frontmatter: {
      title: string;
      slug: string;
    };
  };
}

const PageMeta: FC<IPageMetaProps> = ({ doc }) => (
  <HelmetWrapper
    title="Raini.dev | How to become Raini.dev Teacher"
    description="Find out how to participate in developing education with Raini.dev."
    url={DocURL(doc.frontmatter.slug)}
  />
);

interface IDocTempateProps {
  data: {
    doc: {
      frontmatter: {
        title: string;
        slug: string;
      };
      excerpt: string;
      body: string;
    };
  };
}

const DocTemplate: FC<IDocTempateProps> = ({ data: { doc } }) => {
  return (
    <Layout>
      <PageMeta doc={doc} />
      <PageContainer>
        <h1>{doc.frontmatter.title}</h1>
        <MDXRenderer>{doc.body ?? ""}</MDXRenderer>
        <Link to={Route.DOCS}>&larr; Back to all events</Link>
      </PageContainer>
    </Layout>
  );
};

export default DocTemplate;
