import Link from "next/link";
import { join } from "path";

function formatDate(dateString) {
  let d = new Date(dateString);
  let day = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  return year;
}

export const Library = ({ size }) => (
  <svg
    className={`w-${size} h-${size} fill-current`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    aria-label="icon-library"
  >
    <path d="M0 6l10-6 10 6v2H0V6zm0 12h20v2H0v-2zm2-2h16v2H2v-2zm0-8h4v8H2V8zm6 0h4v8H8V8zm6 0h4v8h-4V8z" />
  </svg>
);
export const Links = ({ size }) => (
  <svg
    className={`w-${size} h-${size} fill-current`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    aria-label="icon-link"
  >
    <path d="M9.26 13a2 2 0 01.01-2.01A3 3 0 009 5H5a3 3 0 000 6h.08a6.06 6.06 0 000 2H5A5 5 0 015 3h4a5 5 0 01.26 10zm1.48-6a2 2 0 01-.01 2.01A3 3 0 0011 15h4a3 3 0 000-6h-.08a6.06 6.06 0 000-2H15a5 5 0 010 10h-4a5 5 0 01-.26-10z" />
  </svg>
);
export const Document = ({ size }) => (
  <svg
    className={`w-${size} h-${size} fill-current`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    aria-label="icon-document"
  >
    <path d="M4 18h12V6h-4V2H4v16zm-2 1V0h12l4 4v16H2v-1z" />
  </svg>
);
export const Code = ({ size }) => (
  <svg
    className={`w-${size} h-${size} fill-current`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    aria-label="icon-code"
  >
    <path d="M.7 9.3l4.8-4.8 1.4 1.42L2.84 10l4.07 4.07-1.41 1.42L0 10l.7-.7zm18.6 1.4l.7-.7-5.49-5.49-1.4 1.42L17.16 10l-4.07 4.07 1.41 1.42 4.78-4.78z" />
  </svg>
);
export const Back = ({ size }) => (
  <svg
    className={`w-${size} h-${size} fill-current`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    aria-label="icon-arrow-thick-left-circle"
  >
    <path d="M0 10a10 10 0 1120 0 10 10 0 01-20 0zm2 0a8 8 0 1016 0 8 8 0 00-16 0zm8-2h5v4h-5v3l-5-5 5-5v3z" />
  </svg>
);

const Pill = ({ children }) => (
  <div className="inline-flex items-center rounded-sm px-2 py-1 hover:bg-indigo-200 dark:hover:bg-cyan-500 dark:hover:text-gray-100 text-indigo-800 dark:text-gray-300 border-gray-400 dark:border-gray-700 border fade">
    {children}
  </div>
);

export default function PubCard({ ...pub }) {
  return (
    <div className="card px-4 py-4 w-full max-w-md">
      <div className="uppercase text-sm sm:text-base text-indigo-500 dark:text-cyan-500 tracking-wider truncate">
        {formatDate(pub.date)}&nbsp;&bull;&nbsp;{pub.location}
      </div>

      <div className="relative w-full h-32 rounded-sm mt-4">
        <img
          src={pub.image}
          alt="..."
          className="rounded-sm object-cover h-32 w-full"
        />
      </div>
      <div className="mt-4 font-serif">
        <div className="leading-tight md:text-lg font-semibold bright-color">
          {pub.title}
        </div>
        <div className="text-sm md:text-base italic base-color mt-2">
          {pub.authors.join(", ")}
        </div>
      </div>
      <div className="h-0 grow"></div>
      <div className="my-4 flex flex-row text-sm space-x-2">
        {pub.url && (
          <a href={pub.url} className="h-3 cursor-pointer">
            <Pill>
              <Links size={3} />
              &nbsp;URL
            </Pill>
          </a>
        )}
        {pub.pdf && (
          <a href={pub.pdf} className="h-3 cursor-pointer">
            <Pill>
              <Document size={3} />
              &nbsp;PDF
            </Pill>
          </a>
        )}
        {pub.code && (
          <a href={pub.code} className="h-3 cursor-pointer">
            <Pill>
              <Code size={3} />
              &nbsp;CODE
            </Pill>
          </a>
        )}
      </div>
    </div>
  );
}
