import React from "react"
import Layout from "../components/layout"

class UserPage extends React.Component {
    constructor() {
        super();
        this.state = {user: {}};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/nirum`)
        .then(results => {
            return results.json();
        })
        .then(user => {
            this.setState({user: user})
        })
    }

    render () {
        return (
            <Layout>
                <h4>Open source projects</h4>
                <h1>Code</h1>
                <p>foo</p>
                <p>{this.state.user.name}</p>
            </Layout>
        )
    }

} 
export default UserPage