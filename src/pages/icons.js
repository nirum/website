import React from "react"
import Layout from "../components/layout"
// import Icon, { sun, moon, star } from "../components/icons"
import Icon from "../components/icons"

export default () => (
  <Layout>
      <h1>Hello world</h1>
      <h2>List of icons:</h2>

      <h3>Research:</h3>
      <div className="text-gray-900">
        <h4>link</h4>
        <div className="w-8 h-8">
            <Icon name="link" size="32"/>
        </div>
        <div className="w-8 h-8">
            <Icon name="link" size="16"/>
        </div>
        <div className="w-8 h-8">
            <Icon name="link" size="8"/>
        </div>
        <Icon name="link" size="16"/>
        <Icon name="link" size="8"/>
        <h4>code</h4>
        <Icon name="code" />
        <h4>pdf</h4>
        <Icon name="pdf" />
      </div>

      <h3>GitHub:</h3>
      <div className="text-gray-900">
        <h4>gh_bookmark</h4>
        <Icon name="gh_bookmark" />
        <h4>gh_fork</h4>
        <Icon name="gh_fork" />
        <h4>gh_repo</h4>
        <Icon name="gh_repo" />
      </div>

      <h3>Social:</h3>
      <div className="text-gray-900">
        <h4>twitter</h4>
        <Icon name="twitter" />
        <h4>pinboard</h4>
        <Icon name="pinboard" />
        <h4>github</h4>
        <Icon name="github" />
        <h4>scholar</h4>
        <Icon name="scholar" />
      </div>

      <h3>UI:</h3>
      <div className="text-gray-900">
        <h4>sun</h4>
        <Icon name="sun" />
        <h4>moon</h4>
        <Icon name="moon" />
        <h4>star</h4>
        <Icon name="star" />
      </div>
  </Layout>
)