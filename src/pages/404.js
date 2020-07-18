import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"

export default () => (
  <Layout>
    <Title text="404: Page Not Found" />
    <h4>Ruh roh</h4>
    <article>
      <p className="mt-12 mb-12 text-xl">Oops! The page you are looking for does not exist.</p>
      <p><Link to="/">Return Home</Link></p>
    </article>
  </Layout>
)
