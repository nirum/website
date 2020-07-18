import React from "react"
import { Link } from "gatsby"
export default ({ post }) => {
  return (
  <div className="text-foreground">
    <p><Link to={post.frontmatter.path}>
      <div className="flex flex-col pt-1 border-t-2 sm:flex-row border-brand">
        <div className="w-32 text-lg">{post.frontmatter.date}</div>
        <div className="text-lg font-semibold">{post.frontmatter.title}</div>
      </div>
    </Link></p>
  </div>
)}
