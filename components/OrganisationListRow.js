import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'


class OrganisationListRow extends Component {

    //onSelectOrganisation: function() {

    //},

render() {
    return(
                <tr onClick={
                  (this.props.selected) ? 
                  this.props.onDeselectOrganisation : 
                  this.props.onSelectOrganisation
                }
                >
                    <td className="name">{this.props.name}}</td>
                    <td className="id">{this.props.id}</td>
                </tr>
        );
    }
}

export default OrganisationListRow