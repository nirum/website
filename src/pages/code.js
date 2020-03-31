import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Profile from "../components/github-profile"
import Repos from "../components/github-repos"

const UserPage = () => {

    // State
    const [user, setUser] = useState();
    const [repos, setRepos] = useState();

    // Initial state
    useEffect(() => {
        fetch(`https://api.github.com/users/nirum`)
        .then(results => results.json())
        .then(setUser)
    }, []);

    useEffect(() => {
        fetch(`https://api.github.com/users/nirum/repos?per_page=100`)
        .then(results => results.json())
        .then(setRepos)
    }, []);

    return (
        <Layout>
            <h4>Open source projects</h4>
            <h1>GitHub project stats</h1>
            {user && <Profile user={user} />}
            {repos && <Repos repos={repos} />}
        </Layout>
    )

};
export default UserPage