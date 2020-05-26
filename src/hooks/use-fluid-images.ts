import { graphql, useStaticQuery } from "gatsby";
import { FluidImagesQuery } from "../../graphql-types";
import { IFluidObject } from "gatsby-background-image";

interface IFluidImages {
  missionImage: IFluidObject;
  featuresBgImage: IFluidObject;
  heroBg: IFluidObject;
  heroImage: IFluidObject;
  whiteLogo: IFluidObject;
}

export const useFluidImages = (): IFluidImages => {
  const images: FluidImagesQuery = useStaticQuery(graphql`
    query FluidImages {
      missionImage: file(relativePath: { eq: "mobile-mission-image.png" }) {
        sharp: childImageSharp {
          fluid {
            aspectRatio
            src
            srcSet
            sizes
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
        }
      }
      featuresBgImage: file(relativePath: { eq: "landing-spot.png" }) {
        sharp: childImageSharp {
          fluid {
            aspectRatio
            src
            srcSet
            sizes
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
        }
      }
      heroBg: file(relativePath: { eq: "mobile-header-bg.png" }) {
        sharp: childImageSharp {
          fluid {
            aspectRatio
            src
            srcSet
            sizes
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
        }
      }
      heroImage: file(relativePath: { eq: "mobile-hero-people.png" }) {
        sharp: childImageSharp {
          fluid {
            aspectRatio
            src
            srcSet
            sizes
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
        }
      }
      whiteLogo: file(relativePath: { eq: "logo-white.png" }) {
        sharp: childImageSharp {
          fluid {
            aspectRatio
            src
            srcSet
            sizes
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
    {} as IFluidImages,
  );
};
