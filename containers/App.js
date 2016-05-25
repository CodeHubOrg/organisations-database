import React, { Component } from 'react'
import OrganisationList from '../components/OrganisationList'
import * as actions from '../actions'

export default class App extends Component {

    render() {
        const {organisations, dispatch} = this.props

        function onSelectOrganisation() {
            console.log('selecting')
            let id = this.props.id
            let action = actions.selectOrganisation(this.props.id)
            dispatch(action)
        }

        let onDeselectOrganisation = function () {
            console.log('deselecting')
            let id = this.props.id
            let action = actions.deSelectOrganisation(this.props.id)
            dispatch(action)
        }

        return (
            <div>
                <h1>Organisations Database</h1>
                <OrganisationList
                    dispatch={dispatch}
                    organisations={organisations}
                    onSelectOrganisation={onSelectOrganisation}
                    onDeselectOrganisation={onDeselectOrganisation}
                />
            </div>
        )
    }
}
