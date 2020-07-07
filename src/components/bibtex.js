import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { ButtonLink } from "./button"
import { Back } from "./icons"

export default function Template({ data, pageContext }) {
    const { title, bibtex } = data.publicationsYaml;
    return (
        <Layout>
        <div>
            <h1 className="font-sans text-xl font-semibold leading-tight tracking-tight text-foreground">{title}</h1>
            <div className="mt-8">
                <p className="font-mono text-sm leading-snug text-foreground-secondary" style={{textIndent: "-2em", marginLeft: "2em"}}>{bibtex}</p>
            </div>
            <div className="flex mt-8 text-brand">
                <ButtonLink url="/research"><Back size="6" /><span className="mx-1 tracking-wide uppercase">back to research</span></ButtonLink>
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
