import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Button } from "./button"
import { Back } from "./icons"
import { Link } from "gatsby"

export default function Template({ data, pageContext }) {
    const { title, bibtex } = data.publicationsYaml;
    return (
        <Layout>
        <div>
            <h2 className="mt-0">{title}</h2>
            <div className="mt-8">
                <p className="font-mono text-sm leading-snug text-foreground" style={{textIndent: "-2em", marginLeft: "2em"}}>{bibtex}</p>
            </div>
            <div className="flex mt-8">
                <Link to="/research"><Button><Back size="4" /><span>Back to Research</span></Button></Link>
            </div>
        </div>
        </Layout>
    )
};

export const publicationQuery = graphql`
  query($slug: String!) {
    publicationsYaml(slug: {eq: $slug}) {
        title
        bibtex
    }
  }
`
