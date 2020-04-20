import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Template({ data }) {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <div>
        <div>
          <h4>{frontmatter.date}</h4>
          <h1>{frontmatter.title}</h1>
          <div
            className="mt-8"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
