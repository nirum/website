import React from "react"
import { Link } from "gatsby"

export default () => (
    <header className="flex justify-around pt-6 pb-6 border-t-8 bg-gray-050 dark-mode:bg-gray-900 border-brand-lighter dark-mode:border-brand" >
        <div className="mb-12 responsive-width">
            <div className="flex flex-col items-start font-sans text-gray-600">
                <div className="font-semibold text-gray-900 dark-mode:text-gray-100">
                    Niru Maheswaranathan
                </div>
                <nav className="flex mt-2 text-gray-600 dark-mode:text-gray-400" >
                    <Link activeClassName="header-active" className="header-link" to="/">Home</Link>
                    <Link activeClassName="header-active" className="ml-4 header-link" partiallyActive={true} to="/research">Research</Link>
                    <Link activeClassName="header-active" className="ml-4 header-link" partiallyActive={true} to="/code">Code</Link>
                    {/* <Link activeClassName="header-active" className="ml-4 header-link" partiallyActive={true} to="/blog">Blog</Link> */}
                </nav>
            </div>
        </div>
    </header>
)