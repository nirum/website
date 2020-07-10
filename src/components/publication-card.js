import React from "react"
import { Button, ButtonLink } from "./button"
import { Code, Document, Library, Link } from "./icons"
import { join } from "path"

export default ({ pub }) => {
  const datePill = "bg-brand-secondary px-2 rounded-md text-foreground-primary font-semibold w-20 -mt-2"
  const buttonText = "uppercase tracking-wide mx-1 text-sm"
  const iconSize = "3"
  return (
    <div className="mt-24">
      <div className="flex flex-col lg:-ml-24 lg:items-center lg:flex-row">
        <div className={datePill}>{pub.date}</div>
        <div className="mt-4 text-base tracking-wide uppercase lg:ml-4 lg:-mt-2 text-foreground">{pub.location}</div>
      </div>
      <div>
        <p className="mt-2 font-sans text-xl font-semibold leading-tight tracking-tight text-foreground-primary">{pub.title}</p>
      </div>
        <p className="mt-2 font-sans leading-snug text-foreground">{pub.authors.join(", ")}</p>
        <div className="flex flex-row flex-wrap mt-2 -mx-1">
          {pub.url && (<Button url={pub.url}><Link size={iconSize} /><span className={buttonText}>URL</span></Button>)}
          {pub.pdf && (<Button url={pub.pdf}><Document size={iconSize} /><span className={buttonText}>PDF</span></Button>)}
          {pub.code && (<Button url={pub.code}><Code size={iconSize} /><span className={buttonText}>CODE</span></Button>)}
          {pub.bibtex && (<ButtonLink url={join("bibtex", pub.slug)}><Library size={iconSize} /><span className={buttonText}>BIBTEX</span></ButtonLink>)}
        </div>
        {pub.tweet && <div className="flex flex-row items-center justify-start w-full mt-2" dangerouslySetInnerHTML={{__html: pub.tweet}} />}
    </div>)
};
