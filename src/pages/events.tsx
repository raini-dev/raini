import { Link } from "gatsby";
import React from "react";
import { Button } from "../components/buttons";
import { Card, CardFooter, CardList } from "../components/card";
import { PageContainer } from "../components/containers";
import { Label } from "../components/label";
import { Layout } from "../components/layout";
import { useEvents } from "../hooks/use-events";
import { EventURL, YouTubeThumbnailURL } from "../routes";
import Head from "../components/head";

const EventsPage = () => {
  const events = useEvents();

  return (
    <>
      <Head
        title="Raini.dev | Events"
        description="All Raini.dev events happening worldwide and online, gathered in one place."
        url="https://raini.dev/events"
      />
      <Layout>
        <PageContainer>
          <h1>Events</h1>
          <CardList>
            {events.map(event => (
              <Card
                key={event.slug}
                url={EventURL(event.slug)}
                imageSrc={YouTubeThumbnailURL(event.videoId)}
                imageAlt={event.title}
                title={event.title}
              >
                <p css={{ flexGrow: 1 }}>{event.excerpt}</p>

                <CardFooter>
                  <Link to={EventURL(event.slug)}>
                    <Button>Learn More &rarr;</Button>
                  </Link>
                  <Label>{event.language}</Label>
                </CardFooter>
              </Card>
            ))}
          </CardList>
        </PageContainer>
      </Layout>
    </>
  );
};

export default EventsPage;
