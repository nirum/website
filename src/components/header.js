import React from "react"
import { Link } from "gatsby"

export default () => {
    const activeLink = "text-foreground-primary hover:text-foreground-primary"
    return (
        <header>
            <div className="h-2 gradient-bar"></div>
            <div className="flex flex-row justify-around mt-8 lg:justify-start lg:mt-0">
                <nav className="flex flex-row items-center space-x-4 font-sans text-sm sm:text-md md:text-lg lg:space-x-0 lg:items-start lg:text-lg responsive-width lg:w-auto lg:mt-8 lg:ml-8 lg:space-y-1 lg:flex-col lg:absolute text-foreground-secondary">
                    <Link activeClassName={activeLink} to="/"><div className="w-8 h-8 rounded-full lg:mb-4 bg-brand-primary"></div></Link>
                    <Link activeClassName={activeLink} partiallyActive={true} to="/about">About</Link>
                    <Link activeClassName={activeLink} partiallyActive={true} to="/blog">Blog</Link>
                    <Link activeClassName={activeLink} partiallyActive={true} to="/research">Research</Link>
                    <Link activeClassName={activeLink} partiallyActive={true} to="/code">Code</Link>
                </nav>
            </div>
        </header>
    )
};
