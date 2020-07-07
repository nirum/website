import React from "react"
import { Link } from "gatsby"

export const ButtonLink = ({ url, children }) => (
  <Link to={url} className="px-2 py-1 m-1 border rounded-lg shadow-sm border-foreground hover:text-brand-primary hover:bg-foreground-secondary hover:border-brand">
    <div className="flex flex-row items-center">
        {children}
    </div>
  </Link>
)

export const Button = ({ url, children }) => (
  <a href={url} className="px-2 py-1 m-1 border rounded-lg shadow-sm border-foreground hover:text-brand-primary hover:bg-foreground-secondary hover:border-brand">
    <div className="flex flex-row items-center">
        {children}
    </div>
  </a>
)