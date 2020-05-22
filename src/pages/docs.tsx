import React from "react";
import styled from "@emotion/styled";
import { HelmetWrapper } from "../components/helmet-wrapper";
import { Layout } from "../components/layout";
import { useDocs } from "../hooks/use-docs";
import { Card, CardContents } from "../components/card";
import { PageContainer, Container } from "../components/containers";
import { DocURL } from "../routes";
import { Link } from "gatsby";
import { Button } from "../components/buttons";

const PageMeta = () => (
  <HelmetWrapper
    title="Raini.dev | Docs"
    description="Find out how to participate in developing education with Raini.dev."
    url="https://raini.dev/docs"
  />
);

const Contributing = () => {
  const docs = useDocs();

  return (
    <Layout>
      <PageMeta />
      <PageContainer alignItems="center" justifyContent="space-between">
        <h1>Documentation</h1>
        <Container alignItems="unset">
          {docs.map((doc) => (
            <Card key={doc.slug}>
              <CardContents>
                <Link to={DocURL(doc.frontmatter.slug)}>
                  <h3>{doc.frontmatter.title}</h3>
                </Link>
                <p>{doc.excerpt}</p>
                <Link to={DocURL(doc.frontmatter.slug)}>
                  <Button>See more &rarr;</Button>
                </Link>
              </CardContents>
            </Card>
          ))}
        </Container>
      </PageContainer>
    </Layout>
  );
};

export default Contributing;
