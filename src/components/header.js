import React from "react"
import { Link } from "gatsby"
import Toggle from "./theme-toggle"

export default () => {
    // CSS
    const activePill = "bg-brand-ternary text-brand-primary"
    const pill = "ml-1 px-2 py-1 rounded-lg text-foreground-secondary hover:bg-brand-ternary cursor-pointer"

    return (
        <header className="flex justify-around pt-2 pb-6 border-t-8 bg-background-primary border-brand-secondary" >
            <div className="flex flex-col-reverse justify-between mb-12 sm:items-center sm:flex-row responsive-width">
                <nav className="flex mt-6 -ml-3 font-sans font-semibold" >
                    <Link activeClassName={activePill} className={pill} to="/">Home</Link>
                    <Link activeClassName={activePill} className={pill} partiallyActive={true} to="/research">Research</Link>
                    <Link activeClassName={activePill} className={pill} partiallyActive={true} to="/code">Code</Link>
                    {/* <Link activeClassName={activePill} className={link} partiallyActive={true} to="/blog">Blog</Link> */}
                </nav>
                <Toggle />
            </div>
        </header>
    )
};