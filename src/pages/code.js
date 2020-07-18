import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"
import RepoCard from "../components/repository-card"

import StarChart from "../charts/github-star-chart"
import LangChart from "../charts/github-lang-chart"

const parseStargazers = repos => repos.map(d => ({x: d.node.name, y: d.node.stargazers.totalCount}));
const parseLanguages = repos => {
    const nested_langs = repos.map(d => d.node.languages.edges.map(d => d.node.name))
    return nested_langs.reduce((prev, curr) => prev.concat(curr));
}

export default ({ data }) => {
    const repos = data.githubData.data.user.repositories.edges
    const stars = parseStargazers(repos.slice(0, 6));
    const langs = parseLanguages(repos);
    const header = "mb-8";

    return (
        <Layout>
            <Title text="GitHub project stats" />
            <p><h4>Exploring my GitHub activity using the <a href="https://developer.github.com/v3/">GitHub API</a> and <a href="https://d3js.org">d3.js</a>, inspired by <a href="https://github.com/bchiang7/octoprofile">Octoprofile</a>.</h4></p>
            <div className="flex flex-col mt-4">
                <div className="w-full">
                    <h2 className={header}>Overview</h2>
                    <div className="grid justify-around gap-4 mt-4 md:grid-cols-2">
                        <div className="pb-2 border rounded-lg shadow-md text-foreground border-foreground-secondary">
                            <div className="pt-4 text-xl text-center text-foreground-primary">Most starred repositories</div>
                            <StarChart data={stars} />
                        </div>
                        <div className="pb-2 border rounded-lg shadow-md text-foreground border-foreground-secondary">
                            <div className="pt-4 text-xl text-center text-foreground-primary">Top programming languages</div>
                            <LangChart data={langs} />
                        </div>
                    </div>

                </div>
                <div className="w-full">
                    <h2 className={header}>Selected projects</h2>
                    <div className="grid gap-4 mt-4 md:grid-cols-2">
                        {repos.slice(0, 6).map(d => {
                            return <RepoCard key={d.node.id} repo={d.node} />
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export const githubUserQuery = graphql`
    query {
        githubData {
            data {
                user {
                    updatedAt
                    followers {totalCount}
                    gists {totalCount}
                    repositories {
                        totalCount
                        edges {
                            node {
                                id
                                name
                                createdAt(fromNow: true)
                                description
                                descriptionHTML
                                forkCount
                                shortDescriptionHTML
                                nameWithOwner
                                url
                                languages {
                                    edges {
                                        node {
                                            id
                                            name
                                            color
                                        }
                                    }
                                }
                                stargazers {
                                    totalCount
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
