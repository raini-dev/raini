import { Layout } from "../components/layout";
import { PageContainer } from "../components/containers";
import React, { FC } from "react";
import { graphql } from "gatsby";
import { Mdx } from "../../graphql-types";
import Head from "../components/head";
import { DocModel } from "../models/doc";
import { Id } from "../utils";
import { withHost } from "../routes";
import { MDXRenderer } from "gatsby-plugin-mdx";

export const query = graphql`
  query($slug: String!) {
    page: mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        description
      }
      excerpt
      body
    }
  }
`;

interface IDocTemplateProps {
  data: {
    page: Partial<Mdx>;
  };
}

const OtherMdxTemplate: FC<IDocTemplateProps> = ({ data }) => {
  const page = DocModel.of(data.page);
  const url = Id(page.slug).fold(withHost);

  return (
    <>
      <Head title={page.title} description={page.description} url={url} />
      <Layout>
        <PageContainer textAlign={"left"}>
          <h1>{page.title}</h1>
          <MDXRenderer>{page.body}</MDXRenderer>
        </PageContainer>
      </Layout>
    </>
  );
};

export default OtherMdxTemplate;
