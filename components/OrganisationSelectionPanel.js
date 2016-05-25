import React, { Component } from 'react'

class OrganisationSelectionPanel extends Component {
  
    render(){
      let { selected } = this.props

      return(
        <div className="panel">
          <div className="panel-heading">
            <h3 className="panel-title"></h3>
          </div>
          <div className="panel-body">{ selected }</div>
        </div>
      )
    }
}

export default OrganisationSelectionPanel
