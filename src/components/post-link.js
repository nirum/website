import React from "react"
import { Link } from "gatsby"
export default ({ post }) => {
  return (
  <div className="mt-8 sm:mt-4 text-foreground">
    <Link to={post.frontmatter.path}>
      <div className="flex flex-col sm:flex-row border-t-2 border-brand pt-1 mt-8">
        <div className="w-32 text-lg">{post.frontmatter.date}</div>
        <div className="font-semibold text-lg">{post.frontmatter.title}</div>
      </div>
    </Link>
  </div>
)}
