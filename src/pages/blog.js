import React from "react"
import { graphql } from "gatsby"

import PostLink from "../components/post-link"
import Layout from "../components/layout"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => (<li><PostLink key={edge.node.id} post={edge.node} /></li>))
  return (
    <Layout>
      <h4>Writing</h4>
      <h1>Blog posts</h1>
      <ul>
        {Posts}
      </ul>
    </Layout>
  )
}
export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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