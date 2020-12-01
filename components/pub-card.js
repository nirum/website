import Link from "next/link"
import { join } from "path"

// export default function PubCard({title, authors, ...props}) {
//     return (
//         <div className="py-4 my-2 border-4 border-red-800">
//             <h2>{title}</h2>
//             <div>{authors.join(", ")}</div>
//         </div>
//     )
// }

export default ({ ...pub }) => {
    const datePill = "bg-brand-secondary px-2 rounded-md text-foreground-primary font-semibold w-20 -mt-2"
    const iconSize = "3"
    return (
      <div className="mt-24 border-4 border-red-800">
        <div className="flex flex-col lg:items-center lg:flex-row">
          <div className={datePill}>{pub.date}</div>
          <div className="mt-4 tracking-wider uppercase lg:ml-4 lg:-mt-2 text-foreground">{pub.location}</div>
        </div>
        <div>
          <p className="mt-2 font-sans text-xl font-semibold leading-tight tracking-tight text-foreground-primary">{pub.title}</p>
        </div>
          <p className="mt-2 font-sans leading-snug text-foreground">{pub.authors.join(", ")}</p>
          <div className="flex flex-row flex-wrap mt-2 space-x-1">
            {pub.url && (<Link href={pub.url} aria-label="url"><span>URL</span></Link>)}
            {pub.pdf && (<Link href={pub.pdf} aria-label="pdf"><span>PDF</span></Link>)}
            {pub.code && (<Link href={pub.code} aria-label="code"><span>CODE</span></Link>)}
            {pub.bibtex && (<Link href={join("bibtex", pub.slug)}><span>BIB</span></Link>)}
          </div>
          {pub.tweet && <div className="flex flex-row items-start justify-start w-full mt-2" dangerouslySetInnerHTML={{__html: pub.tweet}} />}
      </div>)
  };
