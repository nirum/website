import React from "react"
import { Button } from "./button"
import { Code, Document, Library, Links } from "./icons"
import { Link } from "gatsby"
import { join } from "path"

export default ({ pub }) => {
  const datePill = "bg-brand-secondary px-2 rounded-md text-foreground-primary font-semibold w-20 -mt-2"
  const iconSize = "3"
  return (
    <div className="mt-24">
      <div className="flex flex-col lg:-ml-24 lg:items-center lg:flex-row">
        <div className={datePill}>{pub.date}</div>
        <div className="mt-4 tracking-wider uppercase lg:ml-4 lg:-mt-2 text-foreground">{pub.location}</div>
      </div>
      <div>
        <p className="mt-2 font-sans text-xl font-semibold leading-tight tracking-tight text-foreground-primary">{pub.title}</p>
      </div>
        <p className="mt-2 font-sans leading-snug text-foreground">{pub.authors.join(", ")}</p>
        <div className="flex flex-row flex-wrap mt-2 space-x-1">
          {pub.url && (<a href={pub.url} aria-label="url"><Button><Links size={iconSize} /><span>URL</span></Button></a>)}
          {pub.pdf && (<a href={pub.pdf} aria-label="pdf"><Button><Document size={iconSize} /><span>PDF</span></Button></a>)}
          {pub.code && (<a href={pub.code} aria-label="code"><Button><Code size={iconSize} /><span>CODE</span></Button></a>)}
          {pub.bibtex && (<Link to={join("bibtex", pub.slug)}><Button><Library size={iconSize} /><span>BIB</span></Button></Link>)}
        </div>
        {pub.tweet && <div className="flex flex-row items-start justify-start w-full mt-2" dangerouslySetInnerHTML={{__html: pub.tweet}} />}
    </div>)
};
