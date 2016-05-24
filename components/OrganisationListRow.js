import React, { Component } from 'react'

class OrganisationListRow extends Component {

    render() {
        console.log('Row: '+this.props.id+' selected? :'+this.props.selected)
        return(
                <tr onClick={
                  (this.props.selected) ? 
                  this.props.onDeselectOrganisation.bind(this) : 
                  this.props.onSelectOrganisation.bind(this)
                }
                >
                    <td className="name">{this.props.name}</td>
                    <td className="id">{this.props.id}</td>
                </tr>
        );
    }
}

export default OrganisationListRow
