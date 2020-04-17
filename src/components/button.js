import React from "react"

export default ({ url, children }) => (
  <a href={url} className="px-1 m-1 border rounded-lg shadow-sm border-foreground-ternary hover:text-brand-primary hover:bg-brand-ternary hover:border-brand-ternary">
    <div className="flex flex-row items-center">
        {children}
    </div>
  </a>
)