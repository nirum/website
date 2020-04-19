import React, { useState, useEffect } from "react"
// import * as EmojiJS from "emoji-js"
// import emoji from "node-emoji"
import dateFormat from "dateformat"
import Icon from "./icons"

const pluralize = (value, word, plural = word + 's') => (value === 1) ? value + '&nbsp;' + word : value + '&nbsp;' + plural;

export default ({ repo }) => {

  // CSS
  const pill = "inline-flex items-center px-2 m-1 rounded-lg bg-brand-ternary"

  return (
    <div className="w-full px-6 pt-5 pb-6 border rounded-lg border-background-ternary">
      <div className="">
        <h4>Created: {repo.createdAt}</h4>
        <p className="mt-2 text-xl font-semibold"><a href={repo.url}>{repo.nameWithOwner}</a></p>
        {repo.descriptionHTML && <p className="my-2 leading-snug" dangerouslySetInnerHTML={{__html: repo.descriptionHTML}}></p>}
      </div>

      <div className="flex flex-row flex-wrap justify-start mt-2 -ml-2 text-foreground-primary">
        <div className={pill}>
          <span dangerouslySetInnerHTML={{__html: pluralize(repo.stargazers.totalCount, 'star')}}></span>
            {/* <Icon name="star" width="16" height="16" className="w-4 h-4 mr-1" />&nbsp;<span className="">{repoData.stargazers_count}&nbsp;stars</span> */}
        </div>
        <div className={pill}>
          <span dangerouslySetInnerHTML={{__html: pluralize(repo.forkCount, 'fork')}}></span>
        </div>
        <div className={pill}>
          <span>{repo.languages.edges[0].node.name}</span>
        </div>

        {/* <div className="inline-flex items-center px-4 py-1 m-1 rounded-full bg-brand-lighter dark-mode:bg-brand-darker"> */}
            {/* <Icon name="github_fork" width="16" height="16" className="w-4 h-4" />&nbsp;<span className="">{repoData.forks_count}&nbsp;forks</span> */}
        {/* </div> */}

        {/* <div className="inline-flex items-center px-4 py-1 m-1 rounded-full bg-brand-lighter dark-mode:bg-brand-darker"> */}
            {/* <Icon name="code" width="24" height="24" className="w-4 h-4 mr-1" />&nbsp;<span className="">{repoData.language}</span> */}
        {/* </div> */}
      </div>
    </div>)
};