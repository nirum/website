import React from "react";
import Layout from "../components/layout";
import PublicationCard from "../components/publication-card";
import moment from "moment";

export default ({data}) => {
  const most_recent = moment(Math.max.apply(null, data.allFile.edges.map(p => new Date(p.node.mtime))));
  console.log(most_recent)
  const Publications = data.allPublicationsYaml.edges
    .map(p => (<PublicationCard key={p.node.id} pub={p.node} />))
  return (
    <Layout>
      <h4>Last updated: {most_recent.fromNow()}</h4>
      <h1>Selected Publications</h1>
      <p>For a full list of publications, visit <a href="https://scholar.google.com/citations?user=bEOT7ScAAAAJ">Google Scholar</a>.</p>
      <div>{Publications}</div>
    </Layout>
  )
};

export const query = graphql`
  query {
    allPublicationsYaml(sort: {order: DESC, fields: date}) {
      edges {
        node {
          id
          url
          title
          pdf
          location
          date
          code
          authors
        }
      }
    }
    allFile(filter: {sourceInstanceName: {eq: "publications"}}) {
      edges {
        node {
          mtime
        }
      }
    }
  }
`