import React from "react"
import { Twitter, GitHub, Pinboard, Scholar } from "./icons"
import Button from "./button"

const icons = [
  {icon: Twitter, text: "Twitter", url: "https://twitter.com/niru_m/"},
  {icon: Scholar, text: "Google Scholar", url: "https://twitter.com/niru_m/"},
  {icon: GitHub, text: "GitHub", url: "https://twitter.com/niru_m/"},
  {icon: Pinboard, text: "Pinboard", url: "https://twitter.com/niru_m/"},
]

export default () => (
    <div className="flex flex-col items-start mt-8 -m-1 sm:flex-row text-foreground">
      {icons.map((d, i) => {
        return (
          <Button key={i} url={d.url} text={d.text} icon={d.path}>
            <d.icon size="8" />
            <span className="pr-1">{d.text}</span>
          </Button>
        )
      })}
    </div>
)