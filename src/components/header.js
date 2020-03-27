import React from "react"
import { Link } from "gatsby"

export default () => (
    <header className="bg-warm-grey-050 flex justify-around pt-6 pb-6 border-t-8 border-brand-light" >
        <div className="mb-12 responsive-width">
            <div class="flex flex-col font-sans items-start text-gray-600">
                <div className="text-warm-grey-900 font-semibold">
                    Niru Maheswaranathan
                </div>
                <nav className="flex text-warm-grey-600 mt-2" >
                    <Link activeClassName="header-active" className="header-link" to="/">Home</Link>
                    <Link activeClassName="header-active" className="header-link ml-4" partiallyActive={true} to="/research">Research</Link>
                    {/* <Link activeClassName="header-active" className="header-link ml-4" partiallyActive={true} to="/blog">Blog</Link> */}
                </nav>
            </div>
        </div>
    </header>
)