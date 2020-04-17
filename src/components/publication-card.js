import React from "react";
import Button from "./button";
import moment from "moment";
import { Code, Document, Library, Link } from "./icons";

export default ({ pub }) => {
  const datePill = "bg-brand-secondary px-2 rounded-md text-background-primary font-semibold w-20"
  const buttonText = "uppercase tracking-wide mx-1"
  return (
    <div className="mt-16">
      <div className="flex flex-col lg:-ml-24 lg:items-center lg:flex-row">
        <div className={datePill}>{moment(pub.date).format("MMM YYYY")}</div>
        <div className="mt-2 text-lg tracking-wide uppercase lg:ml-4 lg:-mt-2 text-foreground-secondary">{pub.location}</div>
      </div>
      <div>
        <p className="mt-2 font-sans text-xl font-semibold leading-tight tracking-tight text-foreground">{pub.title}</p>
      </div>
        <p className="mt-2 font-sans leading-snug text-foreground-secondary">{pub.authors.join(", ")}</p>
        <div className="flex mt-2 -mx-1 text-foreground">
          {pub.url && (<Button url={pub.url}><Link size="6" /><span className={buttonText}>URL</span></Button>)}
          {pub.pdf && (<Button url={pub.pdf}><Document size="6" /><span className={buttonText}>PDF</span></Button>)}
          {pub.code && (<Button url={pub.code}><Code size="6" /><span className={buttonText}>CODE</span></Button>)}
        </div>
    </div>)
};
