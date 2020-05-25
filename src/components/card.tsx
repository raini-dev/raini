import styled from "@emotion/styled";
import { Color } from "../constants";
import React, { FC } from "react";
import { Link } from "gatsby";

export const CardList = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    width: 100%;
    margin: 1rem 0;
  }

  @media screen and (min-width: 662px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    > div {
      width: calc(50% - 2rem);
      margin: 1rem;

      :nth-of-type(even) {
        margin-right: 0;
      }

      :nth-of-type(odd) {
        margin-left: 0;
      }
    }
  }
`;

export const CardWrapper = styled.div`
  border: 1px solid ${Color.LIGHT_GRAY};
  border-radius: 4px;
  transition: box-shadow 0.2s ease-in;
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-direction: column;

  &:hover {
    box-shadow: 5px 5px 15px ${Color.DARK_PINK_SHADOW};
  }
`;

export const CardContents = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  > h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: left;
    margin-top: 0;
  }

  p {
    text-wrap: normal;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

interface ICardProps {
  title?: string;
  url?: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface IMaybeLinkProps {
  to?: string;
}

const MaybeLink: FC<IMaybeLinkProps> = ({ to, children }) =>
  to ? <Link to={to}>{children}</Link> : <div>{children}</div>;

export const Card: FC<ICardProps> = ({ url, title, imageSrc, imageAlt, children }) => (
  <CardWrapper>
    {imageSrc ? (
      <MaybeLink to={url}>
        <Image src={imageSrc} alt={imageAlt} />
      </MaybeLink>
    ) : null}
    <CardContents>
      <MaybeLink to={url}>{title ? <h3>{title}</h3> : null}</MaybeLink>
      {children}
    </CardContents>
  </CardWrapper>
);

export const CardFooter = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;
