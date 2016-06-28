import React, { Component } from 'react'

class OrganisationSelectionPanel extends Component {

    render(){
      let { selectedOrganisation } = this.props
      let name = selectedOrganisation ? selectedOrganisation.name : 'None selected'
	  let description = selectedOrganisation ? selectedOrganisation.description : ''
	  let link = selectedOrganisation ? selectedOrganisation.url : ''
	  let linktext = selectedOrganisation ? 'Link to more info' : ''
	  let imagepath = selectedOrganisation ? selectedOrganisation.imagepath : ''
	  let imagealt = selectedOrganisation ? 'resource_logo' : ''

      return(
        <div className="panel">
          <div className="panel-heading">
            <h3 className="panel-title">Selected Organisation:</h3>
			<h4>{ name }</h4>
          </div>
          <div className="panel-body">
			<img className="resource-image" alt={imagealt} src={imagepath} />
			<p className="resource-descrip">{ description }</p>
			<a href={link}>{ linktext }</a>
		  </div>
        </div>
      )
    }
}

export default OrganisationSelectionPanel
