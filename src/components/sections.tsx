import styled from "@emotion/styled";
import BackgroundImage from "gatsby-background-image";

export const Section = styled.section`
  padding: 1rem 2rem;

  > h2 {
    text-align: center;
  }

  :first-of-type {
    padding-top: 0;
  }

  :last-of-type {
    margin-bottom: 4rem;
  }
`;

interface IBgSectionProps {
  padding?: string;
  margin?: string;
}

export const BgSection = styled(BackgroundImage)<IBgSectionProps>`
  padding: ${p => p.padding || "2rem"};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${p => p.margin || 0};

  h2 > {
    text-align: center;
    align-self: center;
  }
`;
