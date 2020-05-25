import { Link } from "gatsby";
import React from "react";
import { Button } from "../components/buttons";
import { Card, CardFooter, CardList } from "../components/card";
import { PageContainer } from "../components/containers";
import { Label, LabelsList } from "../components/label";
import { Layout } from "../components/layout";
import { useEvents } from "../hooks/use-events";
import { eventUrl, withHost, youTubeThumbnailUrl } from "../routes";
import Head from "../components/head";
import { Color } from "../constants";

const EventsPage = () => {
  const events = useEvents();

  return (
    <>
      <Head
        title="Raini.dev | Events"
        description="All Raini.dev events happening worldwide and online, gathered in one place."
        url={withHost("/events")}
      />
      <Layout>
        <PageContainer>
          <h1>Events</h1>
          <CardList>
            {events.map(event => (
              <Card
                key={event.slug}
                url={eventUrl(event.slug)}
                imageSrc={youTubeThumbnailUrl(event.videoId)}
                imageAlt={event.title}
                title={event.title}
              >
                <LabelsList>
                  <Label color={Color.DARK_PINK}>{event.language}</Label>
                  <Label color={Color.LIGHT_PINK}>{event.difficulty}</Label>
                </LabelsList>

                <p>{event.excerpt}</p>

                <CardFooter>
                  <Link to={eventUrl(event.slug)}>
                    <Button>See More &rarr;</Button>
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

export default EventsPage;
