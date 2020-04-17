import React from "react"
import Button from "../components/button"
import Icon, { twitter, github, pinboard, scholar } from "../components/icons"

const icons = [
  {path: twitter, text: "Twitter", url: "https://twitter.com/niru_m/"},
  {path: scholar, text: "Google Scholar", url: "https://twitter.com/niru_m/"},
  {path: github, text: "GitHub", url: "https://twitter.com/niru_m/"},
  {path: pinboard, text: "Pinboard", url: "https://twitter.com/niru_m/"},
]

export default () => (
    <div className="flex flex-col items-start mt-8 -m-1 sm:flex-row">
      {icons.map((d, i) => {
        return <a key={`button_${i}`} href={d.url} className="m-1"><Button><Icon>{d.path}</Icon><span>{d.text}</span></Button></a>
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