import React, { Component } from 'react'
import OrganisationList from '../components/OrganisationList'
import OrganisationSelectionPanel from '../components/OrganisationSelectionPanel'
import * as actions from '../actions'


import SearchBar from '../components/search_bar';

export default class App extends Component {

    render() {
        const {organisations, dispatch} = this.props
        const selectedOrganisation = getSelected()

        function onSelectOrganisation() {
            dispatch(actions.selectOrganisation(this.props.id))
        }

        function onDeselectOrganisation() {
            dispatch(actions.deSelectOrganisation(this.props.id))
        }

        function getSelected() {
            return organisations.filter(org => org.selected === true)[0]
        }

        return (

            <div>
            <SearchBar />

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
