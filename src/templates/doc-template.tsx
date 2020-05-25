import React, { FC } from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/layout";
import { docUrl, Route, withHost } from "../routes";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { PageContainer } from "../components/containers";
import { DocModel } from "../models/doc";
import { Mdx } from "../../graphql-types";
import Head from "../components/head";
import { Id } from "../utils";

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
  const url = Id(doc.slug).map(docUrl).fold(withHost);

  return (
    <>
      <Head title={doc.title} description={doc.excerpt} url={url} />
      <Layout>
        <PageContainer textAlign={"left"}>
          <h1>{doc.title}</h1>
          <MDXRenderer>{doc.body}</MDXRenderer>
          <Link to={Route.DOCS}>&larr; Back to docs</Link>
        </PageContainer>
      </Layout>
    </>
  );
};

export default DocTemplate;
