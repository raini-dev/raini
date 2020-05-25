import { graphql, useStaticQuery } from "gatsby";
import { StaticImagesQuery } from "../../graphql-types";
import { IFixedObject } from "gatsby-background-image";

interface IFixedImages {
  ogImage1200x1200: IFixedObject;
}

export const useFixedImages = (): IFixedImages => {
  const images: StaticImagesQuery = useStaticQuery(graphql`
    query FixedImages {
      ogImage1200x1200: file(relativePath: { eq: "og-source.png" }) {
        sharp: childImageSharp {
          fixed(width: 1200, height: 1200, cropFocus: CENTER) {
            aspectRatio
            src
            srcSet
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
        }
      }
    }
  `);

  return Object.keys(images).reduce(
    (acc, key) => ({
      ...acc,
      [key]: (images as any)[key].sharp.fluid,
    }),
    {} as IFixedImages,
  );
};
