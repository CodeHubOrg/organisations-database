import React, { Component } from 'react'

class OrganisationListRow extends Component {

    render() {
        return(
                <tr onClick={
                  (this.props.selected) ? 
                  this.props.onDeselectOrganisation : 
                  this.props.onSelectOrganisation
                }
                >
                    <td className="name">{this.props.name}</td>
                    <td className="id">{this.props.id}</td>
                </tr>
        );
    }
}

export default OrganisationListRow
