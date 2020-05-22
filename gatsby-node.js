exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      events: allMdx(filter: { fileAbsolutePath: { regex: "/events/" } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      docs: allMdx(filter: { fileAbsolutePath: { regex: "/docs/" } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors);
  }

  const events = result.data.events.nodes;
  const docs = result.data.docs.nodes;

  events.forEach(event => {
    actions.createPage({
      path: event.frontmatter.slug,
      matchPath: `/events/${event.frontmatter.slug}`,
      component: require.resolve("./src/templates/event-template.tsx"),
      context: {
        slug: event.frontmatter.slug,
      },
    });
  });

  docs.forEach(doc => {
    actions.createPage({
      path: doc.frontmatter.slug,
      matchPath: `/docs/${doc.frontmatter.slug}`,
      component: require.resolve("./src/templates/doc-template.tsx"),
      context: {
        slug: doc.frontmatter.slug,
      },
    });
  });
};
