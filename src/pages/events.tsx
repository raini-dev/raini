import styled from "@emotion/styled";
import { Link } from "gatsby";
import React from "react";
import { Button } from "../components/buttons";
import { Card, CardContents } from "../components/card";
import { Container, PageContainer } from "../components/containers";
import { Label } from "../components/label";
import { Layout } from "../components/layout";
import { useEvents } from "../hooks/use-events";
import { EventURL, YouTubeThumbnailURL } from "../routes";
import Head from "../components/head";

const Image = styled.img`
  width: 100%;
  height: auto;
  display: none;

  @media screen and (min-width: 662px) {
    display: block;
  }
`;

const EventInfo = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;

const EventsPage = () => {
  const events = useEvents();

  return (
    <Layout>
      <Head
        title="Raini.dev | Events"
        description="All Raini.dev events happening worldwide and online, gathered in one place."
        url="https://raini.dev/events"
      />
      <PageContainer>
        <h1>Events</h1>
        <Container>
          {events.map((event, i) => (
            <Card key={event.slug}>
              <Link to={EventURL(event.slug)}>
                <Image src={YouTubeThumbnailURL(event.videoId)} alt={event.title} />
              </Link>
              <CardContents>
                <Link to={EventURL(event.slug)}>
                  <h3>{event.title}</h3>
                </Link>

                <p>{event?.excerpt}</p>

                <EventInfo>
                  <Link to={EventURL(event.slug)}>
                    <Button>See more &rarr;</Button>
                  </Link>
                  <Label>{event.language}</Label>
                </EventInfo>
              </CardContents>
            </Card>
          ))}
        </Container>
      </PageContainer>
    </Layout>
  );
};

export default EventsPage;
