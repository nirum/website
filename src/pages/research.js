import React from "react";
import { graphql } from "gatsby"
import Layout from "../components/layout";
import Title from "../components/title";
import PublicationCard from "../components/publication-card";

export default ({data}) => {
  // const most_recent = data.allFile.edges[0].node.mtime;
  const Publications = data.allPublicationsYaml.edges
    .map(p => (<PublicationCard key={p.node.id} pub={p.node} />))
  return (
    <Layout>
      <Title text="Selected Publications" />
      <p><h4>For a full list of publications, see <a href="https://scholar.google.com/citations?user=bEOT7ScAAAAJ">Google Scholar</a>.</h4></p>
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
