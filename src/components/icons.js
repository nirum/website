import React from "react"

export const Twitter = ({ size }) => (<svg className={`w-${size} h-${size} fill-current`} xmlns="http://www.w3.org/2000/svg" aria-label="Twitter" viewBox="0 0 512 512"><path d="M437 152a72 72 0 01-40 12 72 72 0 0032-40 72 72 0 01-45 17 72 72 0 00-122 65 200 200 0 01-145-74 72 72 0 0022 94 72 72 0 01-32-7 72 72 0 0056 69 72 72 0 01-32 1 72 72 0 0067 50 200 200 0 01-105 29 200 200 0 00309-179 200 200 0 0035-37"/></svg>)
export const GitHub = ({ size }) => (<svg className={`w-${size} h-${size} fill-current`} xmlns="http://www.w3.org/2000/svg" aria-label="GitHub" viewBox="0 0 512 512"><path d="M335 449c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z" /></svg>)
export const Pinboard = ({ size }) => (<svg className={`w-${size} h-${size} fill-current`} xmlns="http://www.w3.org/2000/svg" aria-label="Pinboard" viewBox="0 0 512 512"><path d="M182 56L56 185l57-3 102 126-12 68 75-77 178 157-156-175 78-83-75 18-121-111"/></svg>)
export const Scholar = ({ size }) => (<svg className={`w-${size} h-${size} fill-current`} xmlns="http://www.w3.org/2000/svg" aria-label="Google Scholar" viewBox="0 0 512 512"><path d="M213 111l-107 94h69c5 45 41 64 78 67-7 18-4 27 7 39-43 1-103 26-103 67 4 45 63 54 92 54 38 1 81-19 90-54 4-35-10-54-31-71-23-18-28-28-21-40 15-17 35-27 39-51 2-17-2-28-6-43l45-38-1 16c-3 2-5 6-5 9v103c2 13 22 11 23 0V160c0-3-2-7-5-8v-25l16-16zm58 141c-61 10-87-87-38-99 56-11 83 86 38 99zm-5 73c60 13 61 63 10 78-44 9-82-4-81-30 0-25 35-48 71-48z"/></svg>)

export const Library = ({ size }) => (<svg className={`w-${size} h-${size}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-label="icon-library"><path className="primary" d="M3 8h18v1a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm6 3l-1 1v4l1 1H4l1-1v-4l-1-1h5zm5.5 0l-1 1v4l1 1h-5l1-1v-4l-1-1h5zm5.5 0l-1 1v4l1 1h-5l1-1v-4l-1-1h5zM3 20h18a1 1 0 010 2H3a1 1 0 010-2z"/><path className="secondary" d="M4 18h16a1 1 0 011 1v1H3v-1a1 1 0 011-1zm8.4-15.91l9 4c1 .43.68 1.91-.4 1.91H3c-1.08 0-1.4-1.48-.4-1.91l9-4a1 1 0 01.8 0z"/></svg>)
export const Link = ({ size }) => (<svg className={`w-${size} h-${size}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-label="icon-link"><path className="secondary" d="M19.48 13.03l-.02-.03a1 1 0 111.75-.98A6 6 0 0116 21h-4a6 6 0 110-12h1a1 1 0 010 2h-1a4 4 0 100 8h4a4 4 0 003.48-5.97z"/><path className="primary" d="M4.52 10.97l.02.03a1 1 0 11-1.75.98A6 6 0 018 3h4a6 6 0 110 12h-1a1 1 0 010-2h1a4 4 0 100-8H8a4 4 0 00-3.48 5.97z"/></svg>)
export const Document = ({ size }) => (<svg className={`w-${size} h-${size}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-label="icon-document"><path className="primary" d="M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 01-2 2H6a2 2 0 01-2-2V4c0-1.1.9-2 2-2z"/><path className="secondary" d="M14 2l6 6h-6z"/></svg>)
export const Code = ({ size }) => (<svg className={`w-${size} h-${size}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-label="icon-code"><rect width="18" height="18" x="3" y="3" className="primary" rx="2"/><path className="secondary" d="M8.7 13.3a1 1 0 01-1.4 1.4l-2-2a1 1 0 010-1.4l2-2a1 1 0 111.4 1.4L7.42 12l1.3 1.3zm6.6 0l1.29-1.3-1.3-1.3a1 1 0 111.42-1.4l2 2a1 1 0 010 1.4l-2 2a1 1 0 01-1.42-1.4zm-3.32 3.9a1 1 0 01-1.96-.4l2-10a1 1 0 011.96.4l-2 10z"/></svg>)
export const Back = ({ size }) => (<svg className={`w-${size} h-${size}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-label="icon-arrow-thick-left-circle"><circle cx="12" cy="12" r="10" className="primary"/><path className="secondary" d="M12 10h5a1 1 0 011 1v2a1 1 0 01-1 1h-5v2a1 1 0 01-1.7.7l-4-4a1 1 0 010-1.4l4-4A1 1 0 0112 8v2z"/></svg>)