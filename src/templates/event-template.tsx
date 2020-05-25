import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React, { FC } from "react";
import { AddToCalendar } from "../components/add-to-calendar";
import { PageContainer } from "../components/containers";
import { Label, LabelsList } from "../components/label";
import { Layout } from "../components/layout";
import { Color } from "../constants";
import { eventUrl, Route, withHost, youTubeEmbedUrl, youTubeThumbnailUrl } from "../routes";
import { EventModel } from "../models/event";
import { Mdx } from "../../graphql-types";
import Head from "../components/head";
import { Id } from "../utils";

export const query = graphql`
  query EventQuery($slug: String!) {
    event: mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        authors
        tags
        slug
        videoId
        language
        start
        end
        timezone
        location
        difficulty
      }
      excerpt
      body
    }
  }
`;

const Body = styled.section`
  display: flex;
  flex-direction: column;
`;

const YouTubeWrapper = styled.div`
  padding-bottom: 56.25%;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  height: 0;
  position: relative;
`;

const YouTube = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const SmallNote = styled.p`
  font-size: 0.75rem;
  color: ${Color.DARK_GRAY};
`;

interface IEventTemplateProps {
  data: {
    event: Partial<Mdx>;
  };
}

const EventTemplate: FC<IEventTemplateProps> = ({ data }) => {
  const event = EventModel.of(data.event);
  const url = Id(event.slug).map(eventUrl).fold(withHost);

  return (
    <>
      <Head
        title={event.title}
        description={event.excerpt}
        url={url}
        author={event.authors.join(", ")}
        image={
          {
            src: youTubeThumbnailUrl(event.videoId),
            width: 1219,
            height: 685,
          } as any
        }
        scripts={[
          {
            type: "text/javascript",
            src: "https://addevent.com/libs/atc/1.6.1/atc.min.js",
            async: "async",
            defer: "defer",
          },
        ]}
      />
      <Layout>
        <PageContainer textAlign={"left"}>
          <h1>{event.title}</h1>
          <SmallNote>Authors: {event.authors.join(", ")}</SmallNote>
          <LabelsList>
            <Label color={Color.DARK_PINK}>{event.language}</Label>
            <Label color={Color.LIGHT_PINK}>{event.difficulty}</Label>
            {event.tags.map(t => (
              <Label key={t}>{t}</Label>
            ))}
          </LabelsList>

          <YouTubeWrapper>
            <YouTube
              title={event.title}
              src={youTubeEmbedUrl(event.videoId)}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </YouTubeWrapper>
          <Body>
            <AddToCalendar event={event} />
            <MDXRenderer>{event.body}</MDXRenderer>
          </Body>
          <Link to={Route.EVENTS}>&larr; Back to events</Link>
        </PageContainer>
      </Layout>
    </>
  );
};

export default EventTemplate;
