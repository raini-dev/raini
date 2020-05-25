import { graphql, useStaticQuery } from "gatsby";
import { ImageSharpFluid, StaticImagesQuery } from "../../graphql-types";

interface IFluidObject extends ImageSharpFluid {
  base64?: string;
  tracedSVG?: string;
  srcWebp?: string;
  srcSetWebp?: string;
}

interface IStaticImages {
  missionImage: IFluidObject;
  featuresBgImage: IFluidObject;
  heroBg: IFluidObject;
  heroImage: IFluidObject;
  whiteLogo: IFluidObject;
}

export const useSharp = (): IStaticImages => {
  const images: StaticImagesQuery = useStaticQuery(graphql`
    query StaticImages {
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
    {} as IStaticImages,
  );
};
