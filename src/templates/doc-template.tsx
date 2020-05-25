import React, { FC } from "react";
import { graphql, Link } from "gatsby";
import { HelmetWrapper } from "../components/helmet-wrapper";
import { Layout } from "../components/layout";
import { DocURL, Route } from "../routes";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { PageContainer } from "../components/containers";
import { DocModel, IDoc } from "../models/doc";
import { Mdx } from "../../graphql-types";

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
  doc: IDoc;
}

const PageMeta: FC<IPageMetaProps> = ({ doc }) => (
  <HelmetWrapper
    title="Raini.dev | How to become Raini.dev Teacher"
    description="Find out how to participate in developing education with Raini.dev."
    url={DocURL(doc.slug)}
  />
);

interface IDocTemplateProps {
  data: {
    doc: Partial<Mdx>;
  };
}

const DocTemplate: FC<IDocTemplateProps> = ({ data }) => {
  const doc = DocModel.of(data.doc);

  return (
    <Layout>
      <PageMeta doc={doc} />
      <PageContainer>
        <h1>{doc.title}</h1>
        <MDXRenderer>{doc.body ?? ""}</MDXRenderer>
        <Link to={Route.DOCS}>&larr; Back to all events</Link>
      </PageContainer>
    </Layout>
  );
};

export default DocTemplate;
