import React from "react"
import { Link } from "gatsby"

export default () => {
    return (
        <header>
            <div className="h-2 gradient-bar"></div>
            <div className="flex flex-row justify-around mt-8 lg:justify-start lg:mt-0">
                <nav className="flex flex-row items-center space-x-4 font-sans text-sm sm:text-md md:text-lg lg:space-x-0 lg:items-start lg:text-lg responsive-width lg:w-auto lg:mt-8 lg:ml-8 lg:space-y-1 lg:flex-col lg:absolute text-foreground-secondary">
                    <Link to="/"><div className="w-8 h-8 rounded-full lg:mb-4 bg-brand-primary"></div></Link>
                    <Link to="/about">About</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/research">Research</Link>
                    <Link to="/code">Code</Link>
                </nav>
            </div>
        </header>
    )
};
