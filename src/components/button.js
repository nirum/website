import React from "react"

export const Button = ({ children }) => (
  <button className="inline-flex items-center px-2 py-0 font-semibold border rounded-md shadow-xs group hover:bg-brand-secondary text-foreground hover:text-foreground-primary border-foreground-secondary hover:border-brand-secondary">
    <div className="flex flex-row items-center space-x-1 font-sans">
      {children}
    </div>
  </button>
)