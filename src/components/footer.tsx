import styled from "@emotion/styled";
import { graphql, Link, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import React from "react";
import { Color } from "../constants";
import { Route, ExternalRoute } from "../routes";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const Logo = styled(Link)`
  width: 90px;
`;

const StyledFooter = styled.footer`
  margin: 3rem 0 0;
  flex-shrink: 0;
  margin-top: auto;
  padding: 2rem 1rem 3rem;
  background-color: ${Color.DARK_GRAY};
  color: ${Color.LIGHT_GRAY};
  font-weight: 400;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const FirstRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 1281px) {
    flex-direction: row;
    width: 1000px;
  }
`;

const SocialIcon = styled.img`
  margin: 2rem 0.5rem;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Footer = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo-white.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <StyledFooter>
      <FirstRow>
        <Logo to={Route.HOME}>
          <Image fluid={logo.sharp.fluid} alt="Raini.dev logo" />
        </Logo>

        <SocialIconsContainer>
          <OutboundLink
            href={ExternalRoute.TWITTER}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon
              src="/icon_twitter.svg"
              alt="Twitter logo"
              width="30"
              height="30"
            />
          </OutboundLink>
          <OutboundLink
            href={ExternalRoute.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon
              src="/icon_github.svg"
              alt="GitHub logo"
              width="30"
              height="30"
            />
          </OutboundLink>
          <OutboundLink
            href={ExternalRoute.YOUTUBE}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon
              src="/icon_youtube.svg"
              alt="YouTube logo"
              width="30"
              height="30"
            />
          </OutboundLink>
        </SocialIconsContainer>
      </FirstRow>
      <p>&copy; 2020 Raini.dev</p>
    </StyledFooter>
  );
};

export default Footer;
