import React from "react"
import PubsData from "./publications.json"

import Layout from "../components/layout"
import PublicationCard from "../components/pubcard"

export default () => (
  <Layout>
    <h4>Last updated: March 20, 2020</h4>
    <h1>Selected Publications</h1>
    <p>For a full list of publications, visit <a href="https://scholar.google.com/citations?user=bEOT7ScAAAAJ">Google Scholar</a>.</p>
    <ul>
      {PubsData.map((d, i) => {
        return <PublicationCard key={`pub_${i}`} pub={d} />
      })}
    </ul>
  </Layout>
)