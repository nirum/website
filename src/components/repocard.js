import React, { useState, useEffect } from "react"
import * as EmojiJS from "emoji-js"
import dateFormat from "dateformat"
import Icon from "./icons"

const emojify = new EmojiJS()
emojify.allow_native = true;
emojify.replace_moe = 'unified';

export default ({ url }) => {
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setRepoData(json))
      .catch(error => console.error('Error: ', error))
  });

  if (!repoData) {
    return <div></div>
  } else {
    return (
      <div className="w-full px-6 pt-5 pb-6 border-2 border-gray-600 rounded-lg">
        <div className="">
          <h4>Created on: {dateFormat(Date.parse(repoData.created_at), "mmmm d, yyyy")}</h4>
          <p className="mt-2 text-xl font-semibold"><a href={repoData.html_url}>{repoData.full_name}</a></p>
          {repoData.description && <p className="my-2 leading-snug">{emojify.replace_colons(repoData.description)}</p>}
        </div>

        <div className="flex flex-row flex-wrap justify-start mt-2 -ml-2 text-gray-050 dark-mode:text-gray-200">
          <div className="inline-flex items-center px-4 py-1 m-1 rounded-full bg-brand-lighter dark-mode:bg-brand-darker">
              <Icon name="star" width="16" height="16" className="w-4 h-4 mr-1" />&nbsp;<span className="">{repoData.stargazers_count}&nbsp;stars</span>
          </div>

          <div className="inline-flex items-center px-4 py-1 m-1 rounded-full bg-brand-lighter dark-mode:bg-brand-darker">
              <Icon name="github_fork" width="16" height="16" className="w-4 h-4" />&nbsp;<span className="">{repoData.forks_count}&nbsp;forks</span>
          </div>

          <div className="inline-flex items-center px-4 py-1 m-1 rounded-full bg-brand-lighter dark-mode:bg-brand-darker">
              <Icon name="code" width="24" height="24" className="w-4 h-4 mr-1" />&nbsp;<span className="">{repoData.language}</span>
          </div>
        </div>
      </div>
    )
  }
}