import React, { Component } from 'react'
import OrganisationList from '../components/OrganisationList'
import OrganisationSelectionPanel from '../components/OrganisationSelectionPanel'
import * as actions from '../actions'

export default class App extends Component {

    render() {
        const {organisations, dispatch} = this.props
        const selected = displaySelection()

        function onSelectOrganisation() {
            let id = this.props.id
            let action = actions.selectOrganisation(this.props.id)
            dispatch(action)
        }

        function onDeselectOrganisation() {
            let id = this.props.id
            let action = actions.deSelectOrganisation(this.props.id)
            dispatch(action)
        }

        function displaySelection() {
            return organisations.reduce((name, org) => {
                    return org.selected === true 
                    ? org.name 
                    : 'None selected'
                },'None selected')
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
                <OrganisationSelectionPanel
                    selected={selected}
                />
            </div>
        )
    }
}
