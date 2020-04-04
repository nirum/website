import React from "react"
import Button from "../components/button"

export default () => (
    <div className="flex flex-col sm:flex-row items-start mt-8 -m-1">
      <Button className="m-1" icon="twitter" text="Twitter" href="https://twitter.com/niru_m/" />
      <Button className="m-1" icon="scholar" text="Google Scholar" href="https://scholar.google.com/citations?user=bEOT7ScAAAAJ" />
      <Button className="m-1" icon="github" text="GitHub" href="https://github.com/nirum/" />
      <Button className="m-1" icon="pinboard" text="Pinboard" href="https://pinboard.in/u:nirum/" />
    </div>
)