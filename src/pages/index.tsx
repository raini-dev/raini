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
import { ExternalRoute, Route } from "../routes";
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
          <Link to={ExternalRoute.DISCORD}>
            <Button type="button">DISCORD</Button>
          </Link>
        </HeroCTA>
      </BgImage>
      <Layout>
        <BgSection Tag="section" fluid={featuresBgImage}>
          <PageContainer alignItems="center" padding="0">
            <h2>Фичи</h2>
            <CardList>
              <Card>
                <p>
                  Raini.dev - это в каком-то смысле <strong>сообщество сообществ</strong>. Здесь
                  можно узнать информацию об активностях наших комьюнити-друзей, найти
                  единомышленников и поучаствовать в разной движухе. А еще можно создать свою - мы
                  только за!
                </p>
              </Card>
              <Card>
                <p>
                  Мы ценим хороший контент в любом виде -{" "}
                  <strong>блоги, стримы, видео и прочее</strong>. Но с ходу подкаст года не создать.
                  У более опытных участников Raini.dev можно узнать, какой майк лучше и сколько
                  тегов надо на YouTube. А на ваши работы можно получить полезную обратную связь.
                </p>
              </Card>
              <Card>
                <p>
                  В нашем сообществе можно найти людей со схожими интересами, не ограничиваясь
                  JS'ами и Python'ами. У нас есть разделы и про кулинарию, и про DIY. В общем,{" "}
                  <strong>нет оффтопа - есть темы, для которых пока не выделили канал</strong>.
                </p>
              </Card>
              <Card>
                <p>
                  Мы хотим, чтобы каждый загорелся идеей сделать что-то своё, поэтому мы активно{" "}
                  <strong>поддерживаем начинающих</strong> участников словом и делом.
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
              <h2>Миссия</h2>
              <Mission>
                Наша миссия - объединить всех русскоговорящих людей из IT в позитивном и
                продуктивном сообществе, и создать все условия, чтобы весь мир пошёл учить русский
                язык ради получения лучшего контента на планете. 😇
              </Mission>
              <Link to={ExternalRoute.DISCORD}>
                <Button type="button">Го в Discord</Button>
              </Link>
            </MissionTextWrapper>
          </MissionContainer>
        </Section>
      </Layout>
    </>
  );
};

export default LandingPage;
