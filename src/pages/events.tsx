import styled from "@emotion/styled";
import { Link } from "gatsby";
import React from "react";
import { Button } from "../components/buttons";
import { Card, CardContents } from "../components/card";
import { Container, PageContainer } from "../components/containers";
import { HelmetWrapper } from "../components/helmet-wrapper";
import { Label } from "../components/label";
import { Layout } from "../components/layout";
import { useEvents } from "../hooks/use-events";
import { EventURL, YouTubeThumbnailURL } from "../routes";

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

const PageMeta = () => (
  <HelmetWrapper
    title="Raini.dev | Events"
    description="All Raini.dev events happening worldwide and online, gathered in one place."
    url="https://raini.dev/events"
  />
);

const Events = () => {
  const events = useEvents();

  return (
    <Layout>
      <PageMeta />
      <PageContainer>
        <h1>Events</h1>
        <Container>
          {events.map((event, i) => (
            <Card key={event?.frontmatter?.slug ?? i}>
              <Link to={EventURL(event?.frontmatter?.slug ?? "")}>
                <Image
                  src={YouTubeThumbnailURL(event?.frontmatter?.videoId ?? "")}
                  alt={event?.frontmatter?.title}
                />
              </Link>
              <CardContents>
                <Link to={EventURL(event?.frontmatter?.slug ?? "")}>
                  <h3>{event?.frontmatter?.title}</h3>
                </Link>

                <p>{event?.excerpt}</p>

                <EventInfo>
                  <Link to={EventURL(event?.frontmatter?.slug ?? "")}>
                    <Button>See more &rarr;</Button>
                  </Link>
                  <Label>{event?.frontmatter?.language}</Label>
                </EventInfo>
              </CardContents>
            </Card>
          ))}
        </Container>
      </PageContainer>
    </Layout>
  );
};

export default Events;
