const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Builds a static page for each blog post.
  const post = path.resolve("src/components/blog-post.js")
  const blogposts = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        limit: 100
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
  if (blogposts.errors) {
    reporter.panicOnBuild("Error while running blog post GraphQL query.")
    return
  }
  blogposts.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: post,
      context: {}, // additional data can be passed via context
    })
  })

  // Builds a page containing bibtex for every publication.
  const bibtex = path.resolve("src/components/bibtex.js")
  const pubs = await graphql(`
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
  if (pubs.errors) {
    reporter.panicOnBuild("Error while running blog post GraphQL query.")
    return
  }
  pubs.data.allPublicationsYaml.edges.forEach(({ node }) => {
    createPage({
      path: path.join("research", "bibtex", node.slug),
      component: bibtex,
      context: {slug: node.slug},
    })
  });
}
