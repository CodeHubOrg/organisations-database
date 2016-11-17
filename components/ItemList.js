import React, { Component } from 'react'
import ItemListRow from './ItemListRow'

export default class ItemList extends Component {

    render() {

    let { dispatch, items, onSelectItem, onDeselectItem } = this.props 

    	let orgs = this.props.items;
    	let rows = orgs.map(
    		(org, index) => {
                return (
                    <ItemListRow 
    		    		name={org.name}
                        selected={org.selected}
    		    		id={org.id} 
    		    		key={index}
    		    		onSelectItem={onSelectItem}
    		    		onDeselectItem={onDeselectItem}
		    		/>
                    )
                }
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
