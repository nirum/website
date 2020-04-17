import React from "react"
// import Button from "../components/button"
// import Icon, { twitter, github, pinboard, scholar } from "../components/icons"

const twitter = (<svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" aria-label="Twitter" viewBox="0 0 512 512"><path d="M437 152a72 72 0 01-40 12 72 72 0 0032-40 72 72 0 01-45 17 72 72 0 00-122 65 200 200 0 01-145-74 72 72 0 0022 94 72 72 0 01-32-7 72 72 0 0056 69 72 72 0 01-32 1 72 72 0 0067 50 200 200 0 01-105 29 200 200 0 00309-179 200 200 0 0035-37"/></svg>)
const github = (<svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" aria-label="GitHub" viewBox="0 0 512 512"><path d="M335 449c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z" /></svg>)
const pinboard = (<svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" aria-label="Pinboard" viewBox="0 0 512 512"><path d="M182 56L56 185l57-3 102 126-12 68 75-77 178 157-156-175 78-83-75 18-121-111"/></svg>)
const scholar = (<svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" aria-label="Google Scholar" viewBox="0 0 512 512"><path d="M213 111l-107 94h69c5 45 41 64 78 67-7 18-4 27 7 39-43 1-103 26-103 67 4 45 63 54 92 54 38 1 81-19 90-54 4-35-10-54-31-71-23-18-28-28-21-40 15-17 35-27 39-51 2-17-2-28-6-43l45-38-1 16c-3 2-5 6-5 9v103c2 13 22 11 23 0V160c0-3-2-7-5-8v-25l16-16zm58 141c-61 10-87-87-38-99 56-11 83 86 38 99zm-5 73c60 13 61 63 10 78-44 9-82-4-81-30 0-25 35-48 71-48z"/></svg>)

const icons = [
  {path: twitter, text: "Twitter", url: "https://twitter.com/niru_m/"},
  {path: scholar, text: "Google Scholar", url: "https://twitter.com/niru_m/"},
  {path: github, text: "GitHub", url: "https://twitter.com/niru_m/"},
  {path: pinboard, text: "Pinboard", url: "https://twitter.com/niru_m/"},
]

const Button = ({ icon, text, url }) => (
  <a href={url} className="px-2 py-1 m-2 border rounded-lg shadow-sm border-foreground-ternary hover:text-brand-primary hover:bg-brand-ternary hover:border-brand-ternary">
    <div className="flex flex-row items-center">
      {icon}
      <span className="px-1">{text}</span>
    </div>
  </a>
)


export default () => (
    <div className="flex flex-col items-start mt-8 -m-2 sm:flex-row text-foreground">
      {icons.map((d, i) => {
        return <Button key={i} url={d.url} text={d.text} icon={d.path} />
        // return <a key={`button_${i}`} href={d.url} className="m-1"><Button><Icon>{d.path}</Icon><span>{d.text}</span></Button></a>
      })}
      {/* icon="twitter" text="Twitter" href="https://twitter.com/niru_m/" /> */}
      {/* <Button className="m-1" icon="scholar" text="Google Scholar" href="https://scholar.google.com/citations?user=bEOT7ScAAAAJ" /> */}
      {/* <Button className="m-1" icon="github" text="GitHub" href="https://github.com/nirum/" /> */}
      {/* <Button className="m-1" icon="pinboard" text="Pinboard" href="https://pinboard.in/u:nirum/" /> */}
    </div>
)

      // {PubsData.map((d, i) => {
      //   return <PublicationCard key={`pub_${i}`} pub={d} />
      // })}