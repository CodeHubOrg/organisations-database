import React, { Component } from 'react'
import FilterBar from '../components/FilterBar'
import OrganisationList from '../components/OrganisationList'
import OrganisationSelectionPanel from '../components/OrganisationSelectionPanel'
import * as actions from '../actions'

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
                <h1>JavaScript tools and resources</h1>
				<h4>Find everything you need to get started with Javascript</h4>
				<br />
				<FilterBar />
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
