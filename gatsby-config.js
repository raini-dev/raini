const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://raini.dev",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    siteUrl,
    title: "Raini.dev | Meet Raini.dev",
    description:
      "Raini.dev is an open sourced online learning and teaching space. Learn programming, marketing, data science and more. Empowered by professionals from all over the world.",
    author: "Raini.dev",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
    "gatsby-plugin-graphql-codegen",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Raini.dev`,
        short_name: `Raini.dev`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#e2bac4`,
        icon: `assets/images/favicon.png`,
        display: `standalone`,
        icon_options: {
          // https://developer.mozilla.org/en-US/docs/Web/Manifest
          // https://w3c.github.io/manifest/#purpose-member
          purpose: `maskable`,
        },
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: "#e2bac4",
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "events",
        path: "./content/events/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: "./content/docs/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./assets/images/",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
          },
          {
            resolve: "gatsby-remark-highlight-code",
            options: {
              terminal: "carbon",
              theme: "one-light",
            },
          },
        ],
        remarkPlugins: [],
        plugins: ["gatsby-remark-images"],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-165165368-1",
        // Set to true for de
        anonymize: true,
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        defer: false,
        cookieDomain: "raini.dev",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-accessibilityjs`,
      options: {
        injectStyles: `
        .accessibility-error {
          box-shadow: 0 0 3px 1px #f00;
          background-color: rgba(255, 0, 0, 0.25);
          position: relative;
        }
        .accessibility-error:before {
          content: "A11Y";
          position: absolute;
          top: 0;
          left: 0;
          color: #fff;
          font-size: 10px;
          background-color: rgba(255, 0, 0, 0.5);
          transform: translateY(-100%);
        }
      `,
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: "static",
      },
    },
  ],
};
