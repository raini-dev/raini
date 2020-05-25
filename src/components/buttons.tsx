import styled from "@emotion/styled";
import { Color } from "../constants";

interface IButtonProps {
  color?: Color;
}

export const Button = styled.button<IButtonProps>`
  background-color: ${p => p.color || Color.DARKER_PINK};
  border: 2px solid ${p => p.color || Color.DARKER_PINK};
  border-radius: 25px;
  padding: 0.5rem 2rem;
  font-weight: 700;
  color: #fff;
  font-size: 0.925rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  :hover,
  :active {
    background-color: #fff;
    color: ${Color.DARKER_PINK};
  }
`;
