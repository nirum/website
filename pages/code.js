import fetch from "node-fetch";
import { repositories } from "../components/metadata";
import path from "path";
import emoji from "node-emoji";

const pluralize = (value, word, plural = word + "s") =>
  value === 1 ? value + " " + word : value + " " + plural;

const GitHubBookmark = ({ size }) => (
  <svg
    className={`w-${size} h-${size} fill-current`}
    viewBox="0 0 10 16"
    aria-label="icon-bookmark"
  >
    <path d="M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6 3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03.7-2.16h.25l.7 2.16 2.3.03c.23 0 .27.08.09.23h.01z"></path>
  </svg>
);
const GitHubRepo = ({ size }) => (
  <svg
    className={`w-${size} h-${size} fill-current`}
    viewBox="0 0 12 16"
    aria-label="icon-repo"
  >
    <path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path>
  </svg>
);
const GitHubCode = ({ size }) => (
  <svg
    className={`w-${size} h-${size} fill-current`}
    viewBox="0 0 14 16"
    aria-label="icon-code"
  >
    <path d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path>
  </svg>
);
const GitHubFork = ({ size }) => (
  <svg
    className={`w-${size} h-${size} fill-current`}
    viewBox="0 0 10 16"
    aria-label="icon-fork"
  >
    <path d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path>
  </svg>
);

const Pill = ({ children }) => (
  <div className="inline-flex items-center px-2 rounded-lg bg-indigo-200 text-indigo-800">
    {children}
  </div>
);

const Card = ({
  full_name,
  stargazers_count,
  forks_count,
  html_url,
  description,
}) => (
  <div className="border border-gray bg-white px-3 py-4 rounded-md shadow-md">
    <div className="font-mono text-xs">
      <a href={html_url}>
        <div className="flex flex-row space-x-1">
          <div>{full_name}</div>
          <div className="flex-grow"></div>
          <div>
            <GitHubRepo size="4" />
          </div>
        </div>
      </a>
    </div>
    <div className="mt-2">{emoji.emojify(description)}</div>
    <div className="flex flex-row font-sans space-x-2 mt-2">
      <Pill>
        <GitHubBookmark size="3" /> {pluralize(stargazers_count, "star")}
      </Pill>
      <Pill>
        <GitHubFork size="3" /> {pluralize(forks_count, "fork")}
      </Pill>
    </div>
  </div>
);

export async function getStaticProps() {
  const data = [];
  for (let index = 0; index < repositories.length; index++) {
    const response = await fetch(
      new URL(path.join("https://api.github.com/repos/", repositories[index]))
    );
    const json = await response.json();
    data.push(json);
  }

  return {
    props: {
      repos: data,
    },
  };
}

export default function CodePage({ repos }) {
  return (
    <div className="mt-8">
      <article className="prose text-gray-dark prose-sm font-serif">
        <h2>Code</h2>
        <p>Selected GitHub repositories.</p>
        <div className="flex flex-col space-y-8 mt-12">
          {repos.map((r, i) => (
            <Card key={i} {...r} />
          ))}
        </div>
      </article>
    </div>
  );
}
