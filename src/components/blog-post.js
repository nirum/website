import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import { graphql } from "gatsby"
import { Button } from "./button"
import { Link } from "gatsby"
import { Back } from "./icons"

export default function Template({ data }) {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <div>
        <article>
          <Title text={frontmatter.title} />
          <h4>{frontmatter.date}</h4>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
        <div className="mt-16">
            <Link to="/blog"><Button><Back size="4" /><span>Back to Blog</span></Button></Link>
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
