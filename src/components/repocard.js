import React from "react"
// import Button from "./button"

export default ({ repo }) => (
  <div className="border-gray-400 border-t-2 pt-4 mt-8">
    <p>{repo.name}</p>
      {/* <p className="font-sans lightupper">{pub.year}&nbsp;&bull;&nbsp;{pub.location}</p>
      <p className="font-sans leading-tight mt-2 text-xl tightbold text-gray-700 dark-mode:text-gray-200">{pub.title}</p>
      <p className="font-sans leading-snug text-gray-500 mt-2">{pub.authors.join(", ")}</p>
      <div className="flex mt-4 -mx-1">
        {pub.url && <Button icon="link" text="URL" href={pub.url} className="mx-1" />}
        {pub.pdf && <Button icon="pdf" text="PDF" href={pub.pdf} className="mx-1" />}
        {pub.code && <Button icon="code" text="CODE" href={pub.code} className="mx-1" />}
      </div> */}
  </div>
)

