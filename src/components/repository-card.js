import React from "react"

const GitHubBookmark = ({ size }) => (<svg className={`w-${size} h-${size} fill-current`} viewBox="0 0 10 16" aria-label="icon-bookmark"><path d="M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6 3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03.7-2.16h.25l.7 2.16 2.3.03c.23 0 .27.08.09.23h.01z"></path></svg>)
const GitHubRepo = ({ size }) => (<svg className={`w-${size} h-${size} fill-current`} viewBox="0 0 12 16" aria-label="icon-repo"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>)
const GitHubCode = ({ size }) => (<svg className={`w-${size} h-${size} fill-current`} viewBox="0 0 14 16" aria-label="icon-code"><path d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>)
const GitHubFork = ({ size }) => (<svg className={`w-${size} h-${size} fill-current`} viewBox="0 0 10 16" aria-label="icon-fork"><path d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>)

const pluralize = (value, word, plural = word + 's') => (value === 1) ? value + '&nbsp;' + word : value + '&nbsp;' + plural;

export default ({ repo }) => {

  // CSS
  const pill = "inline-flex items-center px-2 m-1 rounded-lg bg-brand-ternary"

  return (
    <div className="w-full px-6 pt-5 pb-6 border rounded-lg border-background-ternary">
      <div className="">
        <h4>Created: {repo.createdAt}</h4>
        <div className="mt-2 text-xl font-semibold tracking-tight">
          <p className="inline-flex items-center">
              <a className="mr-2" href={repo.url}>{repo.nameWithOwner}</a>
              <GitHubRepo size="6" />
          </p>
        </div>
        {repo.descriptionHTML && <p className="my-4 leading-snug" dangerouslySetInnerHTML={{__html: repo.descriptionHTML}}></p>}
      </div>

      <div className="flex flex-row flex-wrap justify-start mt-2 -ml-2 text-foreground-primary">
        <div className={pill}>
          <GitHubBookmark size="3" />
          <span className="ml-1" dangerouslySetInnerHTML={{__html: pluralize(repo.stargazers.totalCount, 'star')}}></span>
        </div>
        <div className={pill}>
          <GitHubFork size="3" />
          <span className="ml-1" dangerouslySetInnerHTML={{__html: pluralize(repo.forkCount, 'fork')}}></span>
        </div>
        <div className={pill}>
          <GitHubCode size="3" />
          <span className="ml-1">{repo.languages.edges[0].node.name}</span>
        </div>
      </div>
    </div>)
};