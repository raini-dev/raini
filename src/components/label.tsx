import styled from "@emotion/styled";
import { Color, DifficultyColor } from "../constants";

export const LabelsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  > div {
    margin: 3px;
  }
`;

interface ILabelProps {
  color?: Color | DifficultyColor | string;
}

export const Label = styled.div<ILabelProps>`
  background: ${p => p.color || Color.LIGHT_GRAY};
  color: ${Color.DARK_GRAY};
  padding: 5px 10px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.725rem;
  border: 0;
  border-radius: 4px;
  margin-top: auto;
`;
