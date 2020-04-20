const path = require(`path`)

// Builds a static page for each blog post.
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const post = path.resolve("src/components/blog-post.js")
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild("Error while running blog post GraphQL query.")
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: post,
      context: {}, // additional data can be passed via context
    })
  })
}

// Builds a page containing bibtex for every publication.
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const bibtex = path.resolve("src/components/bibtex.js")
  const result = await graphql(`
  {
    allPublicationsYaml {
      edges {
        node {
          slug
        }
      }
    }
  }
  `)
  if (result.errors) {
    reporter.panicOnBuild("Error while running blog post GraphQL query.")
    return
  }
  result.data.allPublicationsYaml.edges.forEach(({ node }) => {
    createPage({
      path: path.join("research", "bibtex", node.slug),
      component: bibtex,
      context: {slug: node.slug},
    })
  });
}