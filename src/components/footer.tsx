import styled from "@emotion/styled";
import { Link } from "gatsby";
import Image from "gatsby-image";
import React, { FC } from "react";
import { Color } from "../constants";
import { ExternalRoute, Route } from "../routes";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { useFluidImages } from "../hooks/use-fluid-images";
import { ContactForm } from "./contact-form";

const Logo = styled(Link)`
  width: 121px;
  align-self: center;
  margin-bottom: 2rem;
`;

const StyledFooter = styled.footer`
  flex-shrink: 0;
  margin: auto 0 0;
  padding: 2rem 1rem 3rem;
  background-color: ${Color.DARK_GRAY};
  color: ${Color.LIGHT_GRAY};
  font-weight: 400;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  max-width: 1024px;
  margin-bottom: 1rem;

  @media screen and (min-width: 662px) {
    flex-direction: row;
  }

  :not(:first-of-type) {
    > div,
    form {
      flex: 1;
    }
  }
`;

const Sitemap = styled.ul`
  list-style: none;
  padding-left: 0.5rem;
  font-size: 0.9rem;
  li {
    padding: 0.5rem 0;
  }
  a {
    color: ${Color.LIGHT_GRAY};
  }
`;

const SocialIcon = styled.img``;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 662px) {
    width: 33%;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterContactForm = styled(ContactForm)`
  color: red;
`;

const Footer: FC = () => {
  const { whiteLogo } = useFluidImages();

  return (
    <StyledFooter>
      <Row>
        <Logo to={Route.HOME}>
          <Image fluid={whiteLogo} alt="Raini.dev logo" />
        </Logo>

        <SocialIconsContainer>
          <OutboundLink href={ExternalRoute.TWITTER} target="_blank" rel="noopener noreferrer">
            <SocialIcon src="/icon_twitter.svg" alt="Twitter logo" width="45" height="45" />
          </OutboundLink>
          <OutboundLink href={ExternalRoute.GITHUB} target="_blank" rel="noopener noreferrer">
            <SocialIcon src="/icon_github.svg" alt="GitHub logo" width="45" height="45" />
          </OutboundLink>
          <OutboundLink href={ExternalRoute.YOUTUBE} target="_blank" rel="noopener noreferrer">
            <SocialIcon src="/icon_youtube.svg" alt="YouTube logo" width="45" height="45" />
          </OutboundLink>
        </SocialIconsContainer>
      </Row>
      <Row>
        <div>
          <h3>Sitemap</h3>
          <Sitemap>
            <li>
              <Link to={Route.HOME}>Home</Link>
            </li>
            <li>
              <Link to={Route.EVENTS}>Events</Link>
            </li>
            <li>
              <Link to={Route.DOCS}>Docs</Link>
            </li>
          </Sitemap>

          <h3>Social Media</h3>
          <Sitemap>
            <li>
              <OutboundLink target="_blank" rel="noopener noreferrer" href={ExternalRoute.TWITTER}>
                &#8599; Twitter
              </OutboundLink>
            </li>
            <li>
              <OutboundLink target="_blank" rel="noopener noreferrer" href={ExternalRoute.GITHUB}>
                &#8599; Github
              </OutboundLink>
            </li>
            <li>
              <OutboundLink target="_blank" rel="noopener noreferrer" href={ExternalRoute.YOUTUBE}>
                &#8599; YouTube
              </OutboundLink>
            </li>
          </Sitemap>
        </div>
        <div>
          <h3>Legal</h3>
          <Sitemap>
            <li>
              <Link to={Route.AUP}>Acceptable Use Policy</Link>
            </li>
            <li>
              <Link to={Route.COOKIE_POLICY}>Cookie Policy</Link>
            </li>
            <li>
              <Link to={Route.DISCLAIMER}>Disclaimer</Link>
            </li>
            <li>
              <Link to={Route.PRIVACY_POLICY}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={Route.TAC}>Terms and Conditions</Link>
            </li>
          </Sitemap>
        </div>
        <FormWrapper>
          <h3>Contact Us</h3>
          <FooterContactForm />
        </FormWrapper>
      </Row>
      <p>&copy; 2020 Raini.dev</p>
    </StyledFooter>
  );
};

export default Footer;
