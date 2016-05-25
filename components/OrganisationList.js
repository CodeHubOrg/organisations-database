import React, { Component } from 'react'
import OrganisationListRow from './OrganisationListRow'

export default class OrganisationList extends Component {

    render() {

    let { dispatch, organisations, onSelectOrganisation, onDeselectOrganisation } = this.props 

    	let orgs = this.props.organisations;
    	let rows = orgs.map(
    		(org, index) => {
                return (
                    <OrganisationListRow 
    		    		name={org.name}
                        selected={org.selected}
    		    		id={org.id} 
    		    		key={index}
    		    		onSelectOrganisation={onSelectOrganisation}
    		    		onDeselectOrganisation={onDeselectOrganisation}
		    		/>
                    )
                }
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
