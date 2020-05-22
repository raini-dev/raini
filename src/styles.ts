import { Color } from "./constants";

export const GLOBAL_STYLES = `
@import-normalize;

* {
  box-sizing: border-box;
  margin: 0;
}

deckgo-highlight-code {
  margin-bottom: 2rem;
}

html,
body {
  font-family: Montserrat, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Helvetica, Arial, sens-serif;
  font-size: 15px;
  font-weight: 200;
  line-height: 1.4;
  height: 100%;

  /* Remove margin from the main div that Gatsby mounts to */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
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

.breadcrumb__list {
  display: flex;
  font-size: 0.725rem;
  color: ${Color.DARK_GRAY};
  text-decoration: none;
  padding: 0;
  margin: 0;
  list-style: none;
}

.breadcrumb__list__item {
  margin: 0 0.5rem;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
}

.breadcrumb__link {
  color: ${Color.DARK_GRAY};
  text-decoration: none;
  font-weight: 400;
}

.breadcrumb__link__active {
  color: ${Color.DARKER_PINK};
}


blockquote {
  background: #f9f9f9;
  border-left: 10px solid ${Color.BLUE};
  margin: 1.5em 5em;
  color: ${Color.DARK_BLUE};
  font-weight: 400;
  padding: 0.5em 10px;
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
