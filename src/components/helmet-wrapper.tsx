import React, { FC } from "react";
import { Helmet } from "react-helmet";

interface IOpenGraphProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
}

export const HelmetWrapper: FC<IOpenGraphProps> = ({
  title,
  description,
  url,
  imageUrl,
  children,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />

    {/* OpenGraph tags */}
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />

    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="raini_dev" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />

    {/* Images */}
    {imageUrl ? <meta name="image" content={imageUrl} /> : null}
    {imageUrl ? <meta name="og:image" content={imageUrl} /> : null}
    {imageUrl ? <meta name="twitter:image" content={imageUrl} /> : null}

    {children}
  </Helmet>
);
