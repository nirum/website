import React from "react"
export default ({ repos }) => (
  <div>
      <h2>Repositories</h2>
      <p>{repos.length} Repositories.</p>
  </div>
)

//   const Posts = edges
    // .filter(edge => !!edge.node.frontmatter.date)
    // .map(edge => (<li><PostLink key={edge.node.id} post={edge.node} /></li>))