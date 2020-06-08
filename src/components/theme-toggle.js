import React from "react"
import Toggle from 'react-toggle'
import useDarkMode from "use-dark-mode"

const Moon = () => (<svg className="fill-current" width="18" height="18" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1390 1303q-54 9-110 9-182 0-337-90T698 977t-90-337q0-192 104-357-201 60-328.5 229T256 896q0 130 51 248.5t136.5 204 204 136.5 248.5 51q144 0 273.5-61.5T1390 1303zm203-85q-94 203-283.5 324.5T896 1664q-156 0-298-61t-245-164-164-245-61-298q0-153 57.5-292.5t156-241.5T577 197.5 867 129q44-2 61 39 18 41-15 72-86 78-131.5 181.5T736 640q0 148 73 273t198 198 273 73q118 0 228-51 41-18 72 13 14 14 17.5 34t-4.5 38z"/></svg>)
const Sun = () => (<svg className="fill-current" width="18" height="18" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1472 896q0-117-45.5-223.5t-123-184-184-123T896 320t-223.5 45.5-184 123-123 184T320 896t45.5 223.5 123 184 184 123T896 1472t223.5-45.5 184-123 123-184T1472 896zm276 277q-4 15-20 20l-292 96v306q0 16-13 26-15 10-29 4l-292-94-180 248q-10 13-26 13t-26-13l-180-248-292 94q-14 6-29-4-13-10-13-26v-306l-292-96q-16-5-20-20-5-17 4-29l180-248L48 648q-9-13-4-29 4-15 20-20l292-96V197q0-16 13-26 15-10 29-4l292 94L870 13q9-12 26-12t26 12l180 248 292-94q14-6 29 4 13 10 13 26v306l292 96q16 5 20 20 5 16-4 29l-180 248 180 248q9 12 4 29z"/></svg>)

export default () => {
    const darkMode = useDarkMode(false);
    return (
        <div className="flex flex-row justify-between w-32 h-6 mt-6 text-foreground-secondary">
            <Sun />
            <Toggle icons={false} defaultChecked={darkMode.value} aria-label="theme toggle" onChange={darkMode.toggle} />
            <Moon/>
        </div>
    )
};
