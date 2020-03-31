import React from "react"
import Icon from "../components/icons"

export default ({ icon, text, href, className = '' }) => (
    <a href={href} className={`text-gray-800 dark-mode:text-gray-200 shadow bg-transparent border border-gray-500 font-bold py-1 px-2 rounded ${className}`.trim()}>
        <div className="inline-flex items-center">
            <Icon name={icon} className="w-4 h-4 mr-1" />
            <span>{text}</span>
        </div>
    </a>
);