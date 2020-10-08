import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"
import RepoCard from "../components/repository-card"

export default ({ data }) => {
    const repos = data.githubData.data.user.repositories.edges

    return (
        <Layout>
            <Title text="Selected GitHub projects" />
            <div className="flex flex-col mt-8">
                <div className="w-full">
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
