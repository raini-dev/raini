import React from "react";
import { HelmetWrapper } from "../components/helmet-wrapper";
import { Layout } from "../components/layout";
import { useDocs } from "../hooks/use-docs";
import { Card, CardContents } from "../components/card";
import { Container, PageContainer } from "../components/containers";
import { DocURL } from "../routes";
import { Link } from "gatsby";
import { Button } from "../components/buttons";
import { UnderConstructionEmoji } from "../components/emoji";

const PageMeta = () => (
  <HelmetWrapper
    title="Raini.dev | Docs"
    description="Find out how to participate in developing education with Raini.dev."
    url="https://raini.dev/docs"
  />
);

const Contributing = () => {
  const docs = useDocs() || [];

  if (!docs.length) {
    return (
      <h1>
        <UnderConstructionEmoji /> Looks like something is wrong
      </h1>
    );
  }

  return (
    <Layout>
      <PageMeta />
      <PageContainer alignItems="center" justifyContent="space-between">
        <h1>Documentation</h1>
        <Container alignItems="unset">
          {docs.map((doc, i) => (
            <Card key={doc.frontmatter?.slug ?? i}>
              <CardContents>
                <Link to={DocURL(doc.frontmatter?.slug ?? "")}>
                  <h3>{doc.frontmatter?.title}</h3>
                </Link>
                <p>{doc.excerpt}</p>
                <Link to={DocURL(doc.frontmatter?.slug ?? "")}>
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
