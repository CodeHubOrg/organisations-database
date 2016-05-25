import React, { Component } from 'react'
import OrganisationList from '../components/OrganisationList'
import OrganisationSelectionPanel from '../components/OrganisationSelectionPanel'
import * as actions from '../actions'

export default class App extends Component {

    render() {
        const {organisations, dispatch} = this.props
        const selectedOrganisation = getSelected()

        console.log('Selected org: '+JSON.stringify(selectedOrganisation, null, 3))

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

        function getSelected() {
            return organisations.filter(org => org.selected === true)[0] || null
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
                    selectedOrganisation={selectedOrganisation}
                />
            </div>
        )
    }
}
