import React from "react"
// import Link from "next/link"
import ActiveLink from "../components/active-link"

export default function Header() {
    return (
        <header>
            <div className="w-full py-1 bg-gradient-to-r from-blue-600 via-purple-700 to-purple-500 "></div>
            <ul className="mt-2 border-2 border-blue-600">
                <li><ActiveLink href="/" activeClassName="text-red-400"><a>Home</a></ActiveLink></li>
                <li><ActiveLink href="/blog" activeClassName="text-red-400"><a>Blog</a></ActiveLink></li>
                <li><ActiveLink href="/research" activeClassName="text-red-400"><a>Research</a></ActiveLink></li>
                <li><ActiveLink href="/code" activeClassName="text-red-400"><a>Code</a></ActiveLink></li>
            </ul>
        </header>
    )
};
