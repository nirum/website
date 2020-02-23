import React from "react"
import PubsData from "./publications.json"

import Layout from "../components/layout"

export default () => (
  <Layout>
    <h4>Last updated: February 23, 2020</h4>
    <h1>Selected Publications</h1>
    <ul>
      {PubsData.map((d, i) => {
        return <li key={`pub_${i}`}>{d.title}</li>
      })}
    </ul>
  </Layout>
)