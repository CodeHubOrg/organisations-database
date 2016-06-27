import React, { Component } from 'react'
import OrganisationList from '../components/OrganisationList'
import OrganisationSelectionPanel from '../components/OrganisationSelectionPanel'
import * as actions from '../actions'

class App extends Component {

    render() {
        const { store } = this.context
        const organisations = store.getState().organisations
        const selectedOrganisation = getSelected()

        function onSelectOrganisation() {
            store.dispatch(actions.selectOrganisation(this.props.id))
        }

        function onDeselectOrganisation() {
            store.dispatch(actions.deSelectOrganisation(this.props.id))
        }

        function getSelected() {
            return organisations.filter(org => org.selected === true)[0]
        }

        return (
            <div>
                <h1>JavaScript tools and resources</h1>
				<h4>Find everything you need to get started with Javascript</h4>
                <OrganisationList
                    dispatch={store.dispatch}
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

// error is thrown if contextTypes is set in constructor
App.contextTypes = {
    store: React.PropTypes.object
}

export default App
