import { css, Global } from "@emotion/core";
import styled from "@emotion/styled";
import React, { FC, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { GLOBAL_STYLES } from "../styles";
import Footer from "./footer";
import Header from "./header";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

interface IMainProps {
  maxWidth?: string;
}

const Main = styled.main<IMainProps>`
  padding: 6rem 0 3rem;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  height: 100%;
  align-items: center;
  max-width: ${p => p.maxWidth || "100%"};
`;

interface ILayoutProps {
  maxWidth?: string;
}

export const Layout: FC<ILayoutProps> = ({ children, maxWidth }) => {
  const { title, description } = useSiteMetadata();

  useEffect(() => {
    deckDeckGoHighlightElement().catch(console.error);
  }, []);

  return (
    <>
      <Global styles={css(GLOBAL_STYLES)} />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link href="/hamburger.min.css" media="screen and (max-width:1280px)" rel="stylesheet" />
      </Helmet>
      <Header />
      <Main maxWidth={maxWidth}>{children}</Main>
      <Footer />
    </>
  );
};
