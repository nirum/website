import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
// import RepoCard from "../components/repocard"

import StarChart from "../charts/github-star-chart"
import LangChart from "../charts/github-lang-chart"

import Loading from "../components/loading"
import Alert from "../components/alert"

const fixed_repos = [
    "nirum/tableprint",
    "nirum/ADMM",
    "ganguli-lab/proxalgs",
    "brain-research/guided-evolutionary-strategies",
    "nirum/descent",
    "nirum/jetpack",
    "nirum/heather",
    "nirum/fibonacci",
    "baccuslab/deep-retina",
    "baccuslab/pyret",
]

export default ({ data }) => {
    const [repos, setRepos] = useState(null)
    const [stars, setStars] = useState(null)
    const [langs, setLangs] = useState(null)
    const [error, setError] = useState(null)

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/nirum/repos`)
    //     .then(response => response.json())
    //     .then(json => setRepos(json))
    //     .catch(err => setError(err));
    // }, []);

    // useEffect(() => {
    //     if (!repos) { return; }
    //     const validRepos = repos.filter(repo => !repo.fork);
    //     setStars(validRepos
    //         .sort((a, b) => b['stargazers_count'] - a['stargazers_count'])
    //         .slice(0, 6)
    //         .map(d => ({x: d.name, y: d.stargazers_count})));
    //     setLangs(validRepos.map(d => d.language));
    // }, [repos])

    return (
        <Layout>
            <h4>Open source projects</h4>
            <h1>GitHub project stats</h1>
            <p>Having some fun exploring my GitHub activity using the <a href="https://developer.github.com/v3/">GitHub API</a> and <a href="https://d3js.org">d3.js</a>, inspired by <a href="https://github.com/bchiang7/octoprofile">Octoprofile</a>.</p>
            <div className="flex flex-col">
                <div className="w-full mt-12">
                    <h2>Overview</h2>
                    <div className="my-4"></div>
                    <Loading />
                    <div className="my-4"></div>
                    <Alert header="GitHub API limit reached." text="The API rate limit is 60 requests per hour. Please try again later." />
                </div>

                {/* <div className="w-full mt-12">
                    {error && <Alert header="GitHub API limit reached." text="The API rate limit is 60 requests per hour. Please try again later." />}
                    {!error && (<div>
                        <h2>Overview</h2>
                        {(!stars && !langs) && <Loading />}
                        <div className="grid justify-around gap-4 mt-8 md:grid-cols-2">
                            {stars && (<div className="pb-2 text-gray-800 border-2 border-gray-600 rounded-lg dark-mode:text-gray-200">
                                <p className="pt-4 text-xl text-center">Most starred repositories</p>
                                <StarChart data={stars} />
                            </div>)}

                            {langs && (<div className="pb-2 text-gray-800 border-2 border-gray-600 rounded-lg dark-mode:text-gray-200">
                                <p className="pt-4 text-xl text-center">Top programming languages</p>
                                <LangChart data={langs} />
                            </div>)}

                        </div>
                    </div>)}
                </div>

                <div className="w-full mt-16">
                    {!error && (<div>
                        <h2>Selected projects</h2>
                        <div className="grid gap-4 mt-8 md:grid-cols-2">
                            {fixed_repos.map((d, i) => {
                                return <RepoCard key={`repo_${i}`} url={`https://api.github.com/repos/${d}`} />
                            })}
                        </div>
                    </div>)}
                </div> */}
            </div>
        </Layout>
    )
};

// export const userQuery = graphql`
//     query {
//         github {
//             user (login: "nirum") {
//                 name
//             }
//         }
//     }
// `