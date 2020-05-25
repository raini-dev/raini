import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { BgSection } from "../components/sections";
import { Layout } from "../components/layout";
import { LogoImageQuery } from "../../graphql-types";
import Head from "../components/head";

const NotFound = () => {
  const { image }: LogoImageQuery = useStaticQuery(graphql`
    query LogoImage {
      image: file(relativePath: { eq: "landing-spot.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <Head
        title="Raini.dev | 404"
        description="Sorry, the page you are trying to access is not there."
        url="https://raini.dev/404"
      />
      <Layout>
        <BgSection
          Tag="section"
          fluid={image?.sharp?.fluid as undefined}
          fadeIn="soft"
          padding="12rem 5rem"
        >
          <h1>Sorry, the page you are trying to access is not there.</h1>
        </BgSection>
      </Layout>
    </>
  );
};

export default NotFound;
