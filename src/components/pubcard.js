import React from "react"
import Button from "./button"

export default ({ pub }) => (
  <div className="pt-4 mt-8 border-t-2 border-gray-400">
      <p className="font-sans lightupper">{pub.year}&nbsp;&bull;&nbsp;{pub.location}</p>
      <p className="mt-2 font-sans text-xl leading-tight text-gray-700 tightbold dark-mode:text-gray-200">{pub.title}</p>
      <p className="mt-2 font-sans leading-snug text-gray-500">{pub.authors.join(", ")}</p>
      <div className="flex mt-4 -mx-1">
        {pub.url && <Button icon="link" text="URL" href={pub.url} className="mx-1" />}
        {pub.pdf && <Button icon="pdf" text="PDF" href={pub.pdf} className="mx-1" />}
        {pub.code && <Button icon="code" text="CODE" href={pub.code} className="mx-1" />}
      </div>
  </div>
)

