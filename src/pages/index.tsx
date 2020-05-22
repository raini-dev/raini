import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link, useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Image from "gatsby-image";
import React, { FC } from "react";
import { Button } from "../components/buttons";
import { Card, CardContents } from "../components/card";
import { Container } from "../components/containers";
import { HelmetWrapper } from "../components/helmet-wrapper";
import { Layout } from "../components/layout";
import { BgSection, Section } from "../components/sections";
import { Route } from "../routes";

type IFluidObject = any;

const BgImage = styled(BackgroundImage)`
  background-position: right top;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 5rem 5rem 0 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 662px) {
    flex-direction: row-reverse;
  }
`;

const HeroImage = styled(Image)`
  max-width: 1024px;
  width: 100%;

  @media screen and (min-width: 662px) {
    width: 40%;
    margin-right: 5%;
  }

  @media screen and (min-width: 1281px) {
    width: 40%;
    margin-right: 15%;
  }
`;

interface IImageFluid {
  sharp: {
    fluid: IFluidObject;
  };
}

interface IHeroProps {
  image: IImageFluid;
  bgImage: IImageFluid;
}

const Hero: FC<IHeroProps> = ({ image, bgImage }) => (
  <BgImage Tag="section" fluid={bgImage.sharp.fluid} fadeIn="soft">
    <HeroImage
      fluid={image.sharp.fluid}
      alt="Simple graphics with two students sitting with their laptops and a teacher conducting a course online appears on the TV screen on the wall."
      fadeIn
    />
    <Container
      direction="column"
      css={css`
        align-self: center;
        text-align: center;

        > div {
          align-self: center;
          text-align: center;
          > p {
            margin-bottom: 1.5rem;
          }
        }

        @media screen and (min-width: 662px) {
          margin-left: 5%;
          > div {
            margin-right: auto;
            max-width: 100%;

            > p {
              margin-bottom: 1.5rem;
            }
          }
        }

        @media screen and (min-width: 1281px) {
          text-align: unset;
          margin-left: 15%;
          align-items: flex-start;
        }
      `}
    >
      <div>
        <h1>Raini.dev</h1>
        <p>A place to collaborate on teaching.</p>
        <Link to={Route.DOCS}>
          <Button type="button">Join us</Button>
        </Link>
      </div>
    </Container>
  </BgImage>
);

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

interface IMissionSectionProps {
  image: IImageFluid;
}

const MissionSection: FC<IMissionSectionProps> = ({ image }) => (
  <Section>
    <MissionContainer>
      <MissionImage
        fluid={image.sharp.fluid}
        alt="Simple graphics with a person using their PC."
        fadeIn
      />
      <MissionTextWrapper>
        <h2>The Mission</h2>
        <Mission>
          Our mission is to evolve the tech industry through education powered
          by professionals and accessible to everyone.
        </Mission>
        <Link to={Route.DOCS}>
          <Button type="button">Join us</Button>
        </Link>
      </MissionTextWrapper>
    </MissionContainer>
  </Section>
);

interface IFeaturesSectionProps {
  bgImage: IImageFluid;
}

const FeaturesSection: FC<IFeaturesSectionProps> = ({ bgImage }) => (
  <BgSection Tag="section" fluid={bgImage.sharp.fluid} fadeIn="soft">
    <Container direction="column" maxWidth="1024px">
      <h2>How we do it</h2>
      <Container justifyContent="space-around">
        <Card>
          <CardContents>
            <p>
              We treat education as an <strong>Open Source</strong> project.
              Together, we are able to improve the quality of the education
              content based on real knowledge and vivid experience of developers
              from all over the world.
            </p>
          </CardContents>
        </Card>
        <Card>
          <CardContents>
            <p>
              <strong>Contribution</strong> is easy. We&apos;ve prepared several
              guides on how to bring the material to its best shape. Don&apos;t
              have time for that? Just land what you have and someone will{" "}
              <strong>contribute</strong> to it to make it fit.
            </p>
          </CardContents>
        </Card>
        <Card>
          <CardContents>
            <p>
              There is <strong>no attribution</strong> from our side. You are
              the owner of the material and all the insignia are yours. The only
              thing we ask for is the proper license that allows other people to
              extend or improve your content.
            </p>
          </CardContents>
        </Card>
        <Card>
          <CardContents>
            <p>
              The approach we have taken allows us to provide the same quality
              of the content in as many languages as needed to let every person
              on the planet learn comfortably. Together, we make it{" "}
              <strong>accessible</strong>.
            </p>
          </CardContents>
        </Card>
      </Container>
    </Container>
  </BgSection>
);

const PageMeta = () => (
  <HelmetWrapper
    title="Raini.dev | Hello!"
    description="Raini.dev is a place where developers, designers, analysts, testers and managers share their experience."
    url="https://raini.dev"
  />
);

const LandingPage = () => {
  const {
    missionImage,
    featuresBgImage,
    heroBg,
    heroImage,
  } = useStaticQuery(graphql`
    query {
      missionImage: file(relativePath: { eq: "mobile-mission-image.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      featuresBgImage: file(relativePath: { eq: "landing-spot.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      heroBg: file(relativePath: { eq: "mobile-header-bg.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      heroImage: file(relativePath: { eq: "mobile-hero-people.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <Hero image={heroImage} bgImage={heroBg} />
      <Layout>
        <PageMeta />
        <FeaturesSection bgImage={featuresBgImage} />
        <MissionSection image={missionImage} />
      </Layout>
    </>
  );
};

export default LandingPage;
