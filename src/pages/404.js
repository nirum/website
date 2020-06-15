import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h4>Ruh roh</h4>
    <h1>404: Page Not Found</h1>
    <p className="text-xl mt-12 mb-4">Oops! The page you are looking for does not exist.</p>
    <p><Link className="button" to="/">Return Home</Link></p>
  </Layout>
)
