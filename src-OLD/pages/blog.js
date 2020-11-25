import React from "react"
import { graphql } from "gatsby"

import PostLink from "../components/post-link"
import Layout from "../components/layout"

export default ({data: {allMarkdownRemark: { edges }}}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => (<li><PostLink key={edge.node.id} post={edge.node} /></li>))
  return (
    <Layout>
      <div className="flex flex-row items-start">
        <h1>Blog Roll</h1>
      </div>
      <h4>Thoughts on research, data visualization, technology, and design.</h4>
      <ul className="mt-16 space-y-8">
        {Posts}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { fileAbsolutePath: {regex : "\/blog/"} },
      ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
