import React, { FC, useEffect } from "react";
import { Helmet, LinkProps, MetaProps } from "react-helmet";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { useFixedImages } from "../hooks/use-fixed-images";
import { IFixedObject } from "gatsby-background-image";
import { withHost } from "../routes";

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

const Seo: FC<ISeoProps> = ({
  url,
  image,
  author,
  title,
  description,
  lang = "ru",
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
  const metaImage = image ?? defaultImage;

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
      property: "og:url",
      content: metaUrl,
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
      type: "text/css",
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap",
    },
    {
      rel: "stylesheet",
      type: "text/css",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap",
    },
    {
      href: withHost("/hamburger.min.css"),
      type: "text/css",
      media: "screen and (max-width:1280px)",
      rel: "stylesheet",
    },
    {
      rel: "stylesheet",
      type: "text/css",
      href: "https://wpcc.io/lib/1.0.2/cookieconsent.min.css",
    },
  ];

  const defaultScripts = [
    {
      src: "https://wpcc.io/lib/1.0.2/cookieconsent.min.js",
    },
  ];

  const defaultImageMeta: MetaProps[] = [
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
  ];

  useEffect(() => {
    window.addEventListener("load", () => {
      (window as any).wpcc.init({
        border: "thin",
        corners: "small",
        colors: {
          popup: { background: "#ffffff", text: "#333333", border: "#cccccc" },
          button: { background: "#aa6176", text: "#ffffff" },
        },
        position: "bottom-right",
        padding: "small",
        content: { href: "https://raini.dev/cookie-policy" },
      });
    });

    const cookieConsentBtn = document.querySelector(".wpcc-btn");
    cookieConsentBtn?.setAttribute("role", "button");
  }, []);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      meta={defaultMeta.concat(defaultImageMeta).concat(meta)}
      link={defaultLinks.concat(links)}
      script={defaultScripts.concat(scripts)}
    />
  );
};

export default Seo;
