import React from "react"
import { Link } from "gatsby"

export default () => (
    <header className="bg-gray-050 dark-mode:bg-gray-900 flex justify-around pt-6 pb-6 border-t-8 border-brand-lighter dark-mode:border-brand" >
        <div className="mb-12 responsive-width">
            <div className="flex flex-col font-sans items-start text-gray-600">
                <div className="text-gray-900 dark-mode:text-gray-100 font-semibold">
                    Niru Maheswaranathan
                </div>
                <nav className="flex text-gray-600 dark-mode:text-gray-400 mt-2" >
                    <Link activeClassName="header-active" className="header-link" to="/">Home</Link>
                    <Link activeClassName="header-active" className="header-link ml-4" partiallyActive={true} to="/research">Research</Link>
                    <Link activeClassName="header-active" className="header-link ml-4" partiallyActive={true} to="/code">Code</Link>
                    {/* <Link activeClassName="header-active" className="header-link ml-4" partiallyActive={true} to="/blog">Blog</Link> */}
                </nav>
            </div>
        </div>
    </header>
)