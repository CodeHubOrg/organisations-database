import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { jsdom } from 'jsdom'
import OrganisationListRow from './OrganisationListRow'

//Snippet taken from https://www.npmjs.com/package/jquery
require("jsdom").env("", function(err, window) {
	if (err) {
		console.error(err);
		return;
	}
 
	var $ = require("jquery")(window);
	require('bootstrap');
});


class OrganisationList extends Component {
	
    render() {
		var numberOfOrgs = this.props.organisations.length;
		var rows = [];
		var counter = 0;
		for(var i=0; i<numberOfOrgs; i++) {
			rows.push(<OrganisationListRow name={this.props.organisations[i].name} id={this.props.organisations[i].id} key={counter}/>);
			counter++;
		};
		return(
            <table className="table table-striped table-bordered table-hover">
				<thead className="thead">
						<th>Name</th>
						<th>Id</th>
				</thead>
				<tbody className="tbody">
					{rows}
					//<OrganisationListRow name={this.props.organisations[0].name} id={this.props.organisations[0].id}/>
				</tbody>
			</table>
        );
    }


}

export default OrganisationList