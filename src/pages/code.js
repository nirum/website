import React from "react"
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

    // const  const LIMIT = 5;
    // const sortProperty = 'stargazers_count';
    // const mostStarredRepos = repoData
    //   .filter(repo => !repo.fork)
    //   .sort((a, b) => b[sortProperty] - a[sortProperty])
    //   .slice(0, LIMIT);

    const mostStars = ReposData
        .filter(repo => !repo.fork)
        .sort((a, b) => b['stargazers_count'] - a['stargazers_count'])
        .slice(0, 4)
        .map(d => ({x: d["name"], y: d["stargazers_count"]}));
    console.log(mostStars)

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
                <div className="w-96 border-2 border-brand">
                    <TestChart data={mostStars} width={384} height={330} />
                </div>
            </div>
        </Layout>
    )
};
export default UserPage