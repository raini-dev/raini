import styled from "@emotion/styled";
import { Color, DifficultyColor } from "../constants";

interface ILabelProps {
  color?: Color | DifficultyColor | string;
}

export const Label = styled.div<ILabelProps>`
  background: ${p => p.color || Color.LIGHT_GRAY};
  color: ${Color.DARK_GRAY};
  padding: 5px 10px;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 0.725rem;
  border: 0;
  border-radius: 4px;
  margin-top: auto;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;

  :last-of-type {
    margin-right: 0;
  }
`;
