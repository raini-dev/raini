import styled from "@emotion/styled";
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Image from "gatsby-image";
import React from "react";
import { Button } from "../components/buttons";
import { Card, CardList } from "../components/card";
import { Container, PageContainer } from "../components/containers";
import { Layout } from "../components/layout";
import { BgSection, Section } from "../components/sections";
import { Route } from "../routes";
import Seo from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { useFluidImages } from "../hooks/use-fluid-images";

const BgImage = styled(BackgroundImage)`
  background-position: center;
  background-size: cover;
  padding: 6rem 0 0 0;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;

  @media screen and (min-width: 662px) {
    flex-direction: row-reverse;
  }

  @media screen and (min-width: 1281px) {
    padding: 10rem 10rem 12rem;
  }
`;

const HeroImage = styled(Image)`
  max-width: 1024px;
  width: 80%;

  @media screen and (min-width: 662px) {
    width: 100%;
    margin-right: 5rem;
  }
`;

const HeroCTA = styled.div`
  padding: 1rem;
  width: 80%;

  @media screen and (min-width: 662px) {
    width: 100%;
  }

  > h1 {
    font-size: 2rem;
  }

  > p {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  @media screen and (min-width: 1281px) {
    padding: 5rem;

    > h1 {
      font-size: 2.5rem;
    }

    > p {
      font-size: 1.5rem;
    }
  }
`;

const MissionImage = styled(Image)`
  width: 60%;
  max-width: 550px;
  display: block;
  align-self: center;

  @media screen and (max-width: 1280px) {
    margin-top: 2rem;
  }
`;

const Mission = styled.p`
  margin: 1rem 3rem 3rem;
  text-align: center;
  max-width: 350px;
`;

const MissionContainer = styled(Container)`
  flex-direction: column-reverse;

  @media screen and (min-width: 1281px) {
    flex-direction: row;
    justify-content: center;
    width: 1024px;
  }
`;

const MissionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LandingPage = () => {
  const { description } = useSiteMetadata();

  const { missionImage, featuresBgImage, heroBg, heroImage } = useFluidImages();

  return (
    <>
      <Seo />

      <BgImage Tag="section" fluid={heroBg} fadeIn="soft">
        <HeroImage
          fluid={heroImage}
          alt="Simple graphics with two students sitting with their laptops and a teacher conducting a course online appears on the TV screen on the wall."
          fadeIn
        />
        <HeroCTA>
          <h1>Raini.dev</h1>
          <p>{description}</p>
          <Link to={Route.DOCS}>
            <Button type="button">See More</Button>
          </Link>
        </HeroCTA>
      </BgImage>
      <Layout>
        <BgSection Tag="section" fluid={featuresBgImage}>
          <PageContainer alignItems="center" padding="0">
            <h2>How we do it</h2>
            <CardList>
              <Card>
                <p>
                  We treat education as an <strong>Open Source</strong> project. Together, we are
                  able to improve the quality of the education content based on real knowledge and
                  vivid experience of developers from all over the world.
                </p>
              </Card>
              <Card>
                <p>
                  <strong>Contribution</strong> is easy. We&apos;ve prepared several guides on how
                  to bring the material to its best shape. Don&apos;t have time for that? Just land
                  what you have and someone will <strong>contribute</strong> to it to make it fit.
                </p>
              </Card>
              <Card>
                <p>
                  There is <strong>no attribution</strong> from our side. You are the owner of the
                  material and all the insignia are yours. The only thing we ask for is the proper
                  license that allows other people to extend or improve your content.
                </p>
              </Card>
              <Card>
                <p>
                  The approach we have taken allows us to provide the same quality of the content in
                  as many languages as needed to let every person on the planet learn comfortably.
                  Together, we make it <strong>accessible</strong>.
                </p>
              </Card>
            </CardList>
          </PageContainer>
        </BgSection>
        <Section>
          <MissionContainer>
            <MissionImage
              fluid={missionImage}
              alt="Simple graphics with a person using their PC."
              fadeIn
            />
            <MissionTextWrapper>
              <h2>The Mission</h2>
              <Mission>
                Our mission is to evolve the tech industry through education powered by
                professionals and accessible to everyone.
              </Mission>
              <Link to={Route.DOCS}>
                <Button type="button">See More</Button>
              </Link>
            </MissionTextWrapper>
          </MissionContainer>
        </Section>
      </Layout>
    </>
  );
};

export default LandingPage;
