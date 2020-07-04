import React from "react"
import { Twitter, GitHub, Pinboard, Scholar } from "./icons"
import { Link } from "gatsby"
import Toggle from "./theme-toggle"

export default () => {

    // CSS
    const heading = "font-sans font-semibold text-gray-100 pb-2"
    const link = "border-b border-gray-600 hover:text-blue-300 hover:border-blue-800";
    const pill = "-ml-2 px-2 py-1 rounded-lg hover:bg-blue-800 hover:text-blue-100 cursor-pointer border-0"
    const nolink = "border-0 hover:text-blue-100"

    return (
        <footer className="border-2 border-blue-200">
            <p>Footer</p>
            <Toggle />
        </footer>
    )
};
