import React, { Component } from 'react'
import ItemTile from './ItemTile'

class ItemTiles extends Component {

    render() {
        let resources = this.props.items;
        let tiles = resources.map(
            (resource, index) => {
                return (
                    <ItemTile resource = {resource} key = {index} />
                )
            }
        )

        return (
            <div className = "grid">
                {tiles}
            </div>
        )     

    }

}

ItemTiles.contextTypes = {
    store: React.PropTypes.object
}

export default ItemTiles