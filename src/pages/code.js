import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
// import Profile from "../components/github-profile"
// import Repos from "../components/github-repos"
// import RepoCard from "../components/repocard"

// import UserData from "../data/user.json"
import ReposData from "../data/repos.json"
// import BarChart from "../components/bar-chart"
// import PieChart from "../charts/pie"
import TestChart from "../charts/test"

const UserPage = () => {
    const [stars, setStars] = useState(null)

    // const  const LIMIT = 5;
    // const sortProperty = 'stargazers_count';
    // const mostStarredRepos = repoData
    //   .filter(repo => !repo.fork)
    //   .sort((a, b) => b[sortProperty] - a[sortProperty])
    //   .slice(0, LIMIT);

    const addStars = () => {
        setStars(stars.map(d => {
            return {
                x: d.x,
                y: d.y + 5,
            }
        }))
    }

    const subStars = () => {
        setStars(stars.map(d => {
            return {
                x: d.x,
                y: d.y - 5,
            }
        }))
    }

    useEffect(() => {
        setStars(ReposData
            .filter(repo => !repo.fork)
            .sort((a, b) => b['stargazers_count'] - a['stargazers_count'])
            .slice(0, 6)
            .map(d => ({x: d["name"], y: d["stargazers_count"]})));
    }, [])


    return (
        <Layout>
            <h4>Open source projects</h4>
            <h1>GitHub project stats</h1>
            {/* <Profile user={UserData} /> */}
            {/* <Repos repos={ReposData} /> */}
            {/* {mostStars.map((d, i) => { */}
                {/* return <RepoCard key={`repo_${i}`} repo={d} /> */}
            {/* })} */}
            <div className="flex flex-row justify-around mt-8">
                <div className="w-full border-2 border-brand">
                    <TestChart data={stars} />
                    <div className="flex flex-row my-4">
                        <button onClick={addStars} className="cursor-pointer px-4 py-1 bg-brand text-gray-200 rounded-md font-semibold">ADD</button>
                        <button onClick={subStars} className="cursor-pointer ml-4 px-4 py-1 bg-brand text-gray-200 rounded-md font-semibold">Subtract</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
};
export default UserPage