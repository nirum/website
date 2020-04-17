import React from "react"

export default ({ children }) => (
    <button className="px-2 py-1 font-bold bg-transparent border border-gray-500 rounded shadow text-fg-primary">
        <div className="inline-flex items-center">
            { children }
        </div>
    </button>
);