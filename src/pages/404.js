import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"

import { Button } from "../components/button"
import { Back } from "../components/icons"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <Title text="404: Page Not Found" />
    <h4>Ruh roh</h4>
    <article>
      <p className="my-12 text-xl">Oops! The page you are looking for does not exist.</p>
      <Link to="/"><Button><Back size="4" /><span>Return Home</span></Button></Link>
    </article>
  </Layout>
)
