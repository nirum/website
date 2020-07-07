import React from "react";
import { graphql } from "gatsby"
import Layout from "../components/layout";
import PublicationCard from "../components/publication-card";

export default ({data}) => {
  const most_recent = data.allFile.edges[0].node.mtime;
  const Publications = data.allPublicationsYaml.edges
    .map(p => (<PublicationCard key={p.node.id} pub={p.node} />))
  return (
    <Layout>
      <h1 className="text-2xl font-black tracking-tighter sm:text-3xl md:text-4xl text-gradient">Selected Publications</h1>
      <div className="font-serif text-lg italic text-foreground-secondary">For a full list of publications, visit <a href="https://scholar.google.com/citations?user=bEOT7ScAAAAJ">Google Scholar</a>.</div>
      <div>{Publications}</div>
    </Layout>
  )
};

export const publicationsQuery = graphql`
  query {
    allPublicationsYaml(sort: {order: DESC, fields: date}) {
      edges {
        node {
          id
          url
          title
          bibtex
          pdf
          location
          date(formatString: "MMM YYYY")
          code
          authors
          slug
          tweet
        }
      }
    }
    allFile(filter: {sourceInstanceName: {eq: "publications"}}, sort: {fields: mtimeMs, order: DESC}, limit: 1) {
      edges {
        node {
          mtime(fromNow: true)
        }
      }
    }
  }
`
