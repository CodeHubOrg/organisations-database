import React, { Component } from 'react'
import OrganisationListRow from './OrganisationListRow'

export default class OrganisationList extends Component {

    render() {
    	let onSelectOrganisation = function () {
    		console.log('selecting')
    	}

    	let onDeselectOrganisation = function () {
    		console.log('deselecting')
    	}

    	let orgs = this.props.organisations;
    	let numberOfOrgs = orgs.length;
    	let rows = orgs.map(
    		(org, index) => <OrganisationListRow 
						    		name={org.name} 
						    		id={org.id} 
						    		key={index}
						    		onSelectOrganisation={onSelectOrganisation}
						    		onDeselectOrganisation={onDeselectOrganisation}
						    		/>
    	);		

		return(
            <table className="table table-striped table-bordered table-hover">
				<thead className="thead">
						<th>Name</th>
						<th>Id</th>
				</thead>
				<tbody className="tbody">
					{rows}
				</tbody>
			</table>
        );
    }
}
