import { css, Global } from "@emotion/core";
import styled from "@emotion/styled";
import React, { FC, useEffect } from "react";
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

export const Layout: FC<IMainProps> = ({ children, maxWidth }) => {
  useEffect(() => {
    deckDeckGoHighlightElement().catch(console.error);
  }, []);

  return (
    <>
      <Global styles={css(GLOBAL_STYLES)} />
      <Header />
      <Main maxWidth={maxWidth}>{children}</Main>
      <Footer />
    </>
  );
};
