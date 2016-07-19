import React, { Component } from 'react'
import OrganisationTile from './OrganisationTile'

class OrganisationTiles extends Component {

    render() {
        let resources = this.props.organisations;
        let tiles = resources.map(
            (resource, index) => {
                return (
                    <OrganisationTile resource = {resource} key = {index} />
                )
            }
        )

        return (
            <div className = "grid">
                {tiles}
            </div>
        )     

    }

}

OrganisationTiles.contextTypes = {
    store: React.PropTypes.object
}

export default OrganisationTiles