import React, { Component } from 'react'
import OrganisationList from '../components/OrganisationList'

export default class App extends Component {

    render() {
        const {organisations, dispatch } = this.props

        return (
            <div>
                <h1>Organisations Database</h1>
                <OrganisationList
                    organisations={organisations}
                />
            </div>
        )
    }
}
