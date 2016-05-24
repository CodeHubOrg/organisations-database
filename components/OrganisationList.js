import React, { Component } from 'react'
import OrganisationListRow from './OrganisationListRow'

export default class OrganisationList extends Component {

    render() {
    	let orgs = this.props.organisations;
    	let numberOfOrgs = orgs.length;
    	let rows = orgs.map(
    		(org, index) => <OrganisationListRow name={org.name} id={org.ud} key={index} />
    	);		

		return(
            <table className="table table-striped table-bordered table-hover">
				<thead className="thead">
                    <tr>
						<th>Name</th>
						<th>Id</th>
                    </tr>
				</thead>
				<tbody className="tbody">
					{rows}
				</tbody>
			</table>
        );
    }
}
