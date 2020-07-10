import React from "react"
import { Link } from "gatsby"

export const ButtonLink = ({ url, children }) => (
  <Link to={url} className="px-2 py-1 m-1 rounded-none shadow-sm text-foreground-primary hover:text-foreground-primary hover:bg-brand-secondary">
    <div className="flex flex-row items-center">
        {children}
    </div>
  </Link>
)

export const Button = ({ url, children }) => (
  <a href={url} className="px-2 py-1 m-1 border rounded-none shadow-sm border-brand text-foreground-primary hover:text-foreground-primary hover:bg-brand-secondary">
    <div className="flex flex-row items-center">
        {children}
    </div>
  </a>
)