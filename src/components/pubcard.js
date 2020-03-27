import React from "react"

export default ({ pub }) => (
  <div className="border-warm-grey-400 border-t-2 pt-4 mt-8">
      <p className="font-sans text-warm-grey-600 tracking-wide">{pub.year}&nbsp;&bull;&nbsp;{pub.location.toUpperCase()}</p>
      <p className="font-sans leading-tight font-semibold mt-2 text-xl">{pub.title}</p>
      <p className="font-sans leading-snug text-warm-grey-600 mt-2">{pub.authors.join(", ")}</p>
      <div className="flex mt-4">
        {pub.url && <a className="button" href={pub.url}>
          <svg className="fill-current inline pr-1 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="secondary" d="M19.48 13.03l-.02-.03a1 1 0 111.75-.98A6 6 0 0116 21h-4a6 6 0 110-12h1a1 1 0 010 2h-1a4 4 0 100 8h4a4 4 0 003.48-5.97z"/><path class="primary" d="M4.52 10.97l.02.03a1 1 0 11-1.75.98A6 6 0 018 3h4a6 6 0 110 12h-1a1 1 0 010-2h1a4 4 0 100-8H8a4 4 0 00-3.48 5.97z"/></svg>
          URL
        </a>}
        {pub.pdf && <a className="button" href={pub.pdf}>
          <svg className="fill-current inline pr-1 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="primary" d="M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 01-2 2H6a2 2 0 01-2-2V4c0-1.1.9-2 2-2zm2 11a1 1 0 000 2h8a1 1 0 000-2H8zm0 4a1 1 0 000 2h4a1 1 0 000-2H8z"/><path class="secondary" d="M14 2l6 6h-6z"/></svg>
          PDF
        </a>}
        {pub.code && <a className="button" href={pub.code}>
          <svg className="fill-current inline h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M7.737 13.677a1.29 1.29 0 01-1.806 1.806l-2.58-2.58a1.295 1.295 0 010-1.806l2.58-2.58a1.289 1.289 0 111.806 1.806L6.086 12l1.677 1.677h-.026zm8.513 0L17.914 12l-1.677-1.677a1.292 1.292 0 01-.443-.974c0-.707.581-1.29 1.29-1.29.379 0 .74.168.985.458l2.58 2.58a1.295 1.295 0 010 1.806l-2.58 2.58a1.29 1.29 0 01-.846.316c-.708 0-1.29-.582-1.29-1.29 0-.305.108-.6.304-.832h.013zm-4.282 5.03a1.293 1.293 0 01-1.264 1.032 1.295 1.295 0 01-1.265-1.547l2.58-12.9a1.293 1.293 0 011.264-1.031 1.295 1.295 0 011.265 1.547l-2.58 12.9z" fill-rule="nonzero"/></svg>
          CODE
        </a>}
      </div>
  </div>
)

