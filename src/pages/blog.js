import React from "react"
import { graphql } from "gatsby"

import PostLink from "../components/post-link"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">{Posts}</div>
      <Footer />
    </div>
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
