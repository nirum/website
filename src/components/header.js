import React from "react"
import { Link } from "gatsby"

export default () => (
    <header className="bg-warm-grey-050 flex justify-around pt-6 pb-6 border-t-8 border-brand-light" >
        <div className="lg:w-192 md:w-9/12 md:px-0 sm:w-full sm:px-12 mb-12">
            <div class="flex flex-col font-sans items-start text-gray-600">
                <div className="text-warm-grey-900 font-semibold">
                    Niru Maheswaranathan
                </div>
                <nav className="flex text-warm-grey-600 mt-2" >
                    <Link activeClassName="header-active" className="header-link" to="/">Home</Link>
                    <Link activeClassName="header-active" className="header-link ml-4" partiallyActive={true} to="/about">About</Link>
                    <Link activeClassName="header-active" className="header-link ml-4" partiallyActive={true} to="/blog">Blog</Link>
                    <Link activeClassName="header-active" className="header-link ml-4" partiallyActive={true} to="/research">Research</Link>
                </nav>
            </div>
        </div>
    </header>
)