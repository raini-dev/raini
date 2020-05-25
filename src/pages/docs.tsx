import React from "react";
import { Layout } from "../components/layout";
import { useDocs } from "../hooks/use-docs";
import { Card, CardFooter, CardList } from "../components/card";
import { PageContainer } from "../components/containers";
import { DocURL } from "../routes";
import { Link } from "gatsby";
import { Button } from "../components/buttons";
import { UnderConstructionEmoji } from "../components/emoji";
import Head from "../components/head";

const DocsPage = () => {
  const docs = useDocs();

  if (!docs.length) {
    return (
      <h1>
        <UnderConstructionEmoji /> Looks like something is wrong
      </h1>
    );
  }

  return (
    <>
      <Head
        title="Raini.dev | Docs"
        description="Find out how to participate in developing education with Raini.dev"
        url="https://raini.dev/docs"
      />
      <Layout>
        <PageContainer>
          <h1>Documentation</h1>
          <CardList>
            {docs.map(doc => (
              <Card key={doc.slug} title={doc.title} url={DocURL(doc.slug)}>
                <p>{doc.excerpt}</p>
                <CardFooter>
                  <Link to={DocURL(doc.slug)}>
                    <Button>See more &rarr;</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </CardList>
        </PageContainer>
      </Layout>
    </>
  );
};

export default DocsPage;
