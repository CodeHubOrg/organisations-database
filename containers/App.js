import React, { Component } from 'react'
import OrganisationList from '../components/OrganisationList'

class App extends Component {

    render() {
        return (
            <div>
                <h1>Organisations Database</h1>
                <OrganisationList organisations={this.props} />
            </div>
        )
    }
}

export default App
