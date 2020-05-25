import React, { FC } from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/layout";
import { DocURL, Route } from "../routes";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { PageContainer } from "../components/containers";
import { DocModel } from "../models/doc";
import { Mdx } from "../../graphql-types";
import Head from "../components/head";

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

interface IDocTemplateProps {
  data: {
    doc: Partial<Mdx>;
  };
}

const DocTemplate: FC<IDocTemplateProps> = ({ data }) => {
  const doc = DocModel.of(data.doc);

  return (
    <Layout>
      <Head
        title={doc.title}
        description={doc.excerpt}
        url={`https://raini.dev/${DocURL(doc.slug)}`}
      />
      <PageContainer>
        <h1>{doc.title}</h1>
        <MDXRenderer>{doc.body ?? ""}</MDXRenderer>
        <Link to={Route.DOCS}>&larr; Back to all events</Link>
      </PageContainer>
    </Layout>
  );
};

export default DocTemplate;
