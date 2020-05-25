import React, { FC } from "react";
import { Helmet, LinkProps, MetaProps } from "react-helmet";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { useFixedImages } from "../hooks/use-fixed-images";
import { IFixedObject } from "gatsby-background-image";

interface ISeoProps {
  description?: string;
  lang?: string;
  title?: string;
  author?: string;
  url?: string;
  meta?: MetaProps[];
  image?: IFixedObject;
  scripts?: any[];
  links?: LinkProps[];
}

const Head: FC<ISeoProps> = ({
  url,
  image,
  author,
  title,
  description,
  lang = "en",
  meta = [],
  scripts = [],
  links = [],
}) => {
  const { ogImage1200x1200: defaultImage } = useFixedImages();
  const {
    author: defaultAuthor,
    title: defaultTitle,
    siteUrl: defaultUrl,
    description: defaultDescription,
  } = useSiteMetadata();

  const metaDescription = description ?? defaultDescription;
  const pageTitle = title ?? defaultTitle;
  const metaAuthor = author ?? defaultAuthor;
  const metaUrl = url ?? defaultUrl;
  const metaImage = image || defaultImage;

  const defaultMeta: MetaProps[] = [
    {
      name: "description",
      content: metaDescription,
    },
    {
      property: "og:title",
      content: pageTitle,
    },
    {
      property: "og:description",
      content: metaDescription,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:creator",
      content: metaAuthor,
    },
    {
      name: "twitter:title",
      content: pageTitle,
    },
    {
      name: "twitter:description",
      content: metaDescription,
    },
  ];

  const defaultLinks: LinkProps[] = [
    {
      rel: "canonical",
      href: metaUrl,
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap",
    },
    {
      href: "/hamburger.min.css",
      media: "screen and (max-width:1280px)",
      rel: "stylesheet",
    },
  ];

  const defaultImageMeta: MetaProps[] = metaImage
    ? [
        {
          property: "og:image",
          content: metaImage.src,
        },
        {
          property: "og:image:width",
          content: String(metaImage.width),
        },
        {
          property: "og:image:height",
          content: String(metaImage.height),
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ]
    : [
        {
          name: "twitter:card",
          content: "summary",
        },
      ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      meta={defaultMeta.concat(defaultImageMeta).concat(meta)}
      link={defaultLinks.concat(links)}
      script={scripts}
    />
  );
};

export default Head;
