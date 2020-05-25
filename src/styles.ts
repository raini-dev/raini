import { Color } from "./constants";

export const GLOBAL_STYLES = `
@import-normalize;

* {
  box-sizing: border-box;
  margin: 0;
}

undefined {
  display: flex;
  justify-content: center;
}

code {
  background-color: ${Color.LIGHT_PINK};
  padding: 0.125rem 0.25rem;
}

deckgo-highlight-code {
  margin-bottom: 2rem;
  box-shadow: 0 0 15px ${Color.LIGHT_GRAY};
  max-width: 90vw;
}

html,
body {
  font-family: "Open Sans", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Helvetica, Arial, sens-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${Color.DARK_GRAY};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Montserrat, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Helvetica, Arial, sens-serif;
    margin: 0.875rem 0;

    > a {
      text-decoration: none;
      color: ${Color.DARK_GRAY};
    }
  }

  a {
      text-decoration: none;
      color: ${Color.DARK_GRAY};
      transition: color .2s ease-in-out;

      :hover {
        color: ${Color.DARKER_PINK};
      }
  }

  strong {
    color: ${Color.DARKER_PINK};
  }

  body > div > div {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
}

blockquote {
  background: #f9f9f9;
  border-left: 10px solid ${Color.BLUE};
  color: ${Color.DARK_BLUE};
  font-weight: 400;
  padding: 0.5em 10px;
  
  @media screen and (min-width: 1024px) {
    margin: 1.5rem 5em;
  }
}


blockquote::before {
  color: ${Color.BLUE};
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}

blockquote p {
  display: inline;
}
`;
