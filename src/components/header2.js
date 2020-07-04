import React from "react"
import { Link } from "gatsby"
import Toggle from "./theme-toggle"

export default () => {
    return (
        <header>
            <div className="h-3 gradient-bar"></div>
            <div className="flex flex-row justify-around h-32 mb-4 shadow-xl bg-foreground-primary">
                <div className="flex flex-col justify-center h-32 responsive-width">
                    <h1 className="text-4xl font-black tracking-tighter text-blue-100">Source Serif 48pt</h1>
                    <p className="-mt-2 font-serif text-lg italic text-blue-200">This is the subheading.</p>
                </div>
            </div>
        </header>
    )
};
