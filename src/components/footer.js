import React from "react"
import { Twitter, GitHub, Pinboard, Scholar } from "./icons"
import { Link } from "gatsby"
import Toggle from "./theme-toggle"

export default () => {

    // CSS
    const heading = "font-sans font-semibold text-foreground uppercase tracking-wide mb-4"
    const nolink = "border-0 -ml-8"
    const column = "flex flex-col justify-start space-y-2"

    return (
    <footer className="inset-x-0 bottom-0 mt-16 mb-16 border-t md:mt-32 border-foreground-secondary min-h-32 text-foreground-secondary ">
        <div className="grid gap-10 pl-12 m-auto mt-12 mb-6 sm:pl-0 sm:grid-cols-2 md:grid-cols-3 responsive-width">
            <div className={column}>
                <div className={heading}>Sitemap</div>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/blog">Blog</Link></div>
                <div><Link to="/research">Research</Link></div>
                <div><Link to="/code">Code</Link></div>
            </div>
            <div className={column}>
                <div className={heading}>Elsewhere</div>
                <a className={nolink} href="https://twitter.com/niru_m/">
                    <div className="flex flex-row items-center">
                        <Twitter size="6" />
                        <span className="px-2">@&#8202;niru_m</span>
                    </div>
                </a>
                <a className={nolink} href="https://scholar.google.com/citations?user=bEOT7ScAAAAJ">
                    <div className="flex flex-row items-center">
                        <Scholar size="6" />
                        <span className="px-2">Google Scholar</span>
                    </div>
                </a>
                <a className={nolink} href="https://www.github.com/nirum/">
                    <div className="flex flex-row items-center">
                        <GitHub size="6" />
                        <span className="px-2">github.com/nirum</span>
                    </div>
                </a>
                <a className={nolink} href="https://pinboard.in/u:nirum/">
                    <div className="flex flex-row items-center">
                        <Pinboard size="6" />
                        <span className="px-2">pinboard.com/u:nirum</span>
                    </div>
                </a>
            </div>
            <div className={column}>
                <div className={heading}>&copy; 2015-2020</div>
                <Toggle />
            </div>
        </div>
    </footer>
    )
};
