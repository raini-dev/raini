import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React, { FC } from "react";
import { AddToCalendar } from "../components/add-to-calendar";
import { PageContainer } from "../components/containers";
import { HelmetWrapper } from "../components/helmet-wrapper";
import { Label } from "../components/label";
import { Layout } from "../components/layout";
import { Color, DifficultyColor } from "../constants";
import { EventURL, Route, YouTubeEmbedURL } from "../routes";
import { IEvent } from "../types/event";

export const query = graphql`
  query($slug: String!) {
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
        theory
        practice
      }
      excerpt
      body
    }
  }
`;

const MetaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Body = styled.section`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
`;

const YouTubeLimiter = styled.div`
  width: 320px;

  @media screen and (min-width: 662px) {
    width: 500px;
  }

  @media screen and (min-width: 1281px) {
    width: 994px;
  }
`;

const YouTubeWrapper = styled.div`
  padding-bottom: 56.25%;
  overflow: hidden;
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

interface IDifficultyProps {
  type: "theory" | "practice";
  level: keyof typeof DifficultyColor;
}

const Difficulty: FC<IDifficultyProps> = ({ type, level }) => {
  if (!level) {
    level = "n/a";
  }

  return (
    <Label color={DifficultyColor[level]}>
      {type.toUpperCase()}: {level.toUpperCase()}
    </Label>
  );
};

interface IPageMetaProps {
  event: IEvent;
}

const PageMeta: FC<IPageMetaProps> = ({ event }) => (
  <HelmetWrapper
    title={`Raini.dev | ${event.frontmatter.title}`}
    description={event.excerpt ?? ""}
    url={`https://raini.dev${EventURL(event.frontmatter.slug)}`}
    imageUrl={YouTubeEmbedURL(event.frontmatter.videoId)}
  >
    {/* <!-- AddEvent script --> */}
    <script
      type="text/javascript"
      src="https://addevent.com/libs/atc/1.6.1/atc.min.js"
      async
      defer
    ></script>
  </HelmetWrapper>
);

interface IEventTemplateProps {
  data: {
    event: IEvent;
  };
}

const EventTemplate: FC<IEventTemplateProps> = ({ data: { event } }) => (
  <Layout>
    <PageMeta event={event} />
    <PageContainer direction="column" alignItems="flex-start">
      <h1>{event.frontmatter.title}</h1>
      <p
        css={css`
          font-size: 0.75rem;
          color: ${Color.DARK_GRAY};
        `}
      >
        Authors: {event.frontmatter.authors}
      </p>
      <MetaWrapper>
        <TagsWrapper>
          {((event.frontmatter.tags as unknown) as string).split(", ").map((t: string) => (
            <Label key={t}>{t}</Label>
          ))}
        </TagsWrapper>
        <Label>{event.frontmatter.language}</Label>
      </MetaWrapper>

      <YouTubeLimiter>
        <YouTubeWrapper>
          <YouTube
            title={event.frontmatter.title}
            src={YouTubeEmbedURL(event.frontmatter.videoId)}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </YouTubeWrapper>
      </YouTubeLimiter>
      <Body>
        <TagsWrapper
          css={css`
            align-items: center;
            margin-bottom: 3rem;
            justify-content: space-between;
          `}
        >
          <div
            css={css`
              display: flex;
            `}
          >
            <Difficulty type="theory" level={event.frontmatter.theory} />
            <Difficulty type="practice" level={event.frontmatter.practice} />
          </div>
          <AddToCalendar event={event} />
        </TagsWrapper>
        <MDXRenderer>{event.body ?? ""}</MDXRenderer>
      </Body>
      <Link to={Route.EVENTS}>&larr; Back to all events</Link>
    </PageContainer>
  </Layout>
);

export default EventTemplate;
