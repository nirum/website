import React from "react"
import { Link } from "gatsby"

export default () => {
    const activeLink = "text-foreground-primary hover:text-foreground-primary"
    return (
        <header>
            <div className="h-2 gradient-bar"></div>
            <div className="flex flex-row justify-around mt-8 xl:justify-start xl:mt-0">
                <nav className="flex flex-row items-center space-x-4 font-sans text-sm font-semibold tracking-tight sm:text-lg xl:space-x-0 xl:items-start responsive-width xl:w-auto xl:mt-8 xl:ml-8 xl:space-y-1 xl:flex-col xl:absolute text-foreground-secondary">
                    <Link activeClassName={activeLink} to="/">
                        <div className="flex flex-row items-center justify-around w-8 h-8 rounded-full xl:mb-4 text-foreground-primary logo bg-brand-secondary">
                            <div className="text-4xl text-center">⚛</div>
                        </div>
                    </Link>
                    <div class="flex-grow"></div>
                    <Link activeClassName={activeLink} partiallyActive={true} to="/about">About</Link>
                    <Link activeClassName={activeLink} partiallyActive={true} to="/blog">Blog</Link>
                    <Link activeClassName={activeLink} partiallyActive={true} to="/research">Research</Link>
                    <Link activeClassName={activeLink} partiallyActive={true} to="/code">Code</Link>
                </nav>
            </div>
        </header>
    )
};
