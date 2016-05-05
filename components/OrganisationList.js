import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { jsdom } from 'jsdom'

//TODO add bootstrap and jquery to package.json dependencies list?

//Snippet taken from https://www.npmjs.com/package/jquery
require("jsdom").env("", function(err, window) {
	if (err) {
		console.error(err);
		return;
	}
 
	var $ = require("jquery")(window);
});

//require('bootstrap')


class OrganisationList extends Component {


    render() {
		return(
            <table className="table">
				<thead className="thead">
						<th>Name</th>
						<th>Id</th>
				</thead>
				<tbody className="tbody">
					<tr>
						<td>{this.props.organisations[0].name}</td>
						<td>{this.props.organisations[0].id}</td>
					</tr>
				</tbody>
			</table>
        );
    }


}

export default OrganisationList