import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import RepoCard from "../components/repocard"

import StarChart from "../charts/github-star-chart"
import LangChart from "../charts/github-lang-chart"

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

const UserPage = () => {
    const [repos, setRepos] = useState(null)
    const [stars, setStars] = useState(null)
    const [langs, setLangs] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/nirum/repos`)
        .then(response => response.json())
        .then(json => setRepos(json))
        .catch(error => console.error('Error: ', error))
    }, []);

    useEffect(() => {
        if (!repos) { return; }
        const validRepos = repos.filter(repo => !repo.fork);
        setStars(validRepos
            .sort((a, b) => b['stargazers_count'] - a['stargazers_count'])
            .slice(0, 6)
            .map(d => ({x: d.name, y: d.stargazers_count})));
        setLangs(validRepos.map(d => d.language));
    }, [repos])

    return (
        <Layout>
            <h4>Open source projects</h4>
            <h1>GitHub project stats</h1>
            <p>Having some fun exploring my GitHub activity using the <a href="https://developer.github.com/v3/">GitHub API</a> and <a href="https://d3js.org">d3.js</a>, inspired by <a href="https://github.com/bchiang7/octoprofile">Octoprofile</a>.</p>
            {/* <Profile user={UserData} /> */}
            {/* {mostStars.map((d, i) => { */}
                {/* return <RepoCard key={`repo_${i}`} repo={d} /> */}
            {/* })} */}
            <div className="flex flex-col">

                {/* Overview */}
                <div className="w-full mt-12">
                    <h2>Overview</h2>
                    <div className="grid justify-around gap-4 mt-8 md:grid-cols-2">
                        <div className="pb-2 text-gray-800 border-2 border-gray-600 rounded-lg dark-mode:text-gray-200">
                            <p className="pt-4 text-xl text-center">Most starred repositories</p>
                            <StarChart data={stars} />
                        </div>

                        <div className="pb-2 text-gray-800 border-2 border-gray-600 rounded-lg dark-mode:text-gray-200">
                            <p className="pt-4 text-xl text-center">Top programming languages</p>
                            <LangChart data={langs} />
                        </div>

                    </div>
                </div>

                {/* Repositories */}
                <div className="w-full mt-16">
                    <h2>Selected projects</h2>
                    <div className="grid gap-4 mt-8 md:grid-cols-2">
                        {fixed_repos.map((d, i) => {
                            return <RepoCard key={`repo_${i}`} url={`https://api.github.com/repos/${d}`} />
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
};
export default UserPage