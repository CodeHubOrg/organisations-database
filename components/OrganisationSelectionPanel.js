import React, { Component } from 'react'

class OrganisationSelectionPanel extends Component {

    render(){
      let { selectedOrganisation } = this.props
      let name = selectedOrganisation ? selectedOrganisation.name : 'None selected'

      return(
        <div className="panel">
          <div className="panel-heading">
            <h3 className="panel-title">Selected Organisation</h3>
          </div>
          <div className="panel-body">{ name }</div>
        </div>
      )
    }
}

export default OrganisationSelectionPanel
