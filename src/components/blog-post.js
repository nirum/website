import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { ButtonLink } from "./button"
import { Back } from "./icons"

export default function Template({ data }) {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <div>
        <h4>{frontmatter.date}</h4>
        <h1>{frontmatter.title}</h1>
        <div className="mt-8" dangerouslySetInnerHTML={{ __html: html }} />
        <div className="flex mt-8 text-brand-primary -ml-1">
            <ButtonLink url="/blog"><Back size="6" /><span className="mx-1 tracking-wide uppercase">back to blog</span></ButtonLink>
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
