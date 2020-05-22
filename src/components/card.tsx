import styled from "@emotion/styled";
import { Color } from "../constants";

export const Card = styled.div`
  border: 1px solid ${Color.LIGHT_GRAY};
  border-radius: 4px;
  transition: box-shadow 0.2s ease-in;
  margin-right: 1rem;
  background-color: #fff;
  display: flex;
  width: 100%;
  margin-top: 2rem;
  flex-direction: column;

  &:hover {
    box-shadow: 5px 5px 15px ${Color.DARK_PINK_SHADOW};
  }

  @media screen and (min-width: 662px) {
    width: calc(50% - 1.5rem);
  }
`;

export const CardContents = styled.div`
  padding: 1rem;
  flex: 1 0 auto;

  p {
    margin-bottom: 1rem;
  }
`;
