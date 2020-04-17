import React from "react"
import { Link } from "gatsby"
import Toggle from "./theme-toggle"

export default () => {
    // CSS
    const activeLink = "bg-brand-ternary text-brand-primary"
    const link = "ml-1 px-2 py-1 rounded-lg text-foreground-secondary hover:bg-brand-ternary cursor-pointer"

    return (
        <header className="flex justify-around pt-2 pb-6 border-t-8 bg-background-primary border-brand" >
            <div className="flex flex-wrap items-center justify-between mb-12 responsive-width">
                <nav className="flex mt-6 -ml-1 font-sans font-semibold" >
                    <Link activeClassName={activeLink} className={link} to="/">Home</Link>
                    <Link activeClassName={activeLink} className={link} partiallyActive={true} to="/research">Research</Link>
                    <Link activeClassName={activeLink} className={link} partiallyActive={true} to="/code">Code</Link>
                    <Link activeClassName={activeLink} className={link} partiallyActive={true} to="/icons">Icons</Link>
                </nav>
                <Toggle />
            </div>
        </header>
    )
};